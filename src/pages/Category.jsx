import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";

/**
 * @description Página de categoría que muestra una lista de productos de una categoría específica.
 * @returns {JSX.Element} - Elemento JSX que contiene el componente ItemListContainer con los datos de productos.
 */
export const Category = () => {
  // Utilización del custom hook useGetProducts para obtener datos de productos (límite: 20)
  const { productsData } = useGetProducts(20);

  // Renderizado del componente ItemListContainer con los datos de productos obtenidos
  return <ItemListContainer productsData={productsData} />;
};
