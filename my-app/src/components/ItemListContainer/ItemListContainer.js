import React, { useEffect, useState} from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemListContainer.css"
import fonts from "../../assets/fonts/fonts.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
   

    useEffect (() => {

        const q = categoryId
        ? query (collection(db, "RopaColeccion"), where("category", "==", categoryId))
        : collection (db, "RopaColeccion")

        getDocs(q)
        .then(result =>{
           const lista = result.docs.map(product => {
            return{
                id: product.id,
                ...product.data(),
            }
            })
            setProductList (lista)
        })

        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))

    }, [categoryId])

    return (
        <div>
            <span className= "greeting">{greeting}</span>
            <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemList productList={productList}/>} </div>
        </div>
    );
};

export default ItemListContainer