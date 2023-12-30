// Importación de componentes y módulos necesarios desde react-bootstrap
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import CartWidget from "../NavBar/CartWidget/CartWidget";

// Definición del componente funcional BarraArtesanal
const BarraArtesanal = () => {
    // Estilo para el logo
    const logoStyle = {
        width: '100px',
    };

    // Función para redirigir al hacer clic en el logo
    const redirectToHome = () => {
        window.location.href = window.location.origin; // Redirige a la URL de la página actual
    };

    // Renderizado del componente
    return (
        // Barra de navegación expandible con estilo personalizado
        <Navbar expand="lg" className="barra-artesanal">
            {/* Contenedor principal dentro de la barra de navegación */}
            <Container>
                {/* Marca y logo de la barra de navegación */}
                <Navbar.Brand onClick={redirectToHome} className="marca-artesanal">
                    <Image src="https://images.vexels.com/media/users/3/145732/isolated/preview/ba9bfe792bcb5cce0f8af1fb8d837443-logotipo-de-colibri.png" alt="Logo" fluid style={logoStyle} />
                    <span className="manualidades">Manualidades</span>
                </Navbar.Brand>
                {/* Botón de menú desplegable en tamaños de pantalla pequeños */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Contenido del menú de navegación */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Lista de enlaces de navegación */}
                    <Nav className="enlaces-artesanales">
                        {/* Menú desplegable de categorías */}
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cerámica</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Textiles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Madera</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Opiniones</NavDropdown.Item>
                        </NavDropdown>
                        {/* Enlace directo a Ofertas */}
                        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                        {/* Enlace directo a Vender */}
                        <Nav.Link href="#vender">Vender</Nav.Link>
                        {/* Enlace directo a Ayuda */}
                        <Nav.Link href="#ayuda">Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* Componente CartWidget para mostrar el carrito de compras */}
                <CartWidget className="widget-carrito-artesanal" />
            </Container>
        </Navbar>
    );
};

// Exportación del componente BarraArtesanal
export default BarraArtesanal;
