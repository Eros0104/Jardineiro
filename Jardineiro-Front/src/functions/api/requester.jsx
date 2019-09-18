import axios from 'axios';
import { error } from '../functions.jsx'
import toastr from 'toastr'

const baseUrl = "http://localhost:8080"

const get = async (url, data = "") => {
    error('teste')
    let response = await axios.get(baseUrl + url + data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            //error('ô caralho')
            toastr.error('msg', 'Erro!')
            console.log(error.response);
        });
    error('o caralho')
    toastr.error('msg', 'Erro!')
    return response
}

export { get }