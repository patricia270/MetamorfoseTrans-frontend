import Swal from 'sweetalert2';

function errors(error) {
    if (error.response.status === 401) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Seus dados não foram encontrados,
                    verifique se digitou tudo corretamente!`,
        })
    }
    
    if (error.response.status === 409) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Este email já foi cadastrado!`,
        })
    }
}

export default errors;