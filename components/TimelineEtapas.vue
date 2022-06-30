<template>
  <div class="flex lg:justify-center my-8 px-8">
    <div :class="`${$vuetify.breakpoint.mobile ? 'h-[2600px]' : 'h-[2400px]'} relative w-[4px] bg-[#f4e5da] shadow-md`">
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
          <p class="my-1 text-sm">Etapa: Identificar</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile
                ? 'text-start w-full'
                : 'text-end w-5/12'
            } block text-xs text-amber-600`"
          >
            Identificar problemática que dificulta la competitividad y
            comercialización de la lana
          </span>
        </div>
      </div>
      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'top-[220px] left-8 w-60'
            : 'top-[60px] left-20 w-96'
        } absolute h-48 shadow-lg`"
      ></div>
      <!-- [ETAPA-1] -->

      <!-- [ETAPA-2] -->
      <div
        :class="`
          ${$vuetify.breakpoint.mobile ? 'top-[540px]' : 'top-[500px]'}
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
          $vuetify.breakpoint.mobile ? 'left-8 w-72' : 'left-20 w-[800px]'
        } absolute top-[480px]`"
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
          <p class="my-1 text-sm">Etapa: Definir</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-full' : 'w-5/12'
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
            ? 'top-[620px] left-8 w-60 h-[200px] text-xs'
            : 'top-[420px] right-20 w-96 h-72 text-base'
        } absolute shadow-lg p-3 lg:p-10`"
      >
        <ul style="list-style-type: disc">
          <li>Conformación de comité o directorio</li>
          <li>Focus Group</li>
        </ul>

        <div class="flex flex-col">
          <span>- 10 de junio en Tierra del Fuego</span>
          <span>- 14 de junio en Punta Arenas</span>
          <span>- 16 de junio en Última Esperanza</span>
        </div>

        <ul style="list-style-type: disc">
          <li>Sesión de revisión del directorio</li>
        </ul>

        <div class="flex flex-col">
          <span>- 22 de junio</span>
        </div>

        <ul style="list-style-type: disc">
          <li>Evento masivo de difusión</li>
        </ul>

        <div class="flex flex-col">
          <span>- 23 de junio</span>
        </div>
      </div>

      <!-- [ETAPA-2] -->

      <!-- [ETAPA-3] -->
      <div
        :class="`
          ${$vuetify.breakpoint.mobile ? 'top-[1100px]' : 'top-[1020px]'}
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
            ? 'top-[1180px] left-8 w-60'
            : 'top-[890px] left-20 w-96'
        } absolute h-48 shadow-lg`"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1040px] w-72'
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
          <p class="my-1 text-sm">Etapa: Idear</p>
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
         ${$vuetify.breakpoint.mobile ? 'top-[1490px]' : 'top-[1420px]'}
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
            ? 'top-[1560px] left-8 w-60'
            : 'top-[1320px] right-20 w-96'
        } absolute h-48 shadow-lg p-10`"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1430px] w-72'
            : 'right-20 top-[1350px] w-[800px]'
        } absolute left-20`"
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
          <p class="my-1 text-sm">Etapa: Prototipar</p>
          <span
            :class="`${
              $vuetify.breakpoint.mobile ? 'w-full' : 'w-5/12'
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
         ${$vuetify.breakpoint.mobile ? 'top-[1870px]' : 'top-[1840px]'}
          absolute
          -inset-x-[12px]
          h-[28px]
          w-[28px]
          bg-amber-600
          rounded-full
        `"
      ></div>

      <div :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1980px] w-60'
            : 'left-20 top-[1750px] w-96'
        } absolute h-48 shadow-lg p-10`"></div>

      <div :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[1800px] w-72'
            : 'right-20 top-[1780px] w-[800px]'
        } absolute`">
        <div :class="`${
            $vuetify.breakpoint.mobile
              ? 'flex justify-start flex-col align-start'
              : 'flex justify-end flex-col align-end'
          }`">
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
          <p class="my-1 text-sm">Etapa: Pilotear</p>
          <span :class="`${
              $vuetify.breakpoint.mobile
                ? 'text-start w-full'
                : 'text-end w-5/12'
            } block text-xs text-amber-600`">
            Implementar plan piloto para evaluar las posibles soluciones de la
            problemática.
          </span>
        </div>
      </div>
      <!-- [ETAPA-5] -->

      <!-- [ETAPA-6] -->
       <div
        :class="`
         ${$vuetify.breakpoint.mobile ? 'top-[2350px]' : 'top-[2190px]'}
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
            ? 'top-[2430px] left-8 w-60'
            : 'top-[2140px] right-20 w-96'
        } absolute h-48 shadow-lg p-10`"
      ></div>

      <div
        :class="`${
          $vuetify.breakpoint.mobile
            ? 'left-8 top-[2280px] w-72'
            : 'right-20 top-[2140px] w-[800px]'
        } absolute left-20`"
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
          <p class="my-1 text-sm">Etapa: Implementar</p>
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