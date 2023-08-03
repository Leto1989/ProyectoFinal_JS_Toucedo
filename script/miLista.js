document.addEventListener("DOMContentLoaded", () => {
    const listaDiscosUsuarioElement = document.getElementById("listaDiscosUsuario");
  
    // Obtener el nombre de usuario del Local Storage
    const nombreUsuario = localStorage.getItem("nombreUsuario");
  
    // Obtener la lista de discos del usuario del Local Storage
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuariosRegistrados.find((usuario) => usuario.nombreUsuario === nombreUsuario);
  
    if (usuario && usuario.listaDiscosUsuario && usuario.listaDiscosUsuario.length > 0) {
      let contenidoHTML = "";
      for (const disco of usuario.listaDiscosUsuario) {
        contenidoHTML += crearCardDisco(disco);
      }
      listaDiscosUsuarioElement.innerHTML = contenidoHTML;
    } else {
      listaDiscosUsuarioElement.innerHTML = "<p>No tienes discos en tu lista.</p>";
    }
  });
  
  function crearCardDisco(disco) {
    return `
      <div class="card-disco">
        <img src="${disco.imagen}" alt="${disco.titulo}" class="card-disco-img">
        <h3>${disco.titulo}</h3>
        <p>Artista: ${disco.artista}</p>
        <p>Año: ${disco.lanzamiento}</p>
        <p>Género: ${disco.genero}</p>
        <button class="ver-detalles-btn">Ver detalles</button>
      </div>
    `;
  }