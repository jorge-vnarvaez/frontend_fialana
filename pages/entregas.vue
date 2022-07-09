<template>
  <div>
    <!-- [HERO] -->
     <div class="bg-neutral-900">
      <v-img
        src="/HERO-ENTREGAS.jpg"
        height="245"
        class="text-white"
        :position="$vuetify.breakpoint.mobile ? 'top' : 'center'"
        gradient="rgba(23, 23, 23, .75), rgba(23,23,23, .75)"
      >
        <v-container
          class="
            text-white
            flex flex-col
            justify-center
            align-start align-lg-center
            w-full
            px-8
          "
          fill-height
        >
          <p
            class="
              text-3xl
              lg:text-5xl
              w-7/12
              lg:w-8/12
              mb-0
              text-left text-lg-center
            "
          >
            Entregas
          </p>
        </v-container>
      </v-img>
    </div>

    <div class="py-[50px] lg:py-[100px]">
        <entregas />
    </div>
  </div>
</template>

<script>
import Entregas from '../components/Entregas.vue';
export default {
    components: { Entregas }
}
</script>

<style>

</style>