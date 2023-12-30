import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../services";

/**
 * @description Custom hook para obtener productos
 * @param {number} limit - Límite de productos a obtener
 * @returns {Object} - Objeto que contiene la lista de productos (productsData)
 */
export const useGetProducts = (limit) => {
    // Estado para almacenar la lista de productos
    const [productsData, setProductsData] = useState([]);

    // Efecto secundario que se ejecuta al montar el componente
    useEffect(() => {
        // Llamada a la función para obtener productos desde el servicio
        getProducts(limit)
            .then((response) => {
                // Actualización del estado con los datos de productos recibidos
                setProductsData(response.data.products);
            })
            .catch((error) => {
                // Manejo de errores en caso de fallo en la llamada
                console.log(error);
            });
    }, [limit]); // El efecto se ejecuta cuando el valor de limit cambia

    // Devolución del estado con la lista de productos
    return { productsData };
};

/**
 * @description Custom hook para obtener un producto por su ID
 * @param {number} id - ID del producto a obtener
 * @returns {Object} - Objeto que contiene los datos del producto (productData)
 */
export const useGetProductById = (id) => {
    // Estado para almacenar los datos del producto
    const [productData, setProductData] = useState([]);

    // Efecto secundario que se ejecuta al montar el componente
    useEffect(() => {
        // Llamada a la función para obtener un producto por su ID desde el servicio
        getProductById(id)
            .then((response) => {
                // Actualización del estado con los datos del producto recibidos
                setProductData(response.data);
            })
            .catch((error) => {
                // Manejo de errores en caso de fallo en la llamada
                console.log(error);
            });
    }, [id]); // El efecto se ejecuta cuando el valor de id cambia

    // Devolución del estado con los datos del producto
    return { productData };
};
