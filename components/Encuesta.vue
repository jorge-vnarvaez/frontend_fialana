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
          >¡Participa con tu opinión!</span
        >

        <span class="block my-8 text-sm lg:text-xl lg:w-5/12 text-center">
          Tu participación y la información que nos puedas proporcionar con tus
          respuestas es sumamente valiosa para la etapa de diagnostico y para
          toda la ejecución del proyecto. Por eso, te invitamos a responder la
          siguiente encuesta.
        </span>

        <span class="text-sm lg:text-xl lg:w-5/12 text-center">
          Contesta este instrumento no te tomará más allá de 8 minutos y todas
          las respuestas serán de carácter confidencial.
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
          <a href="https://form.typeform.com/to/f2VBNq0w?" target="_blank"
            ><span class="text-white">Responder encuesta</span></a
          >
        </button>

        <span class="text-sm lg:text-xl mt-6"
          >¡Muchas gracias por tu apoyo!</span
        >
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>