import React, { useContext } from "react";
import Producto from "./Producto.js";
import MensajeErrorApi from "./MensajeErrorApi";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Productos = () => {
  const { errorApi } = useContext(UserContext);
  const history = useHistory();

  const onClickEventHistori = () => {
    history.push("/historial");
  };

  if (errorApi === true) {
    <MensajeErrorApi />;
    return;
  }

  return (
    <>
      <button onClick={onClickEventHistori} className="btn first">
        Ir a mis Compras
      </button>
      <div className="container-producto">
        <Producto />
      </div>
    </>
  );
};

export default Productos;
