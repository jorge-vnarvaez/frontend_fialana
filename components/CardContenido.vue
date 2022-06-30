<template>
  <div class="bg-white rounded-lg shadow-md">
    <v-img
      v-if="contenido.attributes.imagen_referencia.data"
      :src="`${$config.apiUrl}${contenido.attributes.imagen_referencia.data.attributes.url}`"
      class="rounded-tl-md rounded-tr-md h-72"
    ></v-img>
    <v-img
      v-if="!contenido.attributes.imagen_referencia.data"
      src="/ovejas.jpg"
      class="rounded-tl-md rounded-tr-md h-72"
    ></v-img>
    <div class="pa-6">
      <div class="flex">
        <span class="text-amber-600">{{
          contenido.attributes.tipo_contenido
        }}</span>
        <span class="block mx-2 text-amber-600">|</span>

        <span class="text-amber-600">{{
          formatear_fecha(contenido.attributes.fecha_inicio)
        }}</span>
      </div>

      <p class="text-xl mt-2 w-full h-[180px] lg:h-[80px] font-medium">
        {{ contenido.attributes.nombre.length > 50 ? contenido.attributes.nombre.slice(0, 50) + `...` : contenido.attributes.nombre }}
      </p>

      <div class="h-12">
        <p v-if="contenido.attributes.sumario" class="text-xs lg:text-sm lg:leading-loose">
          {{ contenido.attributes.sumario.slice(0, 101) }} ...
        </p>
      </div>
    </div>

    <div class="pa-6 flex justify-end align-end">
      <nuxt-link
        :to="{
          name: `${
            contenido.attributes.tipo_contenido == 'Noticia'
              ? 'noticia-slug'
              : 'evento-slug'
          }`,
          params: { slug: contenido.attributes.slug },
        }"
      >
        <button
          class="
            outline outline-2 outline-cafe
            text-cafe
            px-5
            mt-16
            text-xs
            lg:text-base
            py-1
            rounded-full
            hover:bg-cafe hover:text-white
          "
        >
          Ver más
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["contenido"],
  computed: {
    formatear_fecha() {
      return (fecha) => moment(fecha).format("DD/MM/YYYY");
    },
  },
};
</script>

<style>
</style>