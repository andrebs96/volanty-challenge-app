import { http } from "./config";

export default {

    obterMarcas: () => {
        return http.get()
    },

    obterModelos: (marcaId) => {
        return http.get(`/${marcaId}/modelos`)
    },

    obterAnos: (marcaId, modeloId) => {
        return http.get(`/${marcaId}/modelos/${modeloId}/anos`)
    },

    obterValor: (marcaId, modeloId, anoId) => {
        return http.get(`/${marcaId}/modelos/${modeloId}/anos/${anoId}`)
    }
}