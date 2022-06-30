<template>
  <div class="bg-amber-50">
    <!-- [HERO] -->
    <div class="bg-neutral-900">
      <v-img
        src="/HERO-INICIO.jpg"
        height="910"
        class="text-white"
        :position="$vuetify.breakpoint.mobile ? 'center' : 'bottom'"
        gradient="rgba(23, 23, 23, .80), rgba(23,23,23, .60)"
      >
        <v-container
          class="text-white flex flex-col lg:justify-center align-start my-20"
          fill-height
        >
          <p class="text-3xl lg:text-5xl w-7/12 md:w-3/12 xl:w-2/12 mb-0">
            ¡Tu opinión Nos importa!
          </p>
          <span
            class="text-sm lg:text-xl w-9/12 lg:w-4/12 xl:w-96 text-left my-8"
            >Participa y únete a los nuevos desafíos en torno al desarrollo y
            producción de lana en la región de magallanes.</span
          >
          <button
            class="
              outline outline-2 outline-green-500
              px-5
              text-sm
              lg:text-base
              py-1
              rounded-full
              text-uppercase
              lg:font-medium
              hover:bg-green-500
            "
          >
            <a href="#section_encuesta"
              ><span class="text-white">Responder encuesta</span></a
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
          grid grid-cols-12 grid-rows-2
          gap-x-0
          lg:gap-x-10 lg:w-8/12
          w-full
          mx-auto
          lg:py-20
        `"
      >
        <div class="col-span-12 lg:col-span-6">
          <v-img
            src="/logo-fialana-c.svg"
            contain
            :class="`${$vuetify.breakpoint.mobile ? 'w-32 h-10' : 'w-80 h-24'}`"
          ></v-img>
        </div>
        <div class="bg-white col-span-12 lg:col-span-6 lg:order-2 mt-8">
          <!-- VIDEO -->
        </div>
        <div
          class="
            bg-white
            col-span-12
            lg:col-span-6 lg:row-span-2
            p-6
            lg:p-10
            rounded-br-3xl
            lg:rounded-br-none
            rounded-tr-none
            lg:rounded-tr-3xl
            shadow-xl
          "
        >
          <p class="text-amber-900 text-3xl">Lana magallánica</p>
          <v-divider class="px-8 bg-orange-200"></v-divider>
          <span class="block mt-5 font-medium lg:w-80"
            >Somos el Programa de comercialización de Lana Magallánica</span
          >
          <span class="block text-xs mt-5 lg:w-72 text-start"
            >Un programa que busca co-diseñar e implementar, en conjunto con
            productores y actores relevantes, soluciones que contribuyan a
            mejorar las condiciones de competitividad de la lana de la región de
            Magallanes y de la Antártica Chilena, y su comercialización.</span
          >
        </div>
      </div>
    </div>
    <!-- [PRIMERA SECCION] -->

    <!-- [LLAMADO A LA ACCION] -->
    <div class="bg-neutral-900" id="section_encuesta">
      <v-img
        src="/ovejas.jpg"
        gradient="rgba(23, 23, 23, .85), rgba(23,23,23, .85)"
        height="100vh"
      >
        <v-container
          class="flex flex-col align-center justify-center text-white"
          fill-height
        >
          <span class="text-3xl lg:text-5xl text-center">¿No lo sabías?</span>
          <span class="text-3xl lg:text-5xl text-center"
            >¡Participa con tu opinión!</span
          >

          <span class="block my-8 text-sm lg:text-xl lg:w-5/12 text-center">
            Tu participación y la información que nos puedas proporcionar con
            tus respuestas es sumamente valiosa para la etapa de diagnostico y
            para toda la ejecución del proyecto. Por eso, te invitamos a
            responder la siguiente encuesta.
          </span>

          <span class="text-sm lg:text-xl lg:w-5/12 text-center">
            Contesta este instrumento no te tomará más allá de 8 minutos y todas
            las respuestas serán de carácter confidencial.
          </span>

          <button
            class="
              outline outline-2 outline-green-500
              px-5
              mt-16
              text-sm
              lg:text-base
              py-1
              rounded-full
              text-uppercase
              lg:font-medium
              hover:bg-green-500
            "
          >
            <a
              href="https://goncastillos.typeform.com/to/f2VBNq0w?typeform-source=app.gather.town"
              target="_blank"
              ><span class="text-white">Responder encuesta</span></a
            >
          </button>

          <span class="text-sm lg:text-xl mt-6"
            >¡Muchas gracias por tu apoyo!</span
          >
        </v-container>
      </v-img>
    </div>
    <!-- [LLAMADO A LA ACCION] -->

    <!-- [NOTICIAS Y EVENTOS] -->
    <div class="bg-amber-50 xs:py-8 xl:py-12">
      <div class="px-8">
        <p
          class="text-3xl lg:text-5xl text-center mt-10 lg:mt-48 text-gray-900"
        >
          Noticias y Eventos
        </p>
        <div class="flex justify-center">
          <p class="text-sm lg:text-xl text-center mt-2 lg:w-4/12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
        </div>
      </div>

      <!-- <v-divider class="my-8 bg-${#cfcfcf} w-6/12 text-center"></v-divider> -->

      <div class="w-full flex flex-col align-center" v-show="destacadas.length > 0">
        <div>
          <p
            class="
              text-3xl
              lg:text-5xl
              text-center
              mt-10
              lg:mt-48
              text-gray-900
            "
          >
            Destacadas
          </p>

          <div class="flex justify-center">
            <span class="border-2 border-b border-cafe w-40"></span>
          </div>
        </div>

        <div>
          <v-divider></v-divider>
        </div>

        <div
          class="
            grid grid-cols-12
            gap-y-8
            lg:gap-y-0 lg:gap-x-8
            my-8
            w-10/12
            lg:w-9/12
          "
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
        class="
          absolute
          grid grid-cols-12
          lg:gap-x-8
          bg-white
          shadow-lg
          bottom-16
          w-10/12
          lg:w-9/12
          px-8
          mx-auto
          rounded-2xl
        "
      >
        <div
          class="py-12 col-span-12 lg:col-span-6 flex flex-col justify-center"
        >
          <p class="text-gray-900 text-xl lg:text-5xl mb-8">Contáctanos</p>
          <!-- <p class="font-semibold text-sm text-gray-900">(+1) 123 456 7890</p>
          <p class="font-semibold text-sm text-gray-900">(+1) 123 456 7891</p> -->

          <div class="grid grid-cols-12 lg:gap-x-2 mt-8 gap-y-4">
            <input
              type="text"
              placeholder="Nombre"
              class="
                bg-[#dcd2c7]
                col-span-12
                lg:col-span-6
                rounded-md
                py-5
                px-4
                placeholder:text-cafe
                text-cafe
                font-semibold
              "
            />
            <input
              type="text"
              placeholder="Email"
              class="
                bg-[#dcd2c7]
                col-span-12
                lg:col-span-6
                rounded-md
                py-5
                px-4
                placeholder:text-cafe
                text-cafe
                font-semibold
              "
            />
            <textarea
              placeholder="Escribe aquí tu mensaje"
              class="
                bg-[#dcd2c7]
                col-span-12
                rounded-md
                py-5
                px-4
                placeholder:text-cafe
                text-cafe
                h-60
                font-semibold
              "
            >
            </textarea>

            <button
              class="
                col-span-4
                lg:col-span-2
                outline outline-2 outline-cafe
                text-cafe
                px-5
                text-xs
                lg:text-base
                py-2
                mt-2
                rounded-full
                hover:bg-cafe hover:text-white
              "
            >
              Enviar
            </button>
          </div>
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
import CalendarioEventos from '../components/CalendarioEventos.vue';
import CardContenido from "../components/CardContenido.vue";

export default {
  layout: "default",
  components: { CardContenido, CalendarioEventos },
  name: "IndexPage",
  async asyncData(context) {
    const qs = require("qs");

    const query = qs.stringify({
      pagination: {
        limit: 3,
      },
      filters: {
        destacado: {
          $eq: true,
        }
      },
      sort: ["fecha_inicio:desc"],
      populate: ["imagen_referencia"],
    });

    const noticias = await context.$axios
      .get(`${context.$config.apiUrl}/api/noticias?${query}`)
      .then((res) => res.data);
    const eventos = await context.$axios
      .get(`${context.$config.apiUrl}/api/eventos?${query}`)
      .then((res) => res.data);

    const destacadas = noticias.data
      .concat(eventos.data)
      .sort(
        (a, b) =>
          Date.parse(b.attributes.fecha_inicio) -
          Date.parse(a.attributes.fecha_inicio)
      );

    return { destacadas };
  },
  computed: {
    padding() {
      switch(this.$vuetify.breakpoint.name) {
        case 'xs': return 'py-8'
        case 'sm': return 'py-8'
        case 'lg': return 'py-24'
      }
    }
  }
};
</script>