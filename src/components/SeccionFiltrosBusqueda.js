import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Paginador from "./Paginador";

const SeccionFiltrosBusqueda = () => {
  const {
    ordernarMayorPrecio,
    ordernarMenorPrecio,
    obtenerProductos,
    numeroDePaginas,
    paginaActiva,
    setPaginaActiva,
    setLoading,
  } = useContext(UserContext);

  const ordenarMenorPrecio = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ordernarMenorPrecio();
    }, 1000);
  };

  const ordenarMayorPrecio = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ordernarMayorPrecio();
    }, 1000);
  };

  return (
    <>
      <div className="container-seccion-filtros-busqueda">
        <Paginador
          numeroDePaginas={numeroDePaginas}
          paginaActiva={paginaActiva}
          onClickPaginaActiva={setPaginaActiva}
        />

        <button className="btn-first-busqueda" onClick={obtenerProductos}>
          Más Reciente
        </button>
        <button className="btn-first-busqueda" onClick={ordenarMenorPrecio}>
          Menor Valor
        </button>
        <button className=" btn-first-busqueda" onClick={ordenarMayorPrecio}>
          Mayor Valor
        </button>
      </div>
    </>
  );
};

export default SeccionFiltrosBusqueda;
