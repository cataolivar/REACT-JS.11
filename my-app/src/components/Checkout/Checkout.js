import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../../context/CartContext/CartContext'
import { db } from '../../Firebase/Firebase'
import "./Checkout.css"

const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [ordenId, setOrdenId] = useState('')
    const { products, calcularTotal, clear } = useContext(cartContext)
    const navegar = useNavigate()
    const { register, formState: { erros } } = useForm();

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            comprador,
            items: products.map(prod => ({ nombre: prod.name, precio: prod.price, id: prod.id })),
            total: calcularTotal(),
            fecha: serverTimestamp(),
        })
            .then((res) => {
                setOrdenId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
    }
    return (
        <div>
            {!ordenId
                ? <> <h2 className='h2Checkout'>Complete el formulario para terminar su compra</h2>
                    <form className="divCheckout" onSubmit={finalizarCompra}>
                        <input className='inputCheckout' type="text" {... register("nombre", {required: true})} 
                            placeholder="Nombre"
                            name="nombre"
                            onChange={datosComprador}
                            />
                            {erros.nombre?.type === "required" && <p>Este campo es obligatorio</p>}
                        <input className='inputCheckout' type="text" placeholder="Direccion" name='direccion' onChange={datosComprador} />
                        <input className='inputCheckout' type="text" placeholder="Telefono" name='telefono' onChange={datosComprador} />
                        <input className='inputCheckout' type="email" placeholder="Email" name='email' onChange={datosComprador} />
                        <button type='submit' className="buttonCarrito" >Finalizar Compra </button>
                    </form>
                </>
                : <div className='divCheckout1'>
                    <h2>Muchas gracias por su compra</h2>
                    <p>Su orden es: {ordenId}</p>
                    <button className="buttonCarrito" onClick={() => navegar('/')}>Volver</button>
                </div>
            }
        </div>

    )
}

export default Checkout
