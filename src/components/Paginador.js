import React from "react";

const Paginador = ({ numeroDePaginas, paginaActiva, onClickPaginaActiva }) => {
  const paginas = [];

  for (let i = 1; i <= numeroDePaginas; i++) {
    paginas.push(i);
  }

  const onClickPagina = (pagina) => {
    onClickPaginaActiva(pagina);
  };

  if (paginas.length === 0) return null;
  return (
    <>
      <div className="container-paginador">
        <p className="paginas">Páginas</p>

        {paginas.map((pagina) => (
          <p
            key={pagina}
            onClick={() => onClickPagina(pagina)}
            className={
              pagina === paginaActiva ? "pagina-active" : "numero-paginas"
            }
          >
            {pagina}
          </p>
        ))}
      </div>
    </>
  );
};

export default Paginador;
