import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Carousel from 'react-bootstrap/Carousel';
import { useGetProducts } from './hooks/useProducts';

const App = () => {
  const { productsData } = useGetProducts(20);

  const appStyle = {
    width: '100vw',
    fontFamily: 'Georgia, serif',
    backgroundColor: '#f8f8f8',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    textAlign: 'center',
    padding: '20px',
    fontSize: '28px',
  };

  return (
    <div style={appStyle}>
      <NavBar />
      <h1 style={titleStyle}>Bienvenidos a nuestra tienda de artesanías</h1>
      <Carousel>
        <Carousel.Item style={{ maxHeight: '300px', overflow: 'hidden' }}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283_1280.jpg"
            alt="First slide"
            style={{ width: '100%', opacity: 0.8 }}
          />
        </Carousel.Item>
      </Carousel>
      <h1 style={titleStyle}>Nuestros productos</h1>
      <ItemListContainer productsData={productsData} />
    </div>
  );
};

export default App;
