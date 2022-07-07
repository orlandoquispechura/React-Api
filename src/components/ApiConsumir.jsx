import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/photos";

const ApiConsumir = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
      mostrarDatos();
    }, []);
  
    const mostrarDatos = async () => {
      const respuesta = await axios.get(URL);
      setDatos(respuesta.data);
    };
  return (
  <Fragment>
     <div className="galeria">
        {datos.map((dato)=>(
          <div className="contenedor-imagen" key={dato.id}>
          <img
            className="imagen"
            src={dato.url}
          alt="" />
          <h3 className="contenedor-titulo">{dato.title}</h3>
        </div>
        ))

        }
      </div>
  </Fragment>

  );
}

export default ApiConsumir;
