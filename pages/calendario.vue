<template>
  <div
    class="
      flex flex-col
      w-9/12
      lg:space-y-0
      space-y-8
      justify-between
      mx-auto
      py-[50px]
      lg:py-[150px]
    "
  >
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
    <v-sheet height="500" width="100%">
      <v-calendar
        v-model="focus"
        ref="calendar"
        locale="es"
        color="orange"
        :type="type"
        :weekdays="weekday"
        :events="events"
        @change="getEventos"
        @click:event="showEvent"
      >
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
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
        name: 'evento-slug',
        params: { slug: event.slug }
      });
    },
    async getEventos() {
      this.events = [];

      await this.$axios
        .get(`${this.$config.apiUrl}/api/eventos`)
        .then((response) => {
          response.data.data.map((evento) => {
            this.events.push({
              id: evento.id,
              name: evento.attributes.nombre,
              slug: evento.attributes.slug,
              details: evento.attributes.descripcion,
              start: evento.attributes.fecha_inicio,
              color: "orange",
            });
          });
        });
    },
  },
};
</script>

<style>
</style>