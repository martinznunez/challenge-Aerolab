import React, { useState, useEffect } from "react";

import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
import { getHistorialCanje } from "../servicios/getProductosCanje";

const HistorialProduc = () => {
  const [historial, setHistorial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistorial = async () => {
      try {
        const respuesta = await getHistorialCanje();
        setHistorial(respuesta.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getHistorial();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="container-icon-enlace-historial">
        <Link to="/">
          <img src="/assets/logo.svg" alt="" />
        </Link>
      </div>
      <div className="container-producto-historial">
        {historial.map((producto) => (
          <div key={producto.createDate} className="card">
            <h2> {producto.category} </h2>
            <p> {producto.name} </p>
            <img src={producto.img.url} alt="" />
            <p className="precio-imagen-historial">
              {producto.cost} <img src="/assets/coin.svg" alt="" />{" "}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HistorialProduc;
