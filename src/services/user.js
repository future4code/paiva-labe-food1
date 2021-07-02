import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddressScreen, goToFeed } from '../routes/coordinator';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktzczdtVGpweHNVZUFFNTMza1F4IiwibmFtZSI6IkFzdHJvZGV2IEp1bmlvciIsImVtYWlsIjoiYXN0cm9kZXZAZnV0dXJlNC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiBEb2lzLCAxNywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjI1MDE5MzYxfQ.-bLZvDbge7_QYA-J9C1SjWLV5tqCILzBuTnjP0b_JPQ"

export const updateProfile = (info, body, cleanFields) => {
    axios.put(`${BASE_URL}/${info}`, body, {headers: {auth: token}})
    .then(() => {
        cleanFields()
        alert("Informações atualizadas !")
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const login = (body, cleanFields) => {
    
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("hasAddress", res.data.user.hasAddress)
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

