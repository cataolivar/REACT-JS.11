import React, {createContext, useEffect, useState} from "react"

export const cartContext = createContext();
const {Provider} = cartContext;

const CartContext = ({children}) => 
{
    const [products, setProducts] = useState ([]);
    const [qtyProducts, setQtyProducts] = useState(0)
    
   

    useEffect ( () => {
    }, [products])

     const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product => qty += product.qty);
        setQtyProducts(qty);
    }

    const addProduct = (product) => {

        if(isInCart(product.id)) {

            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);

         } else{
            setProducts([...products,product]);
            }
    }

    const deleteProduct = (id) => {
       setProducts (products.filter (product => product.id !== id));
       getQtyProducts();
    }

    const isInCart = (id) => {
        return products.some(products => products.id === id); 
    }


    const clear = () => {
        setProducts([])
    }
    
    const calcularTotal = () => {
        return products.reduce(
            (acum, actual) => acum + actual.price * actual.qty,
            0
        );
    };

    return(
        <Provider value ={{products,addProduct,clear,qtyProducts,calcularTotal, deleteProduct}}>
        {children}
        </Provider>
    )

}

export default CartContext