document.getElementById('mostrarFormulario').addEventListener('click', function (){
    document.getElementById ('formularioIngreso').style.display = 'none';
    document.getElementById ('formularioRegistro').style.display = 'flex';
});

document.getElementById('mostrarIngreso').addEventListener('click', function (){
    document.getElementById ('formularioRegistro').style.display = 'none';
    document.getElementById ('formularioIngreso').style.display = 'flex';
});

function Usuario (nombreUsuario, email, contrasena, listaDiscosUsuario) {
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.contrasena = contrasena;
    this.listaDiscosUsuario = listaDiscosUsuario;
}

document.getElementById('formularioRegistro').addEventListener ('submit', (e) => {
    e.preventDefault();

    const nuevoUsuario = document.getElementById ('nuevoUsuario').value;
    const nuevoEmail = document.getElementById ('nuevoEmail').value;
    const nuevaContrasena = document.getElementById('nuevaContrasena').value;

    const validarUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
    const validarEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const validarContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!validarUsuario.test(nuevoUsuario)){
        alert('El nombre de usuario debe tener entre 3 y 16 caracteres');
        return;
    }

    if (!validarEmail.test(nuevoEmail)) {
        alert ('Correo electrónico no válido.');
        return;
    }

    if (!validarContrasena.test(nuevaContrasena)) {
        alert ('La contraseña debe tener al menos 8 caracteres (y al menos una mayúscula, una minúscula y un número).');
        return;
    }

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const emailExistente = usuariosRegistrados.find (usuario => usuario.email === nuevoEmail);
    if (emailExistente) {
        alert ('El correo electrónico ya está en uso')
    }

    const nuevoUsuarioObj = new Usuario (nuevoUsuario, nuevoEmail, nuevaContrasena);

    let usuarios = JSON.parse (localStorage.getItem('usuarios')) || [];

    usuarios.push(nuevoUsuarioObj);
    
    localStorage.setItem ('usuarios', JSON.stringify(usuarios));

    window.location.href = '../pages/biblioteca.html';
});

document.getElementById ('formularioIngreso').addEventListener ('submit', (e) => {
    e.preventDefault();

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contrasena = document.getElementById('contrasena').value;

    const usuariosRegistrados = JSON.parse (localStorage.getItem('usuarios')) || [];
    const usuarioValido = usuariosRegistrados.find (usuario => usuario.nombreUsuario === nombreUsuario && usuario.contrasena ===contrasena)
    
    if (usuarioValido) {

        window.location.href = '../pages/biblioteca.html';
    } else {
        alert ('Datos incorrectos')
    }
})