<template>
  <div class="bg-amber-50">
    <!-- [HERO] -->
    <div class="bg-neutral-900">
      <v-img
        src="/HERO-INICIO.jpg"
        height="910"
        class="text-white flex"
        :position="$vuetify.breakpoint.mobile ? 'center' : 'bottom'"
        gradient="rgba(23, 23, 23, .80), rgba(23,23,23, .90)"
      >
        <v-container
          class="text-white flex flex-col lg:justify-center align-start my-12 px-8"
          fill-height
        >
          <p class="text-3xl lg:text-5xl w-7/12 md:w-3/12 xl:w-4/12 mb-0">
            ¡Postula tu proyecto!
          </p>
          <span
            class="text-sm lg:text-xl w-9/12 lg:w-4/12 xl:w-8/12 text-left my-8"
            >Para enfrentar los desafíos regionales de sector necesitamos de
            talento y el ímpetu de Magallanes. Para esto, hemos abierto un
            llamado público a participar del proyecto a través de iniciativas
            que contribuyan a abordar tres problemáticas del sector.</span
          >

          <span class="text-sm lg:text-xl font-bold"
            >1. Falta de estandarización y trazabilidad en procesos
            productivos.</span
          >
          <span class="text-sm lg:text-xl font-bold"
            >2. Falta de canales de comercialización.</span
          >
          <span class="text-sm lg:text-xl font-bold"
            >3. Falta de mano de obra calificada.</span
          >

          <span class="text-sm lg:text-xl block mt-4 w-9/12 lg:w-4/12 xl:w-8/12">
            De esta forma, te ayudaremos a través de nuestros talleres
            formativos a desarrollar y/o transformar tu idea en un proyecto
            sólido y capaz de postular a futuros fondos concursables. Postula y
            sé parte de las iniciativas del futuro en el sector.
          </span>

          <button
            class="outline outline-2 outline-green-500 px-5 text-sm lg:text-base py-1 rounded-full text-uppercase lg:font-medium hover:bg-green-500 mt-8"
          >
            <a href="#postulacion_proyecto"
              ><span class="text-white">POSTULAR MI PROYECTO</span></a
            >
          </button>
        </v-container>
      </v-img>
    </div>
    <!-- [HERO] -->

    <!-- [PRIMERA SECCION] -->
    <div class="bg-amber-50 px-8">
      <div
        :class="`
          ${padding}
          grid grid-cols-12
          gap-x-0
          lg:gap-x-10
          w-full
          lg:w-8/12
          mx-auto
          lg:py-20
        `"
      >
        <div class="col-span-12 lg:col-span-6 row-span-1">
          <v-img
            src="/logo-fialana-c.svg"
            contain
            :class="`${$vuetify.breakpoint.mobile ? 'w-48 h-20' : 'w-80 h-24'}`"
          ></v-img>
        </div>

        <div class="bg-white col-span-12 lg:col-span-6 lg:order-2 mt-16">
          <video-player></video-player>
        </div>

        <div
          class="bg-white col-span-12 lg:col-span-6 lg:row-span-2 p-[20px] lg:p-[80px] rounded-br-3xl lg:rounded-br-none rounded-tr-none lg:rounded-tr-3xl shadow-xl h-[420px] lg:h-[520px] flex flex-col justify-center align-center"
        >
          <div>
            <p class="text-amber-900 text-3xl">Lana magallánica</p>
            <v-divider class="px-8 bg-orange-200"></v-divider>
            <span class="block mt-5 font-medium lg:w-80"
              >Somos el Programa de comercialización de Lana Magallánica</span
            >
            <span class="block text-xs mt-5 lg:w-72 text-start"
              >Un programa que busca co-diseñar e implementar, en conjunto con
              productores y actores relevantes, soluciones que contribuyan a
              mejorar las condiciones de competitividad de la lana de la región
              de Magallanes y de la Antártica Chilena, y su
              comercialización.</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- [PRIMERA SECCION] -->

    <!-- [LLAMADO A LA ACCION] -->
    <Postulacion id="postulacion_proyecto" />
    <!-- [LLAMADO A LA ACCION] -->

    <!-- [NOTICIAS Y EVENTOS] -->
    <div class="bg-amber-50 xs:py-8 xl:py-12">
      <div class="px-8">
        <p
          class="text-3xl lg:text-5xl text-center mt-10 lg:mt-48 text-gray-900"
        >
          Noticias y Eventos
        </p>
      </div>

      <div
        class="w-full flex flex-col align-center"
        v-show="destacadas.length > 0"
      >
        <div>
          <v-divider></v-divider>
        </div>

        <div
          class="grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8 my-8 w-10/12 lg:w-9/12"
        >
          <card-contenido
            v-for="(destacada, index) in destacadas.slice(0, 3)"
            :key="index"
            :contenido="destacada"
            class="col-span-12 lg:col-span-4"
          />
        </div>
      </div>
    </div>
    <!-- [NOTICIAS Y EVENTOS] -->

    <div class="bg-white py-8 lg:py-48">
      <calendario-eventos />
    </div>

    <!-- [CONTACTO] -->
    <div class="bg-amber-50 h-80"></div>
    <div class="relative bg-white h-[557px] flex justify-center">
      <div
        class="absolute grid grid-cols-12 lg:gap-x-8 bg-white shadow-lg bottom-16 w-10/12 lg:w-9/12 px-8 mx-auto rounded-2xl"
      >
        <div
          class="py-12 col-span-12 lg:col-span-6 flex flex-col justify-center"
        >
          <p class="text-gray-900 text-xl lg:text-5xl mb-8">Contáctanos</p>
          <!-- <p class="font-semibold text-sm text-gray-900">(+1) 123 456 7890</p>
          <p class="font-semibold text-sm text-gray-900">(+1) 123 456 7891</p> -->
          <v-form
            v-model="validado"
            lazy-validation
            ref="formulario"
            @submit="contactarse"
          >
            <div class="grid grid-cols-12 lg:gap-x-2 mt-8 gap-y-4">
              <v-text-field
                v-model="nombre"
                placeholder="Nombre"
                :rules="reglaNotNull"
                class="col-span-12 lg:col-span-6"
                background-color="#DCD2C7"
                solo
                flat
              >
              </v-text-field>

              <v-text-field
                v-model="email"
                placeholder="Email"
                :rules="reglaEmail"
                class="col-span-12 lg:col-span-6"
                background-color="#DCD2C7"
                solo
                flat
              >
              </v-text-field>

              <v-textarea
                v-model="mensaje"
                placeholder="Escribe aquí tu mensaje"
                :rules="reglaNotNull"
                class="col-span-12"
                background-color="#DCD2C7"
                solo
                flat
              >
              </v-textarea>

              <button
                type="submit"
                class="col-span-4 lg:col-span-2 outline outline-2 outline-cafe text-cafe px-5 text-xs lg:text-base py-2 mt-2 rounded-full hover:bg-cafe hover:text-white"
              >
                Enviar
              </button>
            </div>
          </v-form>
        </div>

        <div
          v-show="$vuetify.breakpoint.mobile ? false : true"
          class="col-span-6 pt-4 pb-4"
        >
          <v-img src="/productor-1.jpg" width="100%" height="100%" class="p-6">
            <v-img src="/logo-fialana-c.svg" width="237" height="73"> </v-img>
          </v-img>
        </div>
      </div>
    </div>

    <!-- [CONTACTO] -->
  </div>
</template>

<script>
import CalendarioEventos from "../components/CalendarioEventos.vue";
import CardContenido from "../components/CardContenido.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import Postulacion from "../components/Postulacion.vue";

export default {
  layout: "default",
  components: { CardContenido, CalendarioEventos, VideoPlayer, Postulacion },
  data() {
    return {
      validado: false,
      nombre: null,
      email: null,
      mensaje: null,
      reglaNotNull: [(v) => !!v || "Este campo es obligatorio"],
      reglaEmail: [
        (v) => !!v || "Este campo es obligatorio",
        (v) =>
          /.+@.+\..+/.test(v) || "Debe entregar una dirección de email válida",
      ],
    };
  },
  name: "IndexPage",
  methods: {
    async contactarse(e) {
      e.preventDefault();
      try {
        this.$refs.formulario.validate();
      } catch (e) {}
    },
  },
  async asyncData(context) {
    const qs = require("qs");

    const query = qs.stringify({
      filter: {
        destacado: {
          _eq: true,
        },
      },
      sort: ["fecha_inicio"],
    });

    const noticias = await context.$axios
      .get(`${context.$config.apiUrl}/items/noticias?${query}`)
      .then((res) => res.data);
    const eventos = await context.$axios
      .get(`${context.$config.apiUrl}/items/eventos?${query}`)
      .then((res) => res.data);

    const destacadas = noticias.data
      .concat(eventos.data)
      .sort((a, b) => Date.parse(b.fecha_inicio) - Date.parse(a.fecha_inicio));

    return { destacadas };

    return [];
  },
  computed: {
    padding() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "py-8";
        case "sm":
          return "py-8";
        case "lg":
          return "py-24";
      }
    },
  },
};
</script>
