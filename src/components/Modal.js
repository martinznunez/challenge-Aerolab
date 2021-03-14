import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, show, onClose, handleSetPuntos }) => {
  const tiposDePuntos = [1000, 5000, 7500];

  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="container-modal" onClick={() => onClose()}>
      <div onClick={(e) => e.stopPropagation()}>
        <div>
          <span onClick={() => onClose()}>X</span>
        </div>
        <div className="container-btn">
          {tiposDePuntos.map((item) => (
            <button
              key={item}
              value={item}
              onClick={(e) => handleSetPuntos(e.target.value)}
            >
              {item} <img src="/assets/coin.svg" alt="" />
            </button>
          ))}
        </div>

        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
