import React, { useContext } from 'react'
import './CartWidget.css';
import carrito from '../../img/carrito.png'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = ()  => {
  const {totalProductosCarrito} = useContext(CartContext)

  return (
    <div className="carro">
      <Link to="/cart">
        <img src={carrito}/>
      </Link>
        <div className="uno">
          <p>
        {totalProductosCarrito()}
          </p>
        </div>
         {/* //agregar lodo de carrito con un numero de productos */}
    </div>
  )
}
export default CartWidget;