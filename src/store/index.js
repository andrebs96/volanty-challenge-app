import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import fipeApi from '@/services/fipeApi'

export default new Vuex.Store({
  state: {
    marcas: [],
    marcaSelecionada: null,
    modelos: [],
    modeloSelecionado: null,
    anos: [],
    anoSelecionado: null,
    valor: {},
  },
  getters: {
    marcaSelecionada: state => state.marcaSelecionada === null,
    modeloSelecionado: state => state.modeloSelecionado === null,
    valorCarregado: state => Object.keys(state.valor).length !== 0
  },
  mutations: {
    listarMarcas: (state, payload) => state.marcas = payload,
    listarModelos: (state, payload) => state.modelos = payload,
    listarAnos: (state, payload) => state.anos = payload,
    listarValor: (state, payload) => state.valor = payload,
    marcaSelecionada: (state, payload) => state.marcaSelecionada = payload,
    modeloSelecionado: (state, payload) => state.modeloSelecionado = payload,
    anoSelecionado: (state, payload) => state.anoSelecionado = payload,
  },
  actions: {
    listarMarcas: async ({ commit }) => {

      const response = await fipeApi.obterMarcas()
      commit('listarMarcas', response.data)

    },
    listarModelos: async ({ commit, state }) => {
      
      const response = await fipeApi.obterModelos(state.marcaSelecionada)
      commit('listarModelos', response.data.modelos)
      commit('listarAnos', response.data.anos)

    },
    listarAnos: async ({commit, state}) => {

      const response = await fipeApi.obterAnos(state.marcaSelecionada, state.modeloSelecionado)
      commit('listarAnos', response.data)

    },
    listarValor: async ({ commit, state}) => {

      const response = await fipeApi.obterValor(state.marcaSelecionada, state.modeloSelecionado, state.anoSelecionado)
      commit('listarValor', response.data)

    }
  },
  modules: {
  }
})
