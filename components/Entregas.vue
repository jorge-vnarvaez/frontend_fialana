<template>
  <v-container class="mx-auto grid grid-cols-12">
    <div
      class="col-span-12 lg:col-span-3 xl:col-span-2"
      v-if="organizadores.length > 0"
    >
      <div v-for="(organizador, i) in organizadores" :key="i">
        <div
          :class="`${
            index == i ? 'text-white bg-cafe' : 'text-cafe'
          } + ' border-bl-xl'`"
          @click="getContenidos(i, organizador.attributes.slug)"
        >
          <p class="py-4 px-4 mb-0 font-bold">
            {{ organizador.attributes.nombre }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-orange-50 col-span-12 lg:col-span-9 xl:col-span-10 p-8"
      v-if="contenidos.length > 0"
    >
      <div class="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-0">
        <div
          v-for="contenido in contenidos"
          :key="contenido.id"
          class="col-span-12 lg:col-span-4 shadow-md"
        >
          <v-img
            v-if="!contenido.attributes.es_video"
            height="180"
            :src="
              contenido.attributes.imagen_referencia.data
                ? $config.apiUrl +
                  contenido.attributes.imagen_referencia.data.attributes.url
                : '/productor-1.jpg'
            "
          >
          </v-img>

          <youtube
            v-if="contenido.attributes.es_video"
            player-width="100%"
            player-height="180"
            :video-id="getVideoId(contenido.attributes.url)"
            ref="youtube"
            class="aspect-auto"
          ></youtube>

          <div class="bg-white p-6 font-bold">
            {{ contenido.attributes.nombre }}
          </div>

          <div class="p-6" v-if="!contenido.attributes.es_video">
            <a
              :href="contenido.attributes.url"
              target="_blank"
              v-if="contenido.attributes.url"
            >
              <div
                class="
                  group
                  border border-cafe border-2
                  px-4
                  py-1
                  rounded-full
                  hover:bg-cafe
                  w-32
                  cursor-pointer
                "
              >
                <span
                  class="
                    block
                    text-decoration-none text-cafe
                    group-hover:text-white
                    text-center text-sm
                  "
                  >Descargar</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      organizadores: [],
      contenidos: [],
      index: 0,
      videoId: "",
    };
  },
  mounted() {
    this.getContenidos(0, "reportes-documentos");
  },
  methods: {
    getVideoId(url) {
      return this.$youtube.getIdFromURL(url);
    },
    async getContenidos(i, slug) {
      this.index = i;

      const qs = require("qs");

      const query = qs.stringify({
        populate: "*",
        filters: {
          organizador: {
            slug: {
              $eq: slug,
            },
          },
        },
      });

      this.contenidos = await this.$axios
        .$get(`${this.$config.apiUrl}/api/contenidos?${query}`)
        .then((res) => res.data);
    },
  },
  async fetch() {
    this.organizadores = await this.$axios
      .$get(`${this.$config.apiUrl}/api/organizadores`)
      .then((res) => res.data);
  },
};
</script>

<style>
</style>