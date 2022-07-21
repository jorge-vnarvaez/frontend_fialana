<template>
  <div class="my-16 flex flex-col align-center bg-white">
    <p class="text-3xl lg:text-5xl text-center w-6/12">
      Principales impulsores
    </p>

    <div
      class="
        grid grid-cols-12
        lg:gap-x-8
        gap-y-20
        my-16
        w-10/12
        align-center
      "
    >
      <div
        class="col-span-12 lg:col-span-6 flex space-x-8"
        v-for="impulsor in impulsores.data"
        :key="impulsor.id"
      >
        <v-img
          v-if="impulsor.attributes.logo.data"
          :src="`${$config.apiUrl}${impulsor.attributes.logo.data.attributes.url}`"
          :width="$vuetify.breakpoint.mobile ? 100 : 128"
          :height="$vuetify.breakpoint.mobile ? 100 : 128"
        ></v-img>

        <div>
          <p class="text-sm font-medium">{{ impulsor.attributes.nombre }}</p>
          <!-- [MOBILE] -->
          <span
            class="block text-xs"
            v-if="
              showInfoIndex != impulsor.id && $vuetify.breakpoint.mobile == true
            "
          >
            {{ impulsor.attributes.descripcion.slice(0, 260) }}
          </span>

          <span
            v-if="
              showInfoIndex == impulsor.id && $vuetify.breakpoint.mobile == true
            "
            class="block text-xs"
          >
            {{ impulsor.attributes.descripcion }}
          </span>
          <!-- [MOBILE] -->

          <span
            v-if="$vuetify.breakpoint.mobile == false"
            class="block text-xs w-10/12"
          >
            {{ impulsor.attributes.descripcion }}
          </span>

          <div class="mt-4 flex">
            <!-- [MOBILE] -->
            <div v-if="$vuetify.breakpoint.mobile == true">
              <button
                v-if="showInfoIndex != impulsor.id"
                class="bg-transparent text-xs"
                @click="showInfoIndex = impulsor.id"
              >
                Ver más
              </button>
              <button
                v-if="showInfoIndex == impulsor.id"
                class="bg-transparent text-xs"
                @click="showInfoIndex = false"
              >
                Ocultar
              </button>
            </div>

            <span  v-if="$vuetify.breakpoint.mobile == true" class="ml-[5px] mr-[5px]">|</span>
            <!-- [MOBILE] -->

            <button class="bg-transparent">
              <a
                class="text-decoration-none"
                :href="impulsor.attributes.urlWeb"
                target="_blank"
                ><span class="text-gray-900 text-xs">Visitar sitio web</span></a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfoIndex: false,
      impulsores: [],
    };
  },
  async fetch() {
    this.impulsores = await this.$axios
      .get(`${this.$config.apiUrl}/api/impulsores?populate=logo`)
      .then((res) => res.data);
  },
};
</script>

<style>
</style>