import img1 from "../../src/assets/img/mediasCloud.PNG"
import img2 from "../../src/assets/img/parcheJessica.PNG"
import img3 from "../../src/assets/img/tinturaCandy.PNG"

export const products = [
    {id:"01", name:"Medias Cloud", description:"MEDIAS ☁️NUBES☁️ DISPONIBLES EN #KALAKA !", img:img1, stock:5, price:500, category: 'medias'},
    {id:"02", name:"Parche Jessica", description:"PARCHE JESSICA DISPONIBLES EN #KALAKA !", img:img2, stock:5, price:300, category: 'parches'},
    {id:"03", name:"Tintura Candy", description:"TINTURAS PARA EL PELO 🍬CANDY🍬VEGANAS", img:img3, stock:5, price:1500, category: 'tinturas'}
]

        export const getProds = (categoryId) => {
            return new Promise ((resolve, reject) => {
                const productosFiltrados = products.filter(
                    (prod) => prod.category === categoryId
                );
                setTimeout(() => {
                    categoryId 
                    ? resolve(productosFiltrados) 
                    : resolve(products); //undefined
                }, 3000);
            });
        };
        
