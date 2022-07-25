import React from "react"
import Items from "../Items/Items"
import "./ItemList.css"

const ItemList = ({productList}) => {

  return (
    <div>
        <h3 className="h3" >LISTA DE PRODUCTOS</h3>
        <div>
        {productList.map((product)=><Items key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default ItemList