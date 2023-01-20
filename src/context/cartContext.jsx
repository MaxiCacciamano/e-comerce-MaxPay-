import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const addTocart = (itemD, stockk)=>{
       if(cart.length === 0){
           setCart([{
            ...itemD,
            cantidad:stockk
           }])

       }else{
        const findedProduct = cart.find(item => item.id === itemD.id)
        !findedProduct?
        setCart([
            ...cart,
            {
                ...itemD,
                cantidad:stockk
            }
        ])
        :
        setCart([
            ...cart.filter(item => item.id !== itemD.id),
            {
                ...findedProduct,
                cantidad:findedProduct.cantidad +1
            }

        ])
       }
     }

     const totalProductosCarrito = () => {
         return cart.reduce((acc, product) =>acc + product.cantidad, 0)
    }

    const deleteProductbyid = (id) =>{
        const newCar = cart.filter(item=>item.id !== id)
        setCart(newCar)
    }


    const emptyCart = () => {
        setCart([])
    }
    
    const totalPrecioCarrito = ()=>{
         return cart.reduce((acc, product) =>acc + product.cantidad * product.price, 0)
     }
    return (
        <CartContext.Provider value={{
            cart,
            addTocart,
            totalProductosCarrito,
            totalPrecioCarrito,
            emptyCart,
            deleteProductbyid
        }}>
            {children}
        </CartContext.Provider>
    )
}