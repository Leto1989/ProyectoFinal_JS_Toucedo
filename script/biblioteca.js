const discos = [
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

const contenedorDiscos = document.getElementById("contenedorDiscos");
const detalleDisco = document.getElementById("detalleDisco");


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
  console.log ('mostrar detalles:', disco)
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
        <button class="btn-volver" id="btnVolver"> Volver a la lista </button>
      </div>
    `;
    detalleDisco.innerHTML = detalleHTML;
    contenedorDiscos.style.display = "none";
  } else {
    detalleDisco.innerHTML = '';
    contenedorDiscos.style.display = "flex";
  }
}

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

      const btnVolver = document.getElementById ('btnVolver');
      btnVolver.addEventListener ('click', () => {
        mostrarDetallesDisco (null);
      })
    });
  });
}

mostrarDiscosEnCards();