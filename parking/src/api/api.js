import axios from 'axios'

export const url = 'http://localhost:5000/veicles'


export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async (url, setDados) => {
    const response = await api.get(url)
    setDados(response.data)
}
