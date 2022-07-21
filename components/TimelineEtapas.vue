<template>
  <div class="flex lg:justify-center my-8 px-8">
    <div
      :class="`${
        $vuetify.breakpoint.mobile ? 'h-[2600px]' : 'h-[2400px]'
      } relative w-[4px] bg-[#f4e5da] shadow-md`"
    >
      <!-- [ETAPA-1] -->
      <div
        :class="`
          absolute
          -inset-x-[12px]
          top-[120px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full`"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[240px] left-8 w-[270px] h-[250px] text-sm'
            : 'top-[60px] left-20 w-96 h-[230px] text-base'
        } absolute shadow-lg px-3 lg:px-6`"
      >
        <div class="h-48 flex flex-col justify-center align-center">
          <ul style="list-style-type: disc" class="font-medium">
            <li>
              Aplicación de encuesta diagnóstica para levantamiento de
              información primaria
            </li>
            <li>
              Se realizará un análisis de tendencias con información disponible
              en fuentes secundarias
            </li>
            <li>
              Aplicación de entrevistas semiestructuradas a los actores claves
              asociados al proceso de la comercialización de la lana
            </li>
            <li>Creación de plataforma para el desarrollo del proyecto</li>
          </ul>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile ? 'left-8 w-72' : 'right-20 w-[800px]'
        } absolute top-[60px]`"
      >
        <div
          :class="`${
            $vuetify.breakpoint.mobile
              ? 'flex justify-start flex-col align-start'
              : 'flex justify-end flex-col align-end'
          }`"
        >
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            01
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Identificar</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-[270px]' : 'text-end w-5/12'
            } block text-xs text-amber-600`"
          >
            Identificar problemática que dificulta la competitividad y
            comercialización de la lana
          </span>
        </div>
      </div>

      <!-- [ETAPA-1] -->

      <!-- [ETAPA-2] -->
      <div
        :class="`
          ${$vuetify.breakpoint.mobile ? 'top-[620px]' : 'top-[500px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full
        `"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[560px] left-8 w-72'
            : 'top-[440px] left-20 w-[800px]'
        } absolute `"
      >
        <div class="flex justify-start flex-col align-start">
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            02
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Definir</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-[270px]' : 'w-5/12'
            } block text-start text-xs text-amber-600`"
          >
            Definir problema específico a resolver con el apoyo de productos y
            actores relevantes del rubro
          </span>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[680px] left-8 w-[270px] h-[240px] text-sm'
            : 'top-[380px] right-20 w-96 h-[250px] text-base'
        } absolute shadow-lg px-5 py-7 lg:px-8`"
      >
        <div class="h-48 flex flex-col justify-center align-center">
          <div>
            <ul style="list-style-type: disc" class="font-medium">
              <li>Conformación de comité o directorio</li>
              <li>Focus Group</li>
            </ul>

            <div class="flex flex-col font-light">
              <span>- 10 de junio en Tierra del Fuego</span>
              <span>- 14 de junio en Punta Arenas</span>
              <span>- 16 de junio en Última Esperanza</span>
            </div>

            <ul style="list-style-type: disc" class="font-medium">
              <li>Sesión de revisión del directorio</li>
            </ul>

            <div class="flex flex-col font-light">
              <span>- 22 de junio</span>
            </div>

            <ul style="list-style-type: disc" class="font-medium">
              <li>Evento masivo de difusión</li>
            </ul>

            <div class="flex flex-col font-light">
              <span>- 23 de junio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- [ETAPA-2] -->

      <!-- [ETAPA-3] -->
      <div
        :class="`
          ${$vuetify.breakpoint.mobile ? 'top-[1040px]' : 'top-[1020px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full`"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[1080px] left-8 w-[270px] text-sm'
            : 'top-[930px] left-20 w-96 text-base'
        } absolute h-48 shadow-lg px-3 lg:px-6`"
      >
        <div class="h-48 flex flex-col justify-center align-center">
          <ul style="list-style-type: disc" class="font-medium">
            <li>Talleres introductorios</li>
            <li>Portafolio de potenciales soluciones</li>
            <li>Seminario de casos de éxito</li>
            <li>Cápsulas formativas</li>
          </ul>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[980px] w-72'
            : 'right-20 top-[960px] w-[800px]'
        } absolute`"
      >
        <div
          :class="`${
            $vuetify.breakpoint.mobile
              ? 'flex justify-start flex-col align-start'
              : 'flex justify-end flex-col align-end'
          }`"
        >
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            03
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Idear</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile
                ? 'text-start w-full'
                : 'text-end w-5/12'
            } block text-xs text-amber-600`"
          >
            Desarrollo de posibles soluciones para resolver el desafío
          </span>
        </div>
      </div>
      <!-- [ETAPA-3] -->

      <!-- [ETAPA-4] -->
      <div
        :class="`
         ${$vuetify.breakpoint.mobile ? 'top-[1400px]' : 'top-[1420px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full
        `"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[1460px] left-8 w-[270px] text-sm'
            : 'top-[1320px] right-20 w-96 text-base'
        } absolute h-48 shadow-lg px-3 lg:px-6`"
      >
        <div class="h-48 flex flex-col justify-center align-center">
          <ul style="list-style-type: disc" class="font-medium">
            <li>Capacitaciones orientativas</li>
            <li>Mentorías</li>
            <li>
              Filtro de selección de proyectos con mayor potencial de desarrollo
            </li>
          </ul>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1340px] w-72'
            : 'left-20 top-[1360px] w-[800px]'
        } absolute`"
      >
        <div :class="`flex justify-start flex-col align-start`">
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            04
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Prototipar</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-[270px]' : 'w-5/12'
            } block text-start text-xs text-amber-600`"
          >
            Generación de prototipos y testeos de las potenciales ideas de
            solución
          </span>
        </div>
      </div>
      <!-- [ETAPA-4] -->

      <!-- [ETAPA-5] -->
      <div
        :class="`
         ${$vuetify.breakpoint.mobile ? 'top-[1780px]' : 'top-[1840px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full
        `"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1850px] w-[270px] h-[210px] text-sm'
            : 'left-20 top-[1750px] w-96 text-base'
        } absolute shadow-lg px-3 lg:px-6`"
      >
        <div class="h-48 flex flex-col justify-center align-center">
          <ul style="list-style-type: disc" class="font-medium">
            <li>
              Talleres presenciales de capacitación para la elaboración de
              prototipos
            </li>
            <li>Pruebas de validación y testeo</li>
            <li>Video de presentación de testeos</li>
            <li>
              Filtro de selección de proyectos con mayor potencial de desarrollo
            </li>
          </ul>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1720px] w-72'
            : 'right-20 top-[1780px] w-[800px]'
        } absolute`"
      >
        <div
          :class="`${
            $vuetify.breakpoint.mobile
              ? 'flex justify-start flex-col align-start'
              : 'flex justify-end flex-col align-end'
          }`"
        >
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            05
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Pilotear</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile
                ? 'text-start w-full'
                : 'text-end w-5/12'
            } block text-xs text-amber-600`"
          >
            Implementar plan piloto para evaluar las posibles soluciones de la
            problemática.
          </span>
        </div>
      </div>
      <!-- [ETAPA-5] -->

      <!-- [ETAPA-6] -->
      <div
        :class="`
         ${$vuetify.breakpoint.mobile ? 'top-[2190px]' : 'top-[2190px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full
        `"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[2320px] left-8 w-[270px] h-[220px] text-sm'
            : 'top-[2070px] right-20 w-96 h-[180px] text-base'
        } absolute shadow-lg px-3 lg:px-8`"
      >
        <div class="flex flex-col justify-center align-center">
          <ul style="list-style-type: disc" class="font-medium">
            <li>
              Desarrollo de prototipos nivel avanzado con sesiones de mentoría online
            </li>
            <li>Preparación final de los proyectos desarrollados con talleres en formato digital</li>
            <li>Elaboración de plan de negocios para propuestas finalistas</li>
          </ul>
        </div>
      </div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[2130px] w-72'
            : 'left-20 top-[2130px] w-[800px]'
        } absolute`"
      >
        <div :class="`flex justify-start flex-col align-start`">
          <div
            class="
              p-4
              bg-white
              rounded-full
              shadow-xl
              mb-2
              flex
              align-center
              justify-center
              w-[48px]
              h-[48px]
            "
          >
            06
          </div>
          <p class="my-1 text-sm font-bold">Etapa: Implementar</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-full' : 'w-5/12'
            } block text-start text-xs text-amber-600`"
          >
            Implementación y transferencia de la o las soluciones que resuelven
            la problemática.
          </span>
        </div>
      </div>
      <!-- [ETAPA-6] -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>