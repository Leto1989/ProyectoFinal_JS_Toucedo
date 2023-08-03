const agregarDiscoBtn = document.getElementById('agregarDisco');
const formularioDiscos = document.getElementById('datosDisco');
const biblioteca = document.querySelector('.biblioteca');
const contenedorDiscos = document.getElementById('contenedorDiscos');
const detalleDisco = document.getElementById('detalleDisco');

let mostrarFormulario = false;

let discos = JSON.parse(localStorage.getItem('discos')) || [
  {
      titulo: 'Forest Hills Drive', 
      artista: 'J. Cole', 
      lanzamiento: '2014', 
      genero: 'hip-hop', 
      imagen: '../imagenes/forestHillsDrive.jpg',
      enlace: 'https://www.youtube.com/watch?v=HuXSwxWpq68&ab_channel=KidCudi%E2%80%99s%231',
      comentario:''
  }, 
  {
      titulo: 'Good kid, maaD City', 
      artista: 'Kendrick Lamar', 
      lanzamiento: '2012', 
      genero: 'hip-hop',
      imagen: '../imagenes/goodKidMaadCity.jpg',
      enlace: 'https://www.youtube.com/watch?v=WgRJ2BtWn8g&list=PL8YH4mOwWryXsjz4tBvTrCdkZyubGSMyu&ab_channel=KendrickLamar-Topic',
      comentario:''
  }, 
  {
      titulo: 'Esto si es lo mío', 
      artista: 'Ismael Rivera', 
      lanzamiento: '1978', 
      genero: 'salsa',
      imagen: '../imagenes/estoSiEsLoMio.png',
      enlace: 'https://www.youtube.com/watch?v=VHh68NJ_RtM&list=PLDtSJR8-uwwd2wjNNv57MPiErehY8naLU&ab_channel=Cowbellomanos',
      comentario:''
  }, 
  {
      titulo: 'Ah Um', 
      artista: 'Charles Mingus', 
      lanzamiento: '1959',
      genero: 'jazz', 
      imagen: '../imagenes/ahUm.jpg',
      enlace: 'https://www.youtube.com/watch?v=kqOJ6UI6_3w&t=1265s&ab_channel=PAPO',
      comentario:''
  }, 
  {
      titulo: 'Chega de Saudade', 
      artista: 'Joao Gilberto', 
      lanzamiento: '1959', 
      genero: 'bossa-nova',
      imagen: '../imagenes/João Gilberto - Chega de Saudade (1959) CapaLPFront.jpg',
      enlace: 'https://www.youtube.com/watch?v=Fum0TM-PAfM&ab_channel=PatriciaPorto',
      comentario:''
  }, 
  {
      titulo: 'Esto es tango!', 
      artista: 'Aníbal Troilo-Roberto Grela', 
      lanzamiento:'1962', 
      genero: 'tango', 
      imagen: '../imagenes/TROILO GRELA.jpg',
      enlace: 'https://www.youtube.com/watch?v=zyqWxupJj1o&t=533s&ab_channel=DiegoA.Marchesin',
      comentario:''
  }, 
  {
      titulo: 'Close to the edge', 
      artista: 'Yes', 
      lanzamiento: '1972', 
      genero: 'rock', 
      imagen: '../imagenes/Close to the Edge.png',
      enlace: 'https://www.youtube.com/watch?v=GNkWac-Nm0A&t=1072s&ab_channel=leokb7',
      comentario:''
  },
  {
      titulo: 'Highway to hell',
      artista: 'ACDC',
      lanzamiento: '1979',
      genero: 'rock', 
      imagen: '../imagenes/ac-dc-highway-to-hell-1-768x768.jpg',
      enlace: 'https://www.youtube.com/watch?v=6CwIB6pQoPo&t=2s&ab_channel=IrishO%27African',
      comentario:''
  }, 
  {
      titulo: 'Live at the Cheetah',
      artista: 'Fania all Stars',
      lanzamiento: '1971',
      genero: 'salsa', 
      imagen: '../imagenes/LiveatTheCheetah.jpg',
      enlace: 'https://www.youtube.com/watch?v=67lLSbWcM-k&t=49s&ab_channel=MiguelZelaya',
      comentario:''
  }, 
  {
      titulo: 'Ready to die', 
      artista: 'Biggie Smalls', 
      lanzamiento: '1994', 
      genero: 'hip-hop', 
      imagen: '../imagenes/ReadyToDie.jpg',
      enlace: 'https://www.youtube.com/watch?v=ipbcdHWrTpE&t=6s&ab_channel=TheNotoriousB.I.G.',
      comentario:''
  }, 
  {
      titulo: 'Elis & Tom', 
      artista: 'Elis Regina - Tom Jobim', 
      lanzamiento: '1974', 
      genero: 'bossa-nova', 
      imagen: '../imagenes/Elis&tom.jpg',
      enlace: 'https://www.youtube.com/watch?v=0CoAke5XyAg&t=1489s&ab_channel=Jos%C3%A9Freitas',
      comentario:''
  },
  {
      titulo: 'Expansions', 
      artista: 'McCoy Tyner', 
      lanzamiento: '1968', 
      genero: 'Jazz', 
      imagen: '../imagenes/McCoy-Tyner-Expansions-album-cover-web-optimised-820-brightness-1024x1024.jpg',
      enlace: 'https://www.youtube.com/watch?v=XVXQXo1DGw0&ab_channel=diegodobini2',
      comentario:''
  }, 
  
];


function toggleFormYCards() {
  if (mostrarFormulario) {
    biblioteca.style.display = 'flex';
    formularioDiscos.style.display = 'none';
    agregarDiscoBtn.textContent = 'Agregar disco';
    formularioDiscos.reset();
  } else {
    biblioteca.style.display = 'none';
    formularioDiscos.style.display = 'flex';
    agregarDiscoBtn.textContent = 'Atrás';
  }

  mostrarFormulario = !mostrarFormulario;
}

agregarDiscoBtn.addEventListener('click', toggleFormYCards);

formularioDiscos.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarDisco();
});

function mostrarDiscosEnCards() {
  let contenidoHTML = "";
  for (const disco of discos) {
    contenidoHTML += crearCardDisco(disco);
  }
  contenedorDiscos.innerHTML = contenidoHTML;

  const cardsDiscos = document.querySelectorAll(".card-disco");
  cardsDiscos.forEach((card, index) => {
    const verDetallesBtn = card.querySelector(".ver-detalles-btn");

    verDetallesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const disco = discos[index];
      mostrarDetallesDisco(disco);

      const btnVolver = document.getElementById('btnVolver');
      btnVolver.addEventListener('click', () => {
        mostrarDetallesDisco(null);
      });
    });
  });
}

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

function mostrarDetallesDisco(disco) {
  if (disco) {
    const detalleHTML = `
      <div class="detalle-card">
        <img src="${disco.imagen}" alt="${disco.titulo}">
        <h2>${disco.titulo}</h2>
        <p>Artista: ${disco.artista}</p>
        <p>Año: ${disco.lanzamiento}</p>
        <p>Género: ${disco.genero}</p>
        <p>Sobre el disco: ${disco.comentario}</p>
        <a href="${disco.enlace}" target="_blank" rel="noopener noreferrer">Escuchar disco</a>
        <button class="btn-volver" id="btnVolver"> Volver </button>
        <button class="btn-agregar-a-lista" id="btnAgregarALista"> Agregar a Mi Lista </button>
      </div>
    `;
    detalleDisco.innerHTML = detalleHTML;
    contenedorDiscos.style.display = "none";

    const btnAgregarALista = document.getElementById('btnAgregarALista');
    btnAgregarALista.addEventListener('click', () => {
      const nombreUsuario = obtenerNombreUsuario();
      agregarDiscoALista(nombreUsuario,disco);
      alert('El disco se ha agregado a tu lista');
    });
  } else {
    detalleDisco.innerHTML = '';
    contenedorDiscos.style.display = "flex";
  }
}

function agregarDisco() {
  const titulo = document.getElementById('tituloDisco').value;
  const artista = document.getElementById('artistaDisco').value;
  const genero = document.getElementById('generoDisco').value;
  const lanzamiento = document.getElementById('lanzamientoDisco').value;
  const portadaInput = document.getElementById('portadaDisco');
  const portada = portadaInput.files[0];
  const enlace = document.getElementById('enlaceDisco').value;
  const comentario = document.getElementById('comentarioDisco').value;

  if (titulo.trim() === '' || artista.trim() === '' || genero === '' || lanzamiento.trim() === '' || !portada || enlace.trim() === '') {
    alert('Complete todos los campos para agregar el disco');
    return;
  }

  const reader = new FileReader();
  reader.onload = function() {
    const imagenBase64 = reader.result.split(',')[1]; // Obtener solo el contenido codificado en base64
    const nuevoDisco = {
      titulo: titulo,
      artista: artista,
      genero: genero,
      lanzamiento: lanzamiento,
      imagen: imagenBase64, // Guardar la imagen como cadena codificada en base64
      enlace: enlace,
      comentario: comentario,
    };

    discos.push(nuevoDisco);

    localStorage.setItem('discos', JSON.stringify(discos));

    mostrarDiscosEnCards();
    formularioDiscos.reset();
    toggleFormYCards();
  };
  reader.readAsDataURL(portada); // Leer la imagen como una URL en base64
}

function obtenerNombreUsuario() {
  
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  return nombreUsuario;
}

function agregarDiscoALista(nombreUsuario, disco) {
  const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuariosRegistrados.find((usuario) => usuario.nombreUsuario === nombreUsuario);

  if (usuario) {
    if (!usuario.listaDiscosUsuario) {
      usuario.listaDiscosUsuario = [];
    }
    usuario.listaDiscosUsuario.push(disco);
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
  }
}
mostrarDiscosEnCards();
