import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./UseItems.css"

const UseItems = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    const sumar = () => {
        if (stock > count) { setCount(count + 1) }
    }

    const restar = () => {
        if (count > 1) { setCount(count - 1) }
    }

    const agregarCantidad = () => {
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <div className="divButton">
            <button className="buttonRestaSuma" onClick={restar}> - </button>
            <span>{count}</span>
            <button className="buttonRestaSuma" onClick={sumar}> + </button>
            {cambiarBoton?
                <button onClick={agregarCantidad}>Agregar al carrito</button>:
                <>
                <Link to={"/carrito"}>
                <button className="buttonCarrito">Ir al Carrito </button>
                </Link>
                </>
            } 
        </div>
    )
}

export default UseItems