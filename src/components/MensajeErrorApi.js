import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MensajeErrorApi = () => {
  const { errorApi } = useContext(UserContext);

  return (
    <>
      {errorApi ? (
        <div className="container-mensaje-error-api">
          <p> Algo a fallado intentelo luego </p>
        </div>
      ) : null}
    </>
  );
};

export default MensajeErrorApi;
