import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

import Modal from "./Modal";

const User = () => {
  const { usuario, reclamarPuntos, setLoading } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);

  const handleSetPuntos = (puntos) => {
    reclamarPuntos(puntos);
    setShowModal(false);
    setLoading(true);
  };

  return (
    <>
      <div className="container-user" onClick={() => setShowModal(true)}>
        {usuario ? (
          <p className="titulo-user"> {usuario.name} </p>
        ) : (
          "loading.."
        )}

        <div className="fondo-cantidad-monedas">
          {usuario ? <span> {usuario.points} </span> : null}

          <img src="/assets/coin.svg" alt="" />
        </div>
      </div>
      <Modal
        handleSetPuntos={handleSetPuntos}
        // setPuntos={setPuntos}
        show={showModal}
        onClose={() => setShowModal(false)}
      ></Modal>
    </>
  );
};

export default User;
