import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";

const HistorialProduc = () => {
  const {
    historial,
    loading,
    setLoading,
    reclamaProductoHistorial,
  } = useContext(UserContext);

  useEffect(() => {
    reclamaProductoHistorial();
  }, [reclamaProductoHistorial]);

  if (historial.length) {
    setLoading(false);
  }

  if (loading === true) {
    return (
      <div className="spinner">
        <Spinner />;
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
