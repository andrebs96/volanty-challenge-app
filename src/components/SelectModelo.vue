<template>
    <div class="select__control">

        <Select 
            name="Modelo"
            id="modelo"
            :disabled="marcaSelecionada"
            :selected="selected"
            :opcoes="modelos"
        />

    </div>
</template>

<script>
import Select from '@/components/Select.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'SelectModelo',
    components: {
        Select,
    },
    created() {
        let vm = this;

        this.$eventHub.$on(this.selected, (data) => {

            vm.modeloSelecionado(data)
            vm.listarAnos()

        })
    },
    mounted() {},
    data() {
        return {
            selected: 'modelo',
        }
    },
    computed: {
        ...mapState({
            modelos: 'modelos',
        }),
        ...mapGetters(['marcaSelecionada'])
    },
    methods: {      
        ...mapMutations(['modeloSelecionado']),  
        ...mapActions(['listarAnos']),
    }
}
</script>