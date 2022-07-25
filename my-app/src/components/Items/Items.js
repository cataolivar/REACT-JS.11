import React, { useContext } from "react"
import "./Items.css"
import { Link } from "react-router-dom"
import { cartContext } from '../../context/CartContext/CartContext'

const Items = ({product}) => {

    const {products} = useContext (cartContext)

    const isInCart = products.some((prod) => prod.id === product.id);

    const { name, price, img, description} = product

    return (
        <>
            <div className="divItems">
                <h3 className="h3Items">{name}</h3>
                <img className="img1" src={img} alt="img" />
                <p>{description}</p>
                <h4><span>${price}</span></h4>
                {isInCart && <h5>YA ESTA AGREGADO EN EL CARRITO!</h5>}
                <Link  to={`/detail/${product.id}`} className="itemsButton">Ver mas</Link>
            </div>
        </>
    )
}

export default Items