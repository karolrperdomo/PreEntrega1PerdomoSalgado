import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Carousel from 'react-bootstrap/Carousel';

const App = () => {
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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283_1280.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <ItemListContainer />
    </div>
  );
}

export default App;
