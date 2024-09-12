import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/Product/:id" element={<ProductDetail/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}

export default App