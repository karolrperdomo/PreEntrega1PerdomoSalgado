// Importación de estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importación del componente principal de enrutamiento
import MainRouter from "./router/MainRouter";

/**
 * @description Componente principal de la aplicación.
 * @returns {JSX.Element} - Elemento JSX que contiene el componente MainRouter.
 */
const App = () => {
  // Renderizado del componente principal
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Componente de enrutamiento principal */}
      <MainRouter />
      {/* Ejemplo de componente UserData comentado para evitar renderizarlo */}
      {/* <UserData firstName="Benjamin" lastName="García" age={20} birthdate="28/06/91" /> */}
    </div>
  );
};

// Exportación del componente App
export default App;
