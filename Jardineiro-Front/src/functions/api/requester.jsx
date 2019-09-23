import axios from 'axios';
import { error, success } from '../functions.jsx'

const baseUrl = "http://localhost:8080"

const get = async (uri, data = "") => {
    let resp = await axios.get(baseUrl + uri + data)
        .catch(resp => {
            error(resp.response.status + " - " + resp.response.data.error)
        });
    return resp
}

const post = async (uri, data) => {
    let resp = axios.post(baseUrl + uri, data)
        .then(response => {
            success('Salvo com sucesso!')
        })
        .catch(resp => {
            error(resp.response.status + " - " + resp.response.data.error)
        });
    return resp;
}

const put = async (uri, data) => {
    let resp = axios.put(baseUrl + uri, data)
        .then(response => {
            success('Salvo com sucesso!')
        })
        .catch(resp => {
            error(resp.response.status + " - " + resp.response.data.error)
        });
    return resp
}

const remove = async (uri) => {
    let resp = axios.delete(baseUrl + uri)
        .then(response => {
            success('Deletado com sucesso!')
        })
        .catch(resp => {
            error(resp.response.status + " - " + resp.response.data.error)
        });
    return resp
}

export { get, post, put, remove }