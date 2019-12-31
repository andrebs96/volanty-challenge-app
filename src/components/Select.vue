<template>
    <select :name="name" :id="id" class="select" v-model="selecionado" :disabled="disabled">
        <option :value="null" selected> {{ name }} </option>
        <option 
            v-for="(opcao, index) in opcoes" 
            :value="opcao.codigo"
            :key="index"
        >
            {{ opcao.nome }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'Select',
    props: {
        name: String,
        id: String,
        disabled: Boolean,
        selected: String,
        opcoes: Array
    },
    data () {
        return {
            selecionado: null,
        }
    },
    watch: {
        selecionado() {
            return this.$eventHub.$emit(this.selected, this.selecionado)            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/tokens/tokens.scss';

.select {
  background: transparent;
  margin-top: $spacing-inline-sm;
  margin-bottom: $spacing-inline-xs;
  padding: $spacing-inline-xxs;
  width: 100%;
  font-size: $font-size-xs;
  border-radius: $border-radius-medium;
  box-sizing: border-box;
  color: $color-text;
  outline: 0;
}
</style>