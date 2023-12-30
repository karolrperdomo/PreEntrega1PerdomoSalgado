import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import CartWidget from "../NavBar/CartWidget/CartWidget";

const BarraArtesanal = () => {
    const logoStyle = {
        width: '100px',
    };

    return (
        <Navbar expand="lg" className="barra-artesanal">
            <Container>
                <Navbar.Brand as={Link} to="/" className="marca-artesanal">
                    <Image src="https://images.vexels.com/media/users/3/145732/isolated/preview/ba9bfe792bcb5cce0f8af1fb8d837443-logotipo-de-colibri.png" alt="Logo" fluid style={logoStyle} />
                    <span className="manualidades">Manualidades</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="enlaces-artesanales">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {/* Utiliza el componente Link para las categorías */}
                            <NavDropdown.Item as={Link} to="/category/ceramica">Cerámica</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/textiles">Textiles</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/madera">Madera</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/opiniones">Opiniones</NavDropdown.Item>
                        </NavDropdown>
                        {/* Utiliza el componente Link para las otras secciones */}
                        <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/vender">Vender</Nav.Link>
                        <Nav.Link as={Link} to="/ayuda">Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget className="widget-carrito-artesanal" />
            </Container>
        </Navbar>
    );
};

export default BarraArtesanal;
