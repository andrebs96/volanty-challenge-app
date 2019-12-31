<template>
    <div class="select__control">

        <Select 
            name="Marca"
            id="marca"
            :disabled="false"
            :selected="selected"
            :opcoes="marcas"
        />

    </div>
</template>

<script>
import Select from '@/components/Select.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'SelectMarca',
    components: {
        Select,        
    },
    created() {
        let vm = this;

        this.$eventHub.$on(this.selected, (data) => {
            
            vm.marcaSelecionada(data)
            vm.listarModelos(vm.marcaSelecionada)

        })
    },
    mounted() {

        this.listarMarcas()

    },
    data() {
        return {
            selected: 'marca',
        }
    },
    computed: {
        ...mapState({
            marcas: 'marcas',
        }),
    },
    methods: {
        ...mapMutations(['marcaSelecionada']),
        ...mapActions(['listarMarcas', 'listarModelos']),
    }
}
</script>