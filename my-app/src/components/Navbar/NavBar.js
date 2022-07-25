import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    path: '/',
    name: 'Inicio',
  },

  {
    id: 2,
    path: '/category/medias',
    name: 'Medias',
  },

  {
    id: 3,
    path: '/category/tinturas',
    name: 'Tinturas',
  },

  {id: 4,
    path: '/category/parches',
    name: 'Parches'}

]

const NavBar = () => {
  return (
    <nav>
      <h1> - GENDER FREE STORE - </h1>
      <ul>
        {categories.map((category) => (<Link to={category.path} key={category.id}>{category.name}</Link> ))}
        <Link to={"/carrito"}>
        <CartWidget />
        </Link>
        
      </ul>
    
    </nav>
  )
}

export default NavBar;