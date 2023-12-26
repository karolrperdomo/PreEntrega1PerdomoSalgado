import { useState, useEffect } from "react";
import { getProducts } from "../services";

/**
 * @description Custom hook from get products
 * @returns {Array}
 */


export const useGetProducts = (limit = 10) => {
    const [productsData, setProductsData] = useState([]);
    
    useEffect(() => {
        getProducts(limit)
            .then((response) => {
            setProductsData(response.data.products);
            })
            .catch((error) => {
            console.log(error);
            });
        }, []);

        return { productsData }
}