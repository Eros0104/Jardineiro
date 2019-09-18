import toastr from 'toastr'

const error = (msg) => {
    toastr.error(msg, 'Erro!')
}

export { error }
