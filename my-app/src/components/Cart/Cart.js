import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext/CartContext";
import "./Cart.css"
import { Link } from "react-router-dom"
import imgPikachu from "../../assets/img/pikachu.jpg"
import { db } from "../../Firebase/Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Cart = () => {
    const { products, clear, calcularTotal, deleteProduct } = useContext(cartContext)

    if (products.length === 0) {
        return (
            <>
                <div className="carritoVacio">
                    <h2>Tu carrito esta vacio, haz click <Link to={"/"}>AQUI</Link></h2>
                    <img className="pikachu" src={imgPikachu} alt="pikachu" />
                </div>
            </>
        )
    }

    const datosComprador = {
        nombre: "sjdfjd",
        telefono: 17634544,
        email: "ahdjasd"
    }

    const finalizarCompra = () => {
        const ventasCollection = collection (db, "ventas")
        addDoc(ventasCollection, {
            datosComprador,
            items: products.map(prod => ({id: prod.id, nombre: prod.name, precio:prod.price})),
            total: calcularTotal(),
            fecha: serverTimestamp (),})}


    return (
        <div>
            <h1 className="carritoh1">Carrito</h1>
            <div>
                {products.map((prod) => (
                    <div className="divCarrito" key={prod.id}>
                        <img className="imgCart" src={prod.img} alt="Carrito" />
                        <h3>Producto: {prod.name}</h3>
                        <h3>${prod.price}</h3>
                        <h4>Cantidad: {prod.qty}</h4>
                        <button className="delete" onClick={() => deleteProduct(prod.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="buttonYtotal">
                <h2 className="carritoh2">Total: ${calcularTotal()}</h2>
                <button className="buttonCarrito" onClick={clear}>Vaciar Carrito</button>
            </div>
            <div>
                <button onClick={finalizarCompra} className="buttonCarrito1" >Finalizar Compra </button>
            </div>
        </div>
    );
};

export default Cart;