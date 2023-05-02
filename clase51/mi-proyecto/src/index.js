import React from 'react';
import ReactDOM from 'react-dom/client';
import MiComponente from './MiComponente';
import Props from './Props';
import './styles.css'

const html = <h1>Hola Mundo!</h1>;
const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
  <div>
    {/* {html}
    <MiComponente />
    <MiComponente saludo="Hola desde index" />
    <MiComponente saludo="Hola addsdaasd" /> */}
    <hr />
    <Props name="Rodry" age={25} />
    <Props name="Rocio" age={20} />
    <Props name="Mica" />
    <Props name="Lauta" age={28} />
  </div>
);


