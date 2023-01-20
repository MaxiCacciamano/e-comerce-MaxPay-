import React, { useEffect, useState } from 'react'
import  { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import './cart.scss'
import Swal from 'sweetalert2'

export const Cart = () => {

  const {cart,totalPrecioCarrito, deleteProductbyid,totalProductosCarrito} = useContext(CartContext)
  const [render, setRender] = useState(false)  
  const handledeletproduct = (id) =>{
    deleteProductbyid(id)
  }


  const handleprox = ()=>{
    Swal.fire('Los desarrolladores estan trabajando en esta seccion')
  }
  return ( 
    <div class="wrap">
      {
        totalProductosCarrito == 0? (<h1>Cargando...</h1>):(
          <div>
  <header class="cart-header cf">
    <strong>Carrito</strong>
    <span class="btn1">Checkout</span>
  </header>
  <div class="cart-table">
    {
      cart.map(item=>(
        <ul >
        <div key={item.id}>
      <li  class="item">
        <div   class="item-main cf">
          <div key={item.id} class="item-block ib-info cf">
            <img class="product-img" src={item.image} alt={item.name}/>
            <div class="ib-info-meta">
              <span class="title">{item.name}</span>
              <span class="itemno">#{item.code}</span>
            </div>
          </div>
          <div class="item-block ib-qty">
            <input type="text" value={item.cantidad} class="qty" />
            <span class="price"><span>x</span> ${item.price}</span>
          </div>
          <div class="item-block ib-total-price">
            <span class="tp-price">${item.cantidad * item.price}</span>
            <span class="tp-remove"><i class="i-cancel-circle"></i></span>
          </div>         
        </div>
        <div class="item-foot cf">
           {/* <div class="if-message"><p>Space Reserved for item/promo related messaging</p></div>  */}
          <div class="if-left"><span class="if-status">In Stock</span></div>
            <div class="if-right"> {/*<span class="blue-link">Subscription Options</span>*/} <span onClick={handleprox} class="blue-link">Add to Wishlist</span></div> 
        </div>
      </li>

        </div>
    </ul>
      ))
    }
  </div>
  <div class="sub-table cf">
    <div class="summary-block">
      <div class="sb-promo">
        <input type="text" placeholder="Enter Promo Code" />
        <span class="btn2">Apply</span>
      </div>        
        {/* {
          cart.map(item=>( */}
            <div class="price">
          <ul>
          <li class="subtotal"><span class="sb-label">Subtotal</span><span class="sb-value">${totalPrecioCarrito()}</span></li>
          <li class="shipping"><span class="sb-label">Shipping</span><span class="sb-value">n/a</span></li>
          <li class="tax"><span class="sb-label">Est. Tax | <span class="tax-edit">edit <i class="i-notch-down"></i></span></span><span class="sb-value">$5.00</span></li>
          <li class="tax-calculate"><input type="text" value="06484" class="tax" /><span class="btn">Calculate</span></li>
          <li class="grand-total"><span class="sb-label">Total</span><span class="sb-value">${totalPrecioCarrito() + 5.00}</span></li>
          </ul>
            </div>
           {/* ))

        }  */}
    </div>
    <div class="copy-block">    
      <p>Items will be saved in your cart for 30 days. To save items longer, add them to your <a href="#">Wish List</a>.</p>
      <p class="customer-care">
        Call us M-F 8:00 am to 6:00 pm EST<br />
        (877)-555-5555 or <a href="#">contact us</a>. <br />     
      </p>
    </div>    
  </div>
  
  <div class="cart-footer cf">
    <Link to="/checkout">
      <span class="btn1">Checkout</span>
    </Link>
      <span class="cont-shopping"><i class="i-angle-left"></i>Continue Shopping</span>    
  </div>
  </div>
          )
        
      }
</div>
  )
}




