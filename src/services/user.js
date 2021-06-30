import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToAddressScreen, goToFeed } from '../routes/coordinator';


export const login = (body, cleanFields) => {
    
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            cleanFields()

        })
        .catch((err) => {
            alert("Erro ao fazer login, tente novamente")
        })
}

export const signUp = (body, cleanFields, history) => {
    
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            cleanFields()
            goToAddressScreen(history)

        })
        .catch((err) => {
            alert("Erro no cadastro, tente novamente")
        })
}

export const addAddress = (body, cleanFields, history) => {

    const header = {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    
    axios.put(`${BASE_URL}/address`, body, header)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            cleanFields()
            goToFeed(history)

        })
        .catch((err) => {
            alert("Erro ao cadastrar endereço, tente novamente.")
        })
}
