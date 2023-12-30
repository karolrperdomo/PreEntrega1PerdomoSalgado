import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";

/**
 * @description Componente que define las rutas principales de la aplicación utilizando react-router-dom.
 * @returns {JSX.Element} - Elemento JSX que contiene las rutas y el componente NavBar.
 */
const MainRouter = () => {
  return (
    <BrowserRouter>
      {/* Componente NavBar para la barra de navegación */}
      <NavBar />
      {/* Configuración de las rutas utilizando el componente Routes */}
      <Routes>
        {/* Ruta principal que muestra la página Home */}
        <Route path="/" element={<Home />} />
        {/* Ruta para mostrar la página de una categoría específica */}
        <Route path="/category/:id" element={<Category />} />
        {/* Ruta para mostrar los detalles de un producto específico */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exportación del componente MainRouter
export default MainRouter;
