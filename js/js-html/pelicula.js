import Pelicula from "../firebase/peliculaGet.js";
//elemento contenedor
const divContenedor = document.getElementById("contenido-interno");
const url = new URLSearchParams(window.location.search)

const getPelicula = async()=>{
    const id = url.get("id")
    const pelicula = await Pelicula.getPelicula(id)
    console.log(pelicula);

    
}
getPelicula()