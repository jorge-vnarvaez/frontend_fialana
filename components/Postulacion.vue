<template>
  <div class="bg-neutral-900" id="section_encuesta">
    <v-img
      src="/ovejas.jpg"
      gradient="rgba(23, 23, 23, .85), rgba(23,23,23, .85)"
      height="100vh"
    >
      <v-container
        class="flex flex-col align-center justify-center text-white"
        fill-height
      >
        <span class="text-3xl lg:text-5xl text-center">¿No lo sabías?</span>
        <span class="text-3xl lg:text-5xl text-center"
          >¡Postula tu proyecto!</span
        >

        <span class="block my-8 text-sm lg:text-xl lg:w-7/12 text-center">
          Para enfrentar los desafíos regionales de sector necesitamos de
          talento y el ímpetu de Magallanes. Para esto, hemos abierto un llamado
          público a participar del proyecto a través de iniciativas que
          contribuyan a abordar tres problemáticas del sector.
        </span>

        <span class="text-sm lg:text-xl lg:w-7/12 text-center">
          De esta forma, te ayudaremos a través de nuestros talleres formativos
          a desarrollar y/o transformar tu idea en un proyecto sólido y capaz de
          postular a futuros fondos concursables. Postula y sé parte de las
          iniciativas del futuro en el sector.
        </span>

        <button
          class="
            outline outline-2 outline-green-500
            px-5
            mt-16
            text-sm
            lg:text-base
            py-1
            rounded-full
            text-uppercase
            lg:font-medium
            hover:bg-green-500
          "
        >
          <a href="https://form.typeform.com/to/WVRanU7C" target="_blank"
              ><span class="text-white">POSTULAR MI PROYECTO</span></a
            >
        </button>

        <!-- <span class="text-sm lg:text-xl mt-6"
          >¡Muchas gracias por tu apoyo!</span
        > -->
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>