import React, { createContext, useEffect, useState, useCallback } from "react";

import { fetchProductos } from "../servicios/productos";

import { postPoints } from "../servicios/points";
import { postRedeem } from "../servicios/redeem";
import { fetchUser } from "../servicios/getUser";

import { getHistorialCanje } from "../servicios/getProductosCanje";
export const UserContext = createContext();

const productosPorPagina = 16;

const UserProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState();

  const [productos, setProductos] = useState();
  const [todosProductos, setTodosProductos] = useState(null);
  const [paginaActiva, setPaginaActiva] = useState(1);

  const [errorApi, setErrorApi] = useState(false);

  const [historial, setHistorial] = useState([]);
  const [numeroDePaginas, setNumeroDePaginas] = useState(null);

  const obtenerUser = useCallback(async () => {
    setLoading(true);
    try {
      const respuesta = await fetchUser();
      setUsuario(respuesta.data);
    } catch (error) {
      //   setErrorApi(true);
      console.log(error);
    }
  }, []);

  const reclamarPuntos = useCallback(
    async (puntos) => {
      try {
        const respuesta = await postPoints(puntos);

        const data = respuesta.data["New Points"];

        if (data) {
          setLoading(false);
        }

        const usuarioOriginal = { ...usuario, points: data };
        setUsuario(usuarioOriginal);
      } catch (error) {
        // setErrorApi(true);
        console.log(error);
      }
    },
    [usuario]
  );

  const reclamaProducto = useCallback(async (producto) => {
    setLoading(true);

    try {
      const respuesta = await postRedeem(producto);

      if (respuesta) {
        setLoading(false);
      }
    } catch (error) {
      setErrorApi(true);
    }
  }, []);

  const reclamaProductoHistorial = useCallback(async () => {
    setLoading(true);
    try {
      const respuesta = await getHistorialCanje();

      setHistorial(respuesta.data);
    } catch (error) {
      //   setErrorApi(true);
      console.log(error);
    }
  }, []);

  const paginarProductos = useCallback(
    (productos) => {
      setProductos(productos[paginaActiva - 1]);
    },
    [paginaActiva]
  );

  const obtenerProductos = useCallback(async () => {
    setLoading(true);
    try {
      const respuesta = await fetchProductos();

      const numeroDePaginas = Math.ceil(
        respuesta.data.length / productosPorPagina
      );

      if (numeroDePaginas) {
        setLoading(false);
      }

      setNumeroDePaginas(numeroDePaginas);
      const result = new Array(numeroDePaginas)
        .fill()
        .map((_) => respuesta.data.splice(0, productosPorPagina));

      setTodosProductos(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (todosProductos) {
      paginarProductos(todosProductos);
    }
  }, [paginaActiva, paginarProductos, todosProductos]);

  const ordernarMayorPrecio = () => {
    const productosActuales = [...productos].sort((a, b) => b.cost - a.cost);
    setProductos(productosActuales);
  };

  const ordernarMenorPrecio = () => {
    const productosActuales = [...productos].sort((a, b) => a.cost - b.cost);

    setProductos(productosActuales);
  };

  useEffect(() => {
    obtenerUser();
    obtenerProductos();
  }, [obtenerUser, obtenerProductos]);

  return (
    <UserContext.Provider
      value={{
        errorApi,
        setErrorApi,
        loading,
        setLoading,
        usuario,
        setUsuario,
        productos,
        historial,
        setHistorial,
        numeroDePaginas,
        paginaActiva,
        setPaginaActiva,
        setProductos,
        obtenerProductos,
        reclamaProducto,
        reclamaProductoHistorial,
        ordernarMayorPrecio,
        ordernarMenorPrecio,
        reclamarPuntos,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
