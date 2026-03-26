import Cine from "../firebase/cineGet.js";

const divContenedor = document.getElementById("contenido-interno");

// 1. Obtenemos el ID de la barra de direcciones (cine.html?id=8)
const queryParams = new URLSearchParams(window.location.search);
const idCine = queryParams.get("idCine"); 

const CargarDetalleCine = async () => {
    
    const cine = await Cine.getCine(idCine);

    if (!cine) {
        divContenedor.innerHTML = "<h2>El cine no existe en nuestra base de datos.</h2>";
        return;
    }

    // 3. Renderizamos usando los campos exactos de tu colección
    const html = `
        <h2>${cine.RazonSocial}</h2>
        <div class="cine-info">
            <div class="cine-info datos">
                <p>${cine.Direccion} - ${cine.Distrito}</p>
                <p>Teléfono: ${cine.Telefonos}</p>
                <br/>
                
                <div class="tabla">
                    ${cine.tarifas.map((t, index) => `
                        <div class="fila ${index % 2 !== 0 ? 'impar' : ''}">
                            <div class="celda-titulo">${t.DiasSemana}</div>
                            <div class="celda">${t.Precio}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="aviso">
                    <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente...</p>
                </div>
            </div>
            
            <img src="img/cine/${cine.id}.2.jpg" alt="Local Cine"/>
            <br/><br/>
            <h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
            
            <div class="cine-info peliculas">
                <div class="tabla">
                    <div class="fila">
                        <div class="celda-cabecera">Películas</div>
                        <div class="celda-cabecera">Horarios</div>
                    </div>
                    
                    ${cine.peliculas.map((p, index) => `
                        <div class="fila ${index % 2 !== 0 ? 'impar' : ''}">
                            <div class="celda-titulo">${p.Titulo}</div>
                            <div class="celda">${p.Horarios}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div>
            <img style="float:left;" src="img/cine/${cine.id}.3.jpg" alt="Promoción"/>
            <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
                Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
                <br/><br/>
                Visítanos y diviértete con nosotros. 
                <br/><br/>
                <b>CINESTAR</b>, siempre pensando en ti. 
            </span>     
        </div>
    `;

    divContenedor.innerHTML = html;
};

CargarDetalleCine();