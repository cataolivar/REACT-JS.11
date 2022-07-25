import React, {useContext} from "react";
import carrito from "../../assets/img/comprar.png";
import "./CartWidget.css"
import { cartContext } from "../../context/CartContext/CartContext";

const CartWidget = () => {

  const {qtyProducts} = useContext(cartContext);

  return (
    <>
    <button className="carrito">
      <img className="imgCarrito" src={carrito} alt="carrito"/>
      <p className="number">{qtyProducts}</p>
    </button>
    </>
  );
};

export default CartWidget;
