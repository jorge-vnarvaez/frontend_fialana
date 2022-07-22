<template>
  <div class="flex justify-center py-8" v-if="evento">
    <div class="w-[320px] lg:w-[1145px]">
      <v-img
        :src="`${
          evento.imagen_referencia
            ? $config.apiUrl + '/assets/' + evento.imagen_referencia
            : '/ovejas.jpg'
        }`"
        :width="$vuetify.breakpoint.mobile ? 320 : 1145"
        :height="$vuetify.breakpoint.mobile ? 350 : 437"
        class="p-5"
      >
        <div
          class="
            bg-orange-500
            w-[44px]
            lg:w-16
            h-[35px]
            lg:h-16
            px-[2px]
            py-[3px]
            lg:py-2
          "
        >
          <div class="flex flex-col align-center">
            <span
              class="
                bg-white
                text-xs
                lg:text-xl
                px-[4px]
                w-[40px]
                lg:w-[58px]
                text-uppercase text-center
                text-orange-500
                font-black
              "
              >{{ formatear_dia(evento.fecha_inicio) }}</span
            >
            <span class="text-xs lg:text-xl text-white">{{
              formatear_nro_dia(evento.fecha_inicio)
            }}</span>
          </div>
        </div>
      </v-img>

      <div class="flex mt-4 align-center text-gray-900">
        <span>{{ evento.tipo_contenido }}</span>
        <span class="block mx-2">|</span>
        <span>{{ formatear_fecha(evento.fecha_inicio) }}</span>
      </div>

      <p class="text-3xl">{{ evento.nombre }}</p>

      <div v-if="evento.descripcion" v-html="markdownToHtml(evento.descripcion)" class="text-justify mt-6"></div>

    </div>
  </div>
</template>

<script>
import moment from "moment";
import { marked } from 'marked';


export default {
  async asyncData(context) {
    const evento = await context.$axios
      .get(
        `${context.$config.apiUrl}/items/eventos/${context.params.id}`
      )
      .then((res) => res.data.data);

    return { evento };
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
     markdownToHtml() {
        return (markdown) => marked(markdown);
    }
  },
};
</script>

<style>
</style>