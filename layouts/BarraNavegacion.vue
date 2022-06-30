<template>
  <nav class="bg-neutral-900">
    <v-container class="py-8">
      <div class="w-full flex justify-between">
        <div>
          <nuxt-link :to="{ name: 'index' }"
            ><v-img
              src="/logo-fialana-w.svg"
              :width="$vuetify.breakpoint.mobile ? 135 : 212"
              :height="$vuetify.breakpoint.mobile ? 41 : 65"
            ></v-img
          ></nuxt-link>
        </div>
        <v-icon
          v-show="$vuetify.breakpoint.mobile ? true : false"
          large
          color="white"
          @click="showOptions = !showOptions"
          >mdi-menu</v-icon
        >

        <!-- [ESCRITORIO] -->
        <v-container v-if="$vuetify.breakpoint.mobile ? false : true">
          <ul
            class="
              flex
              text-white
              space-x-10
              font-semibold
              text-lg
              justify-end
              align-center
            "
          >
            <nuxt-link :to="{ name: 'index' }"
              ><li>
                <span class="text-decoration-none text-white">Inicio</span>
              </li></nuxt-link
            >
            <nuxt-link :to="{ name: 'el-proyecto' }"
              ><li>
                <span class="text-decoration-none text-white">El proyecto</span>
              </li></nuxt-link
            >
            <nuxt-link :to="{ name: 'quienes-somos' }"
              ><li>
                <span class="text-decoration-none text-white"
                  >Quiénes somos</span
                >
              </li></nuxt-link
            >
            <nuxt-link :to="{ name: 'noticias' }"
              ><li>
                <span class="text-decoration-none text-white">Noticias</span>
              </li></nuxt-link
            >
            <li
              class="
                border border-amber-100
                px-4
                py-1
                rounded-full
                hover:bg-amber-100 hover:text-neutral-900
              "
            >
              Entregas
            </li>
            <nuxt-link :to="{ name: 'calendario' }" class="group"
              ><li
                class="
                  border border-amber-100
                  px-4
                  py-1
                  rounded-full
                  hover:bg-amber-100 
                "
              >
                <span class="text-decoration-none text-white group-hover:text-neutral-900">Calendario</span>
              </li></nuxt-link
            >
          </ul>
        </v-container>

        <!-- [ESCRITORIO] -->
      </div>
    </v-container>

    <!-- [MOBILE] -->
    <div
      v-if="showOptions && $vuetify.breakpoint.mobile"
      class="text-white font-thin w-full"
    >
      <div class="flex flex-col justify-end align-end w-fullt text-xs">
        <nuxt-link :to="{ name: 'index' }"
          ><div class="px-3 py-4">
            <span class="text-decoration-none text-white">INICIO</span>
          </div></nuxt-link
        >
        <nuxt-link :to="{ name: 'el-proyecto' }"
          ><div class="px-3 py-4">
            <span class="text-decoration-none text-white">EL PROYECTO</span>
          </div></nuxt-link
        >
        <nuxt-link :to="{ name: 'quienes-somos' }"
          ><div class="px-3 py-4">
            <span class="text-decoration-none text-white">QUIÉNES SOMOS</span>
          </div></nuxt-link
        >
        <nuxt-link :to="{ name: 'noticias' }"
          ><div class="px-3 py-4">
            <span class="text-decoration-none text-white">NOTICIAS</span>
          </div></nuxt-link
        >
        <div class="bg-cafe w-full flex justify-end px-3 py-4">ENTREGAS</div>
        <nuxt-link :to="{ name: 'noticias' }"
          ><div class="bg-cafe w-full flex justify-end px-3 py-4">
            <span class="text-decoration-none text-white">CALENDARIO</span>
          </div></nuxt-link
        >
      </div>
    </div>
    <!-- [MOBILE] -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>

<style>
</style>