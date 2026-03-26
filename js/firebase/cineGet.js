//importacion de la base de datos
import db from './firabase.js';
//importarcion de la funcion leer de la firestore
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
//seccion de llarmar a las coleccion
const Cine = {};

const nombreColeccion = 'cines';
Cine.getCines = async () => {
  const datos = await getDocs(collection(db, nombreColeccion));
  const lista = datos.docs.map((items) => {
    return { id: items.id, ...items.data() };
  });
  return lista;
};
Cine.getCine = async (id) => {
  const sql = query(
    collection(db, nombreColeccion),
    where("id", "==", id)
  )
  const datos = await getDocs(sql);
  const cine = {
    id: datos.id,
    ...datos.data(),
  };
  return cine;
};

export default Cine;
