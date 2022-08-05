import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/Firebase"
import {doc, getDoc, collection} from "firebase/firestore";

function ItemDetailContainer () {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect (()=> { 
        const productsCollection = collection(db, "RopaColeccion");
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(result => {
            setProductList({
                id: result.id,
                ...result.data(),
            })
        })
        .finally(()=> setLoading(false))
        
        }, [id])

    return(
        <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemDetail productList={productList}/>} </div>
    )

}

export default ItemDetailContainer