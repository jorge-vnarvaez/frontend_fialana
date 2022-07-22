<template>
  <div class="flex justify-center py-8" v-if="noticia">
    <div class="w-[320px] lg:w-[1145px]">
      <p class="mt-3 text-3xl">{{ noticia.nombre }}</p>
      <v-img
        v-if="noticia.imagen_referencia"
        :src="`${$config.apiUrl}/assets/${noticia.imagen_referencia}`"
        :width="$vuetify.breakpoint.mobile ? 320 : 1145"
        :height="$vuetify.breakpoint.mobile ? 350 : 437"
      ></v-img>
      <div class="flex mt-4 align-center text-gray-900">
        <span>{{ noticia.tipo_contenido }}</span>
        <span class="block mx-2">|</span>
        <span>{{ formatear_fecha(noticia.fecha_inicio) }}</span>
      </div>

      <div class="bg-neutral-900 my-4 py-4 px-6">
        <span class="text-2xl text-white font-semibold">{{ noticia.sumario }}</span>
      </div>


      <div v-html="markdownToHtml(noticia.descripcion)"></div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import { marked } from 'marked';

export default {
  async asyncData(context) {
    const noticia = await context.$axios
      .get(
        `${context.$config.apiUrl}/items/noticias/${context.params.id}`
      )
      .then((res) => res.data.data);

    return { noticia };
  },
  computed: {
    formatear_fecha() {
      return (fecha) => moment(fecha).format("DD/MM/YYYY");
    },
    markdownToHtml() {
        return (markdown) => marked(markdown);
    }
  }
};
</script>

<style>
</style>