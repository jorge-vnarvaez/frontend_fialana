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
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Hoy
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Hoy</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mes</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 dias</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600" width="100%">
        <v-calendar
          v-model="focus"
          ref="calendar"
          locale="es"
          color="orange"
          :type="type"
          :weekdays="weekday"
          :events="events"
          @click:event="showEvent"
        >
        </v-calendar
      ></v-sheet>
    </div>

    <div class="flex flex-col space-y-8">
      <div v-for="evento in events" :key="evento.id" class="flex space-x-6">
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
                lg:text-lg
                px-[4px]
                w-[40px]
                lg:w-[58px]
                text-uppercase text-center text-orange-500
                font-black
              "
              >{{ formatear_dia(evento.start) }}</span
            >
            <span class="text-xs lg:text-xl text-white">{{
              formatear_nro_dia(evento.start)
            }}</span>
          </div>
        </div>

        <div>
          <p class="text-sm lg:text-xl font-medium mb-0">
            {{ evento.name }}
          </p>
          <div class="flex">
            <span class="text-amber-600 text-sm lg:text-xl">{{
              evento.tipo_contenido
            }}</span>
            <span class="block mx-2 text-amber-600 text-sm lg:text-xl">|</span>

            <span class="text-amber-600 text-sm lg:text-xl">{{
              formatear_fecha(evento.start)
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
      focus: "",
      type: "month",
      typeToLabel: {
        month: "Mes",
        week: "Semana",
        day: "Hoy",
        "4day": "4 Dias",
      },
      events: [],
      weekday: [1, 2, 3, 4, 5, 6, 0],
    };
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ event }) {
      this.$router.push({
        path: `/evento/${event.id}/${event.slug}`,
      });
    },
  },
  async fetch() {
    this.events = [];

    const qs = require("qs");

    const query = qs.stringify({
      sort: ["fecha_inicio"],
    });

    await this.$axios
      .$get(`${this.$config.apiUrl}/items/eventos?${query}`)
      .then((res) => {
        res.data.map((evento) => {
          this.events.push({
            id: evento.id,
            name: evento.nombre,
            slug: evento.slug,
            details: evento.descripcion,
            tipo_contenido: evento.tipo_contenido,
            start: evento.fecha_inicio,
            color: "orange",
          });
        });
      });
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