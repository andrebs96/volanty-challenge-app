import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
})

// export const http = axios.create({
//     baseURL: 'http://fipeapi.appspot.com/api/1/carros/marcas.json'
// })