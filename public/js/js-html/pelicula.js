import Pelicula from "../firebase/peliculaGet.js";
//elemento contenedor
const divContenedor = document.getElementById("contenido-interno");
const url = new URLSearchParams(window.location.search)

const getPelicula = async()=>{
    const id = url.get("id")
    const pelicula = await Pelicula.getPelicula(id)
    console.log(pelicula);
    divContenedor.innerHTML = divContenedor.innerHTML = `
            <br/><h1>Cartelera</h1><br/>
            <div class="contenido-pelicula">
                <div class="datos-pelicula">
                    <h2>${pelicula.Titulo}</h2>
                    <p>${pelicula.Sinopsis}</p>
                    <br/>
                    <div class="tabla">
                        <div class="fila">
                            <div class="celda-titulo">Título Original :</div>
                            <div class="celda">${pelicula.Titulo}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Estreno :</div>
                            <div class="celda">${pelicula.FechaEstrenoss}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Género :</div>
                            <div class="celda">${pelicula.Genross}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Director :</div>
                            <div class="celda">${pelicula.Director}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Reparto :</div>
                            <div class="celda">${pelicula.Reparto}</div>
                        </div>
                    </div>
                </div>
                <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"><br/><br/>
            </div>
            <div class="pelicula-video">
                <embed src="https://www.youtube.com/v/${pelicula.Link}" 
                    type="application/x-shockwave-flash" 
                    allowscriptaccess="always" 
                    allowfullscreen="true" 
                    width="580" 
                    height="400">
            </div>
        `;
    
}
getPelicula()