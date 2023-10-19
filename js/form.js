const inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function (){
        if(this.value.length>=2) {
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function mostrarSweetAlert(event) {
    event.preventDefault();
    Swal.fire('Consulta Enviada Exitosamente');

    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mensaje').value = '';
}

