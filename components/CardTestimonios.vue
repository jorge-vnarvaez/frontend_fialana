<template>
  <div class="bg-white text-gray-900 rounded-xl rounded-bl-0">
    <div class="flex flex-col justify-center">
      <p class="text-base font-medium">{{ testimonio.attributes.titulo }}</p>
      <span class="block h-[146px] sm:h-[240px] xl:h-[146px]">
        "{{ testimonio.attributes.cuerpo }}"
      </span>
    </div>

    <v-divider class="mt-12 mb-8"></v-divider>

    <div class="flex space-x-8 justify-start">
      <div v-if="testimonio.attributes.foto_autor.data">
        <v-img
          :src="`${$config.apiUrl}${testimonio.attributes.foto_autor.data.attributes.url}`"
        ></v-img>
      </div>

      <div>
        <v-img
          v-if="!testimonio.attributes.foto_autor.data"
          src="/place_holder_autor.png"
          width="45"
          height="41"
        ></v-img>
      </div>

      <div>
        <p class="text-sm font-bold">{{ testimonio.attributes.autor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimonio"],
};
</script>

<style>
</style>