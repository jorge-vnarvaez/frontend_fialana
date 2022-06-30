<template>
  <div class="flex justify-center py-8" v-if="noticia">
    <div class="w-[320px] lg:w-[1145px]">
      <v-img
        v-if="noticia.attributes.imagen_referencia.data"
        :src="`${$config.apiUrl}${noticia.attributes.imagen_referencia.data.attributes.url}`"
        :width="$vuetify.breakpoint.mobile ? 320 : 1145"
        :height="$vuetify.breakpoint.mobile ? 350 : 437"
      ></v-img>
      <div class="flex mt-4 align-center text-gray-900">
        <span>{{ noticia.attributes.tipo_contenido }}</span>
        <span class="block mx-2">|</span>
        <span>{{ formatear_fecha(noticia.attributes.fecha_inicio) }}</span>
      </div>

      <p class="mt-3 text-3xl">{{ noticia.attributes.nombre }}</p>

      <div v-html="markdownToHtml(noticia.attributes.descripcion)" class="text-justify"></div>
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
        `${context.$config.apiUrl}/api/noticias/${context.params.slug}/?populate=*`
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