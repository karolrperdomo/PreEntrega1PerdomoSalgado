// Importación de componentes y módulos necesarios desde la biblioteca Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// Definición del componente funcional CartWidget
const CartWidget = () => {
    // Renderizado del componente
    return (
        // Contenedor principal con estilos de diseño flexibles y alineación de elementos
        <div style={{ display: "flex", width: 35, justifyContent: "space-between", alignItems: "center" }}>
            {/* Icono de carrito de compras utilizando Font Awesome */}
            <FontAwesomeIcon style={{ color: "darkblue" }} icon={faCartShopping} />
            {/* Número de elementos en el carrito (puedes cambiar este valor según la cantidad real) */}
            <span style={{ fontWeight: "bold", fontSize: "15px", color: "black" }}>3</span>
        </div>
    );
};

// Exportación del componente CartWidget
export default CartWidget;
