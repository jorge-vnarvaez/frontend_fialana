<template>
  <div
    class="
      flex flex-col
      lg:flex-row
      w-9/12
      lg:space-x-24 lg:space-y-0
      space-y-8
      justify-between
      mx-auto
    "
  >
    <div class="lg:w-5/12">
      <v-calendar classs="bg-transparent" locale="es" color="orange"> </v-calendar>
    </div>

    <div class="flex flex-col space-y-8">
      <div v-for="evento in eventos" :key="evento.id" class="flex space-x-6">
        <div class="bg-orange-500 w-[44px] lg:w-16 h-[35px] lg:h-16 px-[2px] py-[3px] lg:py-2">
          <div class="flex flex-col align-center">
            <span class="bg-white text-xs lg:text-xl px-[4px] w-[40px] lg:w-[58px] text-uppercase text-center text-orange-500 font-black">{{
              formatear_dia(evento.attributes.fecha_inicio)
            }}</span>
            <span class="text-xs lg:text-xl text-white">{{ formatear_nro_dia(evento.attributes.fecha_inicio) }}</span>
          </div>
        </div>

        <div>
          <p class="text-sm lg:text-xl font-medium mb-0">
            {{ evento.attributes.nombre }}
          </p>
          <div class="flex">
            <span class="text-amber-600 text-sm lg:text-xl">{{
              evento.attributes.tipo_contenido
            }}</span>
            <span class="block mx-2 text-amber-600 text-sm lg:text-xl">|</span>

            <span class="text-amber-600 text-sm lg:text-xl">{{
              formatear_fecha(evento.attributes.fecha_inicio)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      eventos: [],
    };
  },
  async fetch() {
    const qs = require("qs");

    const query = qs.stringify({
      sort: ["fecha_inicio:asc"],
    });

    this.eventos = await this.$axios
      .$get(`${this.$config.apiUrl}/api/eventos?${query}`)
      .then((res) => res.data);
  },
  computed: {
    formatear_dia() {
      moment.locale("ES_es");

      return (fecha) => moment(fecha).format("ddd");
    },
    formatear_nro_dia() {
      return (fecha) => moment(fecha).format("DD");
    },
    formatear_fecha() {
      return (fecha) => moment(fecha).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>
</style>