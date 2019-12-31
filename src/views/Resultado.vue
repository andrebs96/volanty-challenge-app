<template>
  <section class="content"> 
    <div class="result">

      <div class="container" v-if="!valorCarregado">
        <TitlePage title="Ops! Acho que falta informações do seu veículo." />
        
        <div class="d-flex justify-center">
          <router-link to="/" class="back-to-home-link">Preencher os dados corretamente</router-link>
        </div>
      </div>

      <div class="container" v-else>
        <TitlePage title="Quanto custa?" />

        <div class="d-flex justify-center">

          <div class="card">
            <div class="card__content-top card__content-top--white">
              <h5 class="card__description">{{ valor.Marca }}</h5>
              <h4 class="card__title">{{ valor.Modelo }}</h4>
              <h6 class="card__description">{{ valor.Combustivel }} / {{ valor.AnoModelo }}</h6>
            </div>
            <div class="card__content-bottom">
              <h5 class="card__description">Cód. Fipe: {{ valor.CodigoFipe }}</h5>
              <h4 class="card__title">{{ valor.Valor }}</h4>
              <h6 class="card__subtitle">Mês referência: {{ valor.MesReferencia }}</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitlePage from '@/components/TitlePage.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Resultado',
  components: {
    TitlePage,
  },
  computed: {
    ...mapState({
      valor: 'valor'
    }),
    ...mapGetters(['valorCarregado'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/tokens/tokens.scss';

.result {
  padding-top: $spacing-inline-md;
  padding-bottom: $spacing-inline-md;
}

.back-to-home-link {
  background: linear-gradient(90deg, $color-bg-1 0%, $color-bg-2 50%);
  margin-top: $spacing-inline-md;
  margin-bottom: $spacing-inline-md;
  padding: $spacing-squish-md;
  text-decoration: none;
  border-radius: 50px;
  color: $color-light;
}

.card {
  max-width: 400px;
  margin-top: $spacing-inline-md;
  margin-bottom: $spacing-inline-md;
  border-radius: $border-radius-small;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
}

.card__content-top {
  background: linear-gradient(90deg, $color-bg-1 0%, $color-bg-2 50%);
  border-radius: $border-radius-small $border-radius-small 0px 0px;
  border-bottom: $border-width-medium $border-style-default $color-light;

  &--white {
    color: $color-light;
  }
}

.card__content-bottom {
  background: linear-gradient(90deg, $color-bg-3 0%, $color-bg-4 50%);
  border-radius: 0px 0px $border-radius-small $border-radius-small;
}

.card__content-top, .card__content-bottom {
  padding: 30px;
  text-align: center;
}

.card__title {
  font-size: $font-size-md;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-inline-md;
}

.card__description {
  font-weight: $font-weight-medium;
  margin-bottom: $spacing-inline-sm;
}

.card__subtitle {
  font-weight: $font-weight-bold;
}
</style>