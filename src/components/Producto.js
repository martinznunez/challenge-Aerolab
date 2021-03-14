import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import MensajeErrorApi from "./MensajeErrorApi";

import { Spinner } from "./Spinner";

const Producto = () => {
  const {
    productos,
    usuario,
    setUsuario,
    loading,
    errorApi,
    setApiError,
    reclamaProducto,
  } = useContext(UserContext);

  const handleClickCanje = (producto) => {
    reclamaProducto(producto);

    const restarPoinst = usuario.points - producto.cost;

    setUsuario({ ...usuario, points: restarPoinst });
  };

  if (loading === true) {
    return (
      <div className="spinner">
        <Spinner />;
      </div>
    );
  }

  if (errorApi === true) {
    return <MensajeErrorApi />;
  }

  return (
    <>
      {productos && usuario
        ? productos.map((produc) => (
            <div
              className={
                usuario.points > produc.cost ? "card card-estado" : "card "
              }
              key={produc._id}
            >
              <div className="icon-buy">
                <img src="/assets/buy-blue.svg" alt="" />
              </div>
              <h2> {produc.category} </h2>

              <div className="container-img-producto ">
                <img src={produc.img.url} alt="" />
              </div>

              <div className="container-descripcion-producto  ">
                <p> {produc.name} </p>
                <div className="container-precio">
                  <strong> {produc.cost}</strong>
                  <img src="/assets/coin.svg" alt="" />
                </div>
              </div>

              <div className="container-btn-comprar">
                {usuario ? (
                  usuario.points >= produc.cost ? (
                    <button onClick={(e) => handleClickCanje(produc)}>
                      Canjear
                    </button>
                  ) : (
                    <>
                      <p id="calculo-canje"> {usuario.points - produc.cost} </p>
                      <button disabled> Canjear</button>
                    </>
                  )
                ) : null}
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default Producto;
