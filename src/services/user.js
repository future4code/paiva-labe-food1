import axios from "axios";
import { BASE_URL } from "../constants/urls";

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