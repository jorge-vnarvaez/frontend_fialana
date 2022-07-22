<template>
  <div>
    <!-- [VIDEO] -->
    <youtube
      :video-id="videoId"
      player-width="100%"
      player-height="100%"
      :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, loop: 1 }"
      :mute="true"
      ref="youtube"
      @ended="ended"
      class="h-screen w-screen"
    ></youtube>
    <!-- [VIDEO] -->

    <!-- [PRIMERA SECCION] -->
    <div class="bg-white py-12">
      <v-container
        class="
          flex flex-col
          md:flex-row
          align-center
          py-12
          px-8
          space-x-0
          md:space-x-16
        "
      >
        <div>
          <div class="flex flex-col align-center align-sm-start">
            <v-img src="/logo-oveja-c.png" width="72" height="72"></v-img>
            <p class="text-gray-900 text-3xl md:text-2xl mt-6">
              Lana magallánica
            </p>
          </div>

          <v-divider class="w-full bg-orange-200"></v-divider>
          <span
            class="
              block
              text-base text-gray-900 text-center text-sm-start
              my-4
              w-full
              md:w-7/12
              xl:1/12
            "
            >Somos el Programa de comercialización de Lana Magallánica</span
          >
          <span
            class="block text-sm text-center text-sm-start w-full md:w-9/12"
          >
            Un programa que busca co-diseñar e implementar, en conjunto con
            productores y actores relevantes, soluciones que contribuyan a
            mejorar las condiciones de competitividad de la lana de la región de
            Magallanes y de la Antártica Chilena, y su comercialización.
          </span>
        </div>

        <v-img
          src="/productor-1.jpg"
          :width="$vuetify.breakpoint.mobile ? 320 : 500"
          :height="$vuetify.breakpoint.mobile ? 350 : 369"
          class="mt-8"
        ></v-img>
      </v-container>
    </div>
    <!-- [PRIMERA SECCION] -->

    <!-- [OBJETIVOS ESPECIFICOS] -->
    <div class="bg-amber-50 text-gray-900 pb-32" v-if="objetivos.length > 0">
      <v-container class="pt-16 px-8">
        <div class="flex flex-col align-center">
          <p class="text-3xl lg:text-5xl mb-0">Objetivos específicos</p>
        </div>


        <v-divider class="mb-12 mt-8"></v-divider>

        <div class="grid grid-cols-12 lg:gap-x-12 gap-y-20">
          <div
            v-for="objetivo in objetivos"
            :key="objetivo.id"
            class="col-span-12 lg:col-span-4"
          >
            <div
              class="
                flex
                align-center
                justify-center
                bg-white
                rounded-full
                shadow-lg
                w-12
                h-12
                text-lg
                p-8
              "
            >
              0{{ objetivo.id }}
            </div>
            <p class="text-sm mt-4 mb-5">{{ objetivo.label }}</p>
            <span class="text-xs">
              {{ objetivo.descripcion }}
            </span>
          </div>
        </div>
      </v-container>
    </div>
    <!-- [OBJETIVOS ESPECIFICOS] -->

    <!-- [ETAPAS Y RESULTADOS] -->
    <div class="py-[50px] lg:py-[150px]">
      <p class="text-3xl lg:text-5xl text-center">Etapas y resultados</p>
      <div class="flex justify-center">
        <span
          class="block text-xs lg:text-xl text-center w-full lg:w-8/12 px-8"
        >
          Aqui puedes revisar las etapas y resultados de cada etapa del
          proyecto.
        </span>
      </div>

      <div class="flex justify-center mt-16">
        <span class="border border-b w-10/12 lg:w-[1000px]"></span>
      </div>

      <timeline-etapas />
    </div>

    <!-- [ETAPAS Y RESULTADOS] -->

    <!-- [TESTIMONIOS] -->
    <!-- <div
      v-if="testimonios.length > 0"
      class="
        bg-neutral-900
        text-white
        pt-16
        pb-28
        px-8
        flex flex-col
        align-center
      "
    >
      <p class="text-3xl lg:text-5xl">Testimonios</p>
      <span class="block text-center text-sm">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </span>

      <div
        class="
          grid grid-cols-12
          mt-16
          gap-y-16 gap-x-0
          lg:gap-x-8
          w-full
          lg:w-10/12
        "
      >
        <card-testimonios
          v-for="testimonio in testimonios.slice(0, 3)"
          :key="testimonio.id"
          :testimonio="testimonio"
          class="col-span-12 lg:col-span-4 p-8"
        />
      </div>
    </div> -->
    <!-- [TESTIMONIOS] -->
  </div>
</template>

<script>
// import CardTestimonios from "../components/CardTestimonios.vue";
import TimelineEtapas from "../components/TimelineEtapas.vue";

export default {
  components: {
    // CardTestimonios,
    TimelineEtapas,
  },
  data() {
    return {
      videoId: "K2bNsCSmuXE",
    };
  },
  methods: {
    ended() {
      this.$refs.youtube.player.seekTo(0);
    },
  },
  async asyncData(context) {
    const objetivos = await context.$axios
      .get(`${context.$config.apiUrl}/items/objetivos`)
      .then((res) => res.data.data);

    // await context.store.dispatch("testimonios/cargarTestimonios");


    return { objetivos };
  },
  computed: {
    // testimonios() {
    //   return this.$store.getters["testimonios/getTestimonios"];
    // },
    padding() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "py-8";
        case "sm":
          return "py-8";
        case "lg":
          return "py-24";
        case "xl":
          return "py-24";
      }
    },
  },
};
</script>

<style>
</style>