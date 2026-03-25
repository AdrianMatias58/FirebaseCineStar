//importacion de la base de datos
import { db } from "./firabase.js";
//importarcion de la funcion leer de la firestore
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
//seccion de llarmar a las coleccion
const Cine = {};

Cine.getCines = async () => {
  const datos = await getDocs(collection(db, "cines"));
  const lista = datos.array.forEach((items) => {
    //terminar la seccion y agregar llo de optenr item por id
    id: items.id;
    items.data();
  });
};
