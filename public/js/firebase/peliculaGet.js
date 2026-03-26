//importacion de la base de datos
import db from './firabase.js';
//importarcion de la funcion leer de la firestore
import {
  collection,
  getDocs,
  query,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
//seccion de llarmar a las coleccion
const Pelicula = {};

const nombreColeccion = "peliculas";
Pelicula.getPeliculas = async (id) => {
  const sql = query(
    collection(db, nombreColeccion),
    where("idEstado", "==", id),
    orderBy("idEstado"),
  );
  const datos = await getDocs(sql);
  const lista = datos.docs.map((items) => {
    return { id: items.id, ...items.data() };
  });
  return lista;
};
Pelicula.getPelicula = async (id) => {
  const sql = query(
    collection(db, nombreColeccion),
    where("id", "==", id)
  );
  const datos = await getDocs(sql);
  const objtD = datos.docs[0]
  const Pelicula = {
    id: objtD.id,
    ...objtD.data(),
  };
  return Pelicula;
};

export default Pelicula;
