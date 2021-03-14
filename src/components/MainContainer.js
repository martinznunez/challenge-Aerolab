import React from "react";

import SeccionHeader from "./SeccionHeader";
import SeccionFiltrosBusqueda from "./SeccionFiltrosBusqueda";
import Productos from "./Productos";
import NavBar from "./NavBar";
const MainContainer = () => {
  return (
    <>
      <NavBar />
      <SeccionHeader />

      <div className="Container-filtros">
        <SeccionFiltrosBusqueda />
      </div>
      <div className="container-productos">
        <Productos />
      </div>
    </>
  );
};

export default MainContainer;
