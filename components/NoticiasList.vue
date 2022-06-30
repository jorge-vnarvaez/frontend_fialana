<template>
  <div class="flex justify-center flex-col align-center" v-if="noticias.length > 0">
    <p class="text-3xl text-center mt-16 text-gray-900">Noticias</p>
    <span class="border-2 border-b border-cafe w-20"></span>

    <div class="w-full lg:w-9/12 mb-16">
      <div class="grid grid-cols-12 mt-16 lg:gap-x-8 gap-y-8 px-8">
        <div
          v-for="noticia in noticias"
          :key="noticia.id"
          class="col-span-12 lg:col-span-4"
        >
          <card-contenido :contenido="noticia" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardContenido from "./CardContenido.vue";
export default {
  components: { CardContenido },
  data() {
    return {
      noticias: [],
    };
  },
  async fetch() {
    this.noticias = await this.$axios
      .$get(`${this.$config.apiUrl}/api/noticias?populate=*`)
      .then((res) => res.data);
  },
};
</script>

<style>
</style>