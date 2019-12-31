<template>
    <div class="select-car">
      <div class="container">

        <TitlePage title="Sobre meu carro" />

        <div class="select-car__box">

          <SelectMarca />

          <SelectModelo />
          
          <SelectAno />

        </div>

      </div>
    </div>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
import SelectMarca from '@/components/SelectMarca.vue'
import SelectModelo from '@/components/SelectModelo.vue'
import SelectAno from '@/components/SelectAno.vue'

export default {
    name: 'SelectCarro',
    components: {
      TitlePage,
      SelectMarca,
      SelectModelo,
      SelectAno
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/tokens/tokens.scss';

.select-car {
  padding-top: $spacing-inline-md;
  padding-bottom: $spacing-inline-md;
}

@media (min-width: 992px) {
  .select-car__box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .select__control {
      flex: 0 33%;
    }

  }
}
</style>