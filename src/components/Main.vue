<template>
  <div class="main">
    <div class="container">
      <div class="d-flex flex-wrap justify-center">
        <router-link :to="linkImage">
          <img :alt='altImage' :src="require(`../assets/${image}`)" class="main__logo">
        </router-link>
      </div>
      <div class="d-flex flex-wrap justify-center">
        <h1 class="main__title">{{ title }}</h1>
      </div>
      <div class="d-flex flex-wrap justify-center">
        <h2 class="main__subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    props: {
        linkImage: String,
        altImage: String,
        image: String,
        title: String,
        subtitle: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/tokens/tokens.scss';

.main {
  position: relative;
  background-image: url('../assets/bg-home.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: $spacing-inline-sm;
  padding-bottom: $spacing-inline-xl;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-dark;
    opacity: $opacity-semi-opaque;
  }
}

.main__logo {
  display: block;
  margin: 0 auto;
  width: 100px;
}

.main__title {
  margin-top: $spacing-inline-md;
  margin-bottom: $spacing-inline-md;
  font-size: $font-size-md;
  font-weight: $font-weight-bold;
}

.main__subtitle {
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  line-height: $line-height-xxs;
}

.main__title, .main__subtitle {
  text-align: center;
  text-shadow: 1px 2px $color-dark;
  color: $color-light;
}

@media (min-width: 768px) {
  .main {
    padding-top: $spacing-inline-sm;
    padding-bottom: $spacing-inline-xl;
  }

  .main__logo {
    margin-top: $spacing-inline-xs;
    margin-bottom: $spacing-inline-xl;
  }

  .main__title {  
    margin-top: $spacing-inline-xl;
    margin-bottom: $spacing-inline-xl;
  }

  .main__title, .main__subtitle {
    width: 50%;
  }
}
</style>