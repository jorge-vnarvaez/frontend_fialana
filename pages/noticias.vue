<template>
  <div>
    <!-- [HERO] -->
     <div class="bg-neutral-900">
      <v-img
        src="/HERO-QUIENES-SOMOS.jpg"
        height="245"
        class="text-white"
        :position="$vuetify.breakpoint.mobile ? 'top' : 'center'"
        gradient="rgba(23, 23, 23, .75), rgba(23,23,23, .75)"
      >
        <v-container
          class="
            text-white
            flex flex-col
            justify-center
            align-start align-lg-center
            w-full
          "
          fill-height
        >
          <p
            class="
              text-3xl
              lg:text-5xl
              w-7/12
              lg:w-8/12
              mb-0
              text-left text-lg-center
            "
          >
            Noticias y Eventos
          </p>
        </v-container>
      </v-img>
    </div>
    <!-- [HERO] -->


    <!-- [NOTICIAS] -->
    <div>
        <noticias-list />
    </div>

    <!-- [NOTICIAS] -->

     <!-- [EVENTOS] -->
    <div>
        <eventos-list />
    </div>

    <!-- [EVENTOS] -->
  </div>
</template>

<script>
import NoticiasList from "../components/NoticiasList.vue";
import EventosList from "../components/EventosList.vue";

export default {
  components: { NoticiasList, EventosList },
};
</script>

<style>
</style>