import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import CartWidget from "./CartWidget";

const BarraArtesanal = () => {
    const logoStyle = {
        width: '100px', 
    };

    return (
        <Navbar expand="lg" className="barra-artesanal">
            <Container>
                <Navbar.Brand href="#home" className="marca-artesanal">
                    <Image src="https://images.vexels.com/media/users/3/145732/isolated/preview/ba9bfe792bcb5cce0f8af1fb8d837443-logotipo-de-colibri.png" alt="Logo" fluid style={logoStyle} />
                    <span className="manualidades">Manualidades</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="enlaces-artesanales">
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cerámica</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Textiles</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Madera</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Opiniones</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                        <Nav.Link href="#vender">Vender</Nav.Link>
                        <Nav.Link href="#ayuda">Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget className="widget-carrito-artesanal" />
            </Container>
        </Navbar>
    );
};

export default BarraArtesanal;
