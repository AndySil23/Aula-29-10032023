import { Link } from 'react-router-dom'
import React from 'react'

export default function Menu (){
    return (
        <div>
                  <Link to="/">home</Link>
                  <Link to="./categorias">Categorias</Link>
                  <Link to="/produtos">Produtos</Link>
                  <Link to="/meuspedidos">Meus Pedidos</Link>
      </div>

    );
}