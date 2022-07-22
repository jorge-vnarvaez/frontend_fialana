<template>
  <div>
    <!-- [HERO] -->
    <div class="bg-neutral-900">
      <v-img
        src="/HERO-QUIENES-SOMOS.jpg"
        height="910"
        class="text-white"
        :position="$vuetify.breakpoint.mobile ? 'center' : 'bottom'"
        gradient="rgba(23, 23, 23, .75), rgba(23,23,23, .75)"
      >
        <v-container
          class="
            text-white
            flex flex-col
            lg:justify-center
            align-start align-lg-center
            my-20
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
            ¿Quiénes somos?
          </p>
          <span
            class="
              text-sm
              lg:text-xl
              w-9/12
              lg:w-5/12
              text-left text-lg-center
              my-8
            "
            >Esta iniciativa surge gracias al apoyo de la Fundación para la
            Innovación Agraria (FIA), ejecutado por la Unidad de Innovación de
            la Facultad de Ingeniería de la Universidad de Concepción y la
            empresa regional Grupo Singular.</span
          >
        </v-container>
      </v-img>
    </div>
    <!-- [HERO] -->

    <!-- [IMPULSORES] -->
    <impulsores-section />
    <!-- [IMPULSORES] -->

    <!-- [COLABORADORES] -->
    <colaboradores-section />
    <!-- [COLABORADORES] -->

    <!-- [NUESTRO EQUIPO] -->
    <div class="bg-neutral-900 text-white" v-if="miembros.length > 0">
      <v-container class="py-16 flex flex-col align-center">
        <p class="text-3xl lg:text-5xl">Nuestro Equipo</p>

        <div
          class="grid grid-cols-12 my-16"
          @mouseleave="showInfoMiembro = false"
        >
          <div
            v-for="miembro in miembros"
            :key="miembro.id"
            class="col-span-12 lg:col-span-3"
          >
            <v-img
              v-if="miembro.imagen"
              :gradient="`${showInfoMiembro == miembro.id ? 'rgba(23, 23, 23, .55), rgba(23,23,23, .55)' : ''}`"
              :src="`${$config.apiUrl}/assets/${miembro.imagen}`"
              @click="
                showInfoMiembro =
                  showInfoMiembro != miembro.id ? miembro.id : false
              "
              @mouseover="$vuetify.breakpoint.mobile ? function() {} : showInfoMiembro = miembro.id; opacity = 'opacity-30'"
            >
              <div
                v-if="showInfoMiembro == miembro.id"
                class="p-8 flex flex-col justify-between h-full text-white"
              >
                <div>
                  <v-img
                    src="/logo-fialana-b.png"
                    width="72"
                    height="72"
                  ></v-img>
                </div>
                <div>
                  <p class="mb-0 text-sm text-uppercase">
                    {{ miembro.nombre_representativo }}
                  </p>
                  <v-divider class="bg-[#707070] my-4"></v-divider>
                  <span>
                    {{ miembro.labor }}
                  </span>
                </div>
              </div>
            </v-img>
          </div>
        </div>
      </v-container>
    </div>

    <!-- [NUESTRO EQUIPO] -->
  </div>
</template>

<script>
import ImpulsoresSection from '../components/ImpulsoresSection.vue';
import ColaboradoresSection from '../components/ColaboradoresSection.vue';
export default {
  components: { ImpulsoresSection, ColaboradoresSection },
  data() {
    return {
      showInfoMiembro: false,
      opacity: 100,
    };
  },
  async asyncData(context) {
    await context.store.dispatch("equipo/cargarMiembros");
  },
  computed: {
    miembros() {
      return this.$store.getters["equipo/getMiembros"];
    },
  },
};
</script>

<style>
</style>