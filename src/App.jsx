import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Product/:id" element={<ProductDetail/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </Router>
  )
}

export default App