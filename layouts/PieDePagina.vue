<template>
  <div>
    <footer class="bg-cafe">
      <v-container class="py-16 px-8">
        <!-- [LOGOS] -->
        <div
          class="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0"
        >
          <div>
            <v-img src="/logo-fia-footer.svg" width="266" height="81"></v-img>
          </div>

          <div>
            <v-img
              src="/logos-footer.svg"
              :width="$vuetify.breakpoint.mobile ? 318 : 534"
              :height="$vuetify.breakpoint.mobile ? 39 : 66"
              contain
            ></v-img>
          </div>
        </div>
        <!-- [LOGOS] -->

        <v-divider class="bg-white my-16"></v-divider>

        <!-- [INFO Y RRSS] -->
        <div class="text-white">
          <p
            class="text-uppercase text-base lg:text-lg mb-0 w-full lg:w-80 font-bold"
          >
            Programa de comercialización de lana magallánica
          </p>

          <div class="flex flex-col lg:flex-row justify-between align-center mb-[20px] lg:mb-[0px]">
            <span class="block my-6 w-full lg:w-4/12 italic font-semibold"
              >Iniciativa: Mejora de las condiciones de competitividad de la
              lana y su comercialización en mercados extranjeros- Región de
              Magallanes</span
            >
            <div class="flex justify-end space-x-8">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="h-10 w-10 px-2 rounded-full text-cafe bg-amber-100"
              />
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="h-10 w-10 px-2 rounded-full text-cafe bg-amber-100"
              />
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                class="h-10 w-10 px-2 rounded-full text-cafe bg-amber-100"
              />
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="h-10 w-10 px-2 rounded-full text-cafe bg-amber-100"
              />
            </div>
          </div>

          <span class="text-uppercase text-center lg:text-start">contacto@lanamagallanica.cl</span>
        </div>
        <!-- [INFO Y RRSS] -->
      </v-container>
    </footer>

    <div class="bg-neutral-900 text-white py-2">
      <p class="mb-0 text-center">
        Esta iniciativa surge gracias al apoyo de la Fundación para la
        Innovación Agraria.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
