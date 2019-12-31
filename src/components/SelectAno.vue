<template>
    <div class="select__control">

        <Select 
            name="Ano"
            id="ano"
            :disabled="modeloSelecionado"
            :selected="selected"
            :opcoes="anos"
        />

    </div>
</template>

<script>
import Select from '@/components/Select.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'SelectAno',
    components: {
      Select,
    },
    created() {
        let vm = this;

        this.$eventHub.$on(this.selected, (data) => {

            vm.anoSelecionado(data)
            vm.listarValor()
            vm.$router.push('/resultado')

        })
    },
    data() {
        return {
            selected: 'anos',
        }
    },
    computed: {
        ...mapState({
            anos: 'anos',
        }),
        ...mapGetters(['modeloSelecionado'])
    },
    methods: {    
        ...mapMutations(['anoSelecionado']),
        ...mapActions(['listarValor']),
    }
}
</script>