<template>
  <v-app>
    <barra-navegacion />
    <Nuxt />
    <pie-de-pagina />
  </v-app>
</template>

<script>
import BarraNavegacion from './BarraNavegacion.vue'
import PieDePagina from './PieDePagina.vue'
export default {
  components: { BarraNavegacion, PieDePagina },
}
</script>
<style>

</style>