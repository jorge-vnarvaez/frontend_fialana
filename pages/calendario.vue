<template>
  <div
    class="
      flex flex-col
      lg:flex-row
      w-9/12
      lg:space-y-0
      space-y-8
      justify-between
      mx-auto
      xl:py-24
    "
  >
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
      events: [],
      weekday: [1, 2, 3, 4, 5, 6, 0]
    };
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    async getEventos() {
      this.events = [];

      await this.$axios
        .get(`${this.$config.apiUrl}/api/eventos`)
        .then((response) => {
          response.data.data.map((evento) => {
            this.events.push({
              id: evento.id,
              name: evento.attributes.nombre,
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