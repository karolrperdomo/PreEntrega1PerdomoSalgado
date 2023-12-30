// Importación de React y ReactDOM desde los módulos correspondientes
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importación del componente principal de la aplicación (App) y los estilos CSS
import App from './App.jsx';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Utilización de ReactDOM.createRoot para renderizar la aplicación en el elemento con id 'root'
// y aplicación del modo estricto de React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
