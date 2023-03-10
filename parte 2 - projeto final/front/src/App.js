import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Categorias from './pages/categorias/index';
import Produtos from './pages/produtos/index';
import MeusPedidos from './pages/meuspedidos/index';
import Navbar from './components/navbar/index'
import Menu from './components/nenu/index'

export default function App() {
  return (
      <div>
        <BrowserRouter>
            <Navbar />
            <Menu />

            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/produtos" element={<Produtos />} />
                  <Route path="/categorias" element={<Categorias />} />
                  <Route path="/meuspedidos" element={<MeusPedidos />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}