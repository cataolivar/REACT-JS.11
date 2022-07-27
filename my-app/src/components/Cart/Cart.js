import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { cartContext } from "../../context/CartContext/CartContext";
import "./Cart.css"
import { Link } from "react-router-dom"
import imgPikachu from "../../assets/img/pikachu.jpg"
import { db } from "../../Firebase/Firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Cart = () => {
    const { products, clear, calcularTotal, deleteProduct } = useContext(cartContext)
    const { register, handleSubmit } = useForm()


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

    const datosComprador = (data) => {
        console.log(data)
    }

const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
        datosComprador,
        items: products.map(prod => ({ nombre: prod.name, precio: prod.price, id: prod.id })),
        total: calcularTotal(),
        fecha: serverTimestamp(),
    })
}


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

            <h2 className="h2Cart">Complete el formulario para finalizar la compra</h2>

            <form className="formCart" onSubmit= {handleSubmit (datosComprador)}>
              <label >Nombre</label>
              <input  className="inputCart" type="text" {...register("nombre", {required: true})}/>

              <label>Celular</label>
              <input  className="inputCart" type="text" {...register("celular", {required: true})}/>

              <label>Email</label>
              <input  className="inputCart" type="text" {...register("email", {required: true})}/>

                <input type="submit" value="Enviar" onClick={finalizarCompra} className="buttonSubmit"/>
            </form>
        </div>
    </div>
);
};

export default Cart;