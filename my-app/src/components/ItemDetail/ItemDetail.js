import React, {useContext} from "react";
import UseItems from "../UseItems/UseItems";
import "./ItemDetail.css"
import { cartContext } from "../../context/CartContext/CartContext";

const ItemDetail = ({productList}) => {

    const { addProduct } = useContext (cartContext)

    const onAdd = (cantidad) => {
        addProduct({...productList, qty: cantidad})
    }
       

    return(
        <div>
            <h2 className="hItemDetail">Detalle de producto</h2>
            <h3 className="hItemDetail">{productList.name}</h3>
                <img className="imgItemDetail" src={productList.img} alt="img" />
                <p>{productList.description}</p>
                <h4><span>${productList.price}</span></h4>
                <UseItems stock={productList.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail