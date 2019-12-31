<template>
  <h3 class="title-page">{{ title }}</h3>
</template>

<script>
export default {
    name: 'TitlePage',
    props: {
        title: String,
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/tokens/tokens.scss';

.title-page {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  margin-bottom: $spacing-inline-xs;
  text-align: center;
  color: $color-text;
}
</style>