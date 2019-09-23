import {  toast } from 'react-toastify';

const error = (msg) => {
    toast.error(msg);
}

const success = (msg) => {
    toast.success(msg)
}

const warning = (msg) => {

}

export { error, success, warning }
