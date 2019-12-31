<template>
  <div id="app">

    <Main
      linkImage="/"
      altImage="Volanty logo"
      image="logo.svg"
      title="Descubra quanto vale seu carro com a gente!"
      subtitle="Aqui na Volanty nós somos apaixonados por carros e vamos te ajudar a vender o seu carro com segurança."
    />

    <router-view/>
    
  </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  components: {
    Main,
  }  
}
</script>

<style lang="scss">
@import '@/scss/tokens/tokens.scss';
@import '@/scss/base/reset.scss';
@import '@/scss/base/typography.scss';

strong {
  font-weight: $font-weight-bold;
}

.container {
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 960px;
  box-sizing: border-box;
}

.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}
</style>
