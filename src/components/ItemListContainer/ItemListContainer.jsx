// Importación de componentes y módulos necesarios desde react-bootstrap y react-router-dom
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// Definición del componente funcional ItemListContainer que toma una propiedad productsData
const ItemListContainer = ({ productsData }) => {
    // Imprimir los datos de productos en la consola
    console.log(productsData);

    // Renderizado del componente
    return (
        // Contenedor principal con estilos de diseño flexibles
        <div style={{ display: 'flex', justifyContent: "space-between", padding: '10px', width: '100vw', flexWrap: "wrap" }}>
            {/* Mapeo de los datos de productos para renderizar tarjetas individuales */}
            {productsData.map((products) => {
                return (
                    // Tarjeta individual con clave única basada en la propiedad id del producto
                    <Card key={products.id} style={{ width: "18rem" }}>
                        {/* Enlace a la página del artículo individual */}
                        <Link to={`/item/${products.id}`}>
                            {/* Imagen del producto */}
                            <Card.Img variant="top" src={products.thumbnail} />
                        </Link>
                        {/* Contenido de la tarjeta con título, descripción, precio y botón */}
                        <Card.Body>
                            {/* Título del producto */}
                            <Card.Title>{products.title}</Card.Title>
                            {/* Descripción del producto */}
                            <Card.Text>{products.description}</Card.Text>
                            {/* Precio del producto */}
                            <div>{products.price}</div>
                            {/* Botón con variante primaria */}
                            <Link to={`/item/${products.id}`}>
                                <Button variant="primary">Conoce más</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

// Exportación del componente ItemListContainer
export default ItemListContainer;
