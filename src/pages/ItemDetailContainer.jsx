import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { useParams, Link } from "react-router-dom";

/**
 * @description Componente que muestra los detalles de un producto específico.
 * @returns {JSX.Element} - Elemento JSX que contiene los detalles del producto en una tarjeta.
 */
export const ItemDetailContainer = () => {
  // Obtención del parámetro 'id' de la URL usando useParams de react-router-dom
  const { id } = useParams();

  // Utilización del custom hook useGetProductById para obtener datos del producto por su ID
  const { productData } = useGetProductById(id);

  // Renderizado de la tarjeta con los detalles del producto
  return (
    <Card key={productData.id} style={{ width: "18rem" }}>
      {/* Imagen del producto */}
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        {/* Título del producto */}
        <Card.Title>{productData.title}</Card.Title>
        {/* Descripción del producto */}
        <Card.Text>{productData.description}</Card.Text>
        {/* Precio del producto */}
        <div>{productData.price}</div>
        {/* Botón con variante primaria */}
        <Link to={`/items`}>
            <Button variant="primary">Volver a la lista</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
