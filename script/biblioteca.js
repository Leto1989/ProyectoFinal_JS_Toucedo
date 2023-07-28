const discos = [
    {
        titulo: 'Forest Hills Drive', 
        artista: 'J. Cole', 
        lanzamiento: '2014', 
        genero: 'hip-hop', 
        imagen: '../imagenes/forestHillsDrive.jpg',
        enlace: 'https://www.youtube.com/watch?v=HuXSwxWpq68&ab_channel=KidCudi%E2%80%99s%231'
    }, 
    {
        titulo: 'Good kid, maaD City', 
        artista: 'Kendrick Lamar', 
        lanzamiento: '2012', 
        genero: 'hip-hop',
        imagen: '../imagenes/goodKidMaadCity.jpg',
        enlace: 'https://www.youtube.com/watch?v=WgRJ2BtWn8g&list=PL8YH4mOwWryXsjz4tBvTrCdkZyubGSMyu&ab_channel=KendrickLamar-Topic'
    }, 
    {
        titulo: 'Esto si es lo mío', 
        artista: 'Ismael Rivera', 
        lanzamiento: '1978', 
        genero: 'salsa',
        imagen: '../imagenes/estoSiEsLoMio.png',
        enlace: 'https://www.youtube.com/watch?v=VHh68NJ_RtM&list=PLDtSJR8-uwwd2wjNNv57MPiErehY8naLU&ab_channel=Cowbellomanos'
    }, 
    {
        titulo: 'Ah Um', 
        artista: 'Charles Mingus', 
        lanzamiento: '1959',
        genero: 'jazz', 
        imagen: '../imagenes/ahUm.jpg',
        enlace: 'https://www.youtube.com/watch?v=kqOJ6UI6_3w&t=1265s&ab_channel=PAPO'
    }, 
    {
        titulo: 'Chega de Saudade', 
        artista: 'Joao Gilberto', 
        lanzamiento: '1959', 
        genero: 'bossa-nova',
        imagen: '../imagenes/João Gilberto - Chega de Saudade (1959) CapaLPFront.jpg',
        enlace: 'https://www.youtube.com/watch?v=Fum0TM-PAfM&ab_channel=PatriciaPorto'
    }, 
    {
        titulo: 'Esto es tango!', 
        artista: 'Aníbal Troilo-Roberto Grela', 
        lanzamiento:'1962', 
        genero: 'tango', 
        imagen: '../imagenes/TROILO GRELA.jpg',
        enlace: 'https://www.youtube.com/watch?v=zyqWxupJj1o&t=533s&ab_channel=DiegoA.Marchesin'
    }, 
    {
        titulo: 'Close to the edge', 
        artista: 'Yes', 
        lanzamiento: '1972', 
        genero: 'rock', 
        imagen: '../imagenes/Close to the Edge.png',
        enlace: 'https://www.youtube.com/watch?v=GNkWac-Nm0A&t=1072s&ab_channel=leokb7'
    },
    {
        titulo: 'Highway to hell',
        artista: 'ACDC',
        lanzamiento: '1979',
        genero: 'rock', 
        imagen: '../imagenes/ac-dc-highway-to-hell-1-768x768.jpg',
        enlace: 'https://www.youtube.com/watch?v=6CwIB6pQoPo&t=2s&ab_channel=IrishO%27African'
    }, 
    {
        titulo: 'Live at the Cheetah',
        artista: 'Fania all Stars',
        lanzamiento: '1971',
        genero: 'salsa', 
        imagen: '../imagenes/LiveatTheCheetah.jpg',
        enlace: 'https://www.youtube.com/watch?v=67lLSbWcM-k&t=49s&ab_channel=MiguelZelaya'
    }, 
    {
        titulo: 'Ready to die', 
        artista: 'Biggie Smalls', 
        lanzamiento: '1994', 
        genero: 'hip-hop', 
        imagen: '../imagenes/ReadyToDie.jpg',
        enlace: 'https://www.youtube.com/watch?v=ipbcdHWrTpE&t=6s&ab_channel=TheNotoriousB.I.G.' 
    }, 
    {
        titulo: 'Elis & Tom', 
        artista: 'Elis Regina - Tom Jobim', 
        lanzamiento: '1974', 
        genero: 'bossa-nova', 
        imagen: '../imagenes/Elis&tom.jpg',
        enlace: 'https://www.youtube.com/watch?v=0CoAke5XyAg&t=1489s&ab_channel=Jos%C3%A9Freitas' 
    },
    {
        titulo: 'Expansions', 
        artista: 'McCoy Tyner', 
        lanzamiento: '1968', 
        genero: 'Jazz', 
        imagen: '../imagenes/McCoy-Tyner-Expansions-album-cover-web-optimised-820-brightness-1024x1024.jpg',
        enlace: 'https://www.youtube.com/watch?v=XVXQXo1DGw0&ab_channel=diegodobini2' 
    }, 
    
];

function crearCardDisco(disco) {
  return `
    <div class="card-disco">
      <img src="${disco.imagen}" alt="${disco.titulo}" class="card-disco-img">
      <h3>${disco.titulo}</h3>
      <p>Artista: ${disco.artista}</p>
      <p>Año: ${disco.lanzamiento}</p>
      <p>Género: ${disco.genero}</p>
    </div>
  `;
}

  function mostrarDetallesDisco(disco) {
    const detalleDisco = document.getElementById("detalleDisco");
    const detalleHTML = `
      <div class="detalle-card">
        <img src="${disco.imagen}" alt="${disco.titulo}">
        <h2>${disco.titulo}</h2>
        <p>Artista: ${disco.artista}</p>
        <p>Año: ${disco.lanzamiento}</p>
        <p>Género: ${disco.genero}</p>
        <a href="${disco.enlace}" target="_blank" rel="noopener noreferrer"> Escuchar disco </a>
      </div>
    `;
    detalleDisco.innerHTML = detalleHTML;
  }
  function mostrarDiscosEnCards() {
    const contenedorDiscos = document.getElementById("contenedorDiscos");
    let contenidoHTML = "";
    for (const disco of discos) {
      contenidoHTML += crearCardDisco(disco);
    }
    contenedorDiscos.innerHTML = contenidoHTML;
  
    const cardsDiscos = document.querySelectorAll(".card-disco");
    cardsDiscos.forEach((card, index) => {
      card.addEventListener("click", () => {
        mostrarDetallesDisco(discos[index]);
        contenedorDiscos.classList.add ('hide');
      });
    });
    const volverBtns = document.querySelectorAll ('.botonVolver');
    volverBtns.forEach ((btn) => {
      btn.addEventListener ('click', () =>{
        mostrarDiscosEnCards();
        mostrarDetallesDisco(null);
        contenedorDiscos.classList.remove ('hide');
      });
    });
  }
  
  mostrarDiscosEnCards();