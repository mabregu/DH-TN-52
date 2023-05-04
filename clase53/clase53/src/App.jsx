import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Product from './components/Product.jsx';
import NotFound from './components/NotFound.jsx';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product/7">Product 7</Link>
      </nav>
      
      <h1>Clase 53</h1>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
