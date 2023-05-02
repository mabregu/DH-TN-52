import React from 'react';
import ReactDOM from 'react-dom/client';
import MiComponente from './MiComponente';

const html = <h1>Hola Mundo!</h1>;
const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

root.render(
  <div>
    {html}
    <MiComponente />
    <MiComponente saludo="Hola desde index" />
    <MiComponente saludo="Hola addsdaasd" />
  </div>
);


