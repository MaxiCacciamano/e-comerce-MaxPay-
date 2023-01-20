import React from 'react'
import  { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link, useNavigate } from 'react-router-dom'
import './factura.scss'
import Swal from 'sweetalert2'

export const Factura = ({nombre, apellido, direccion, codigoPostal, telefono, ciudad, pais}) => {
  const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = useContext(CartContext)
  const navigate = useNavigate()
  
  const handledeletproduct = (id) =>{
    deleteProductbyid(id)
  }

  const handleClear = () =>{
    emptyCart()
    navigate("/");
   // Utilizando sweet alert
   Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: 'Pago realizado con exito',
     showConfirmButton: false,
     timer: 1500
   })
  //  alert("compra realizada con exito")
   } 

  const handleprox = ()=>{
    Swal.fire('Los desarrolladores estan trabajando en esta seccion')
  }
  return (
    
    <div class="wrap">

  <header class="cart-header cf">
    <strong>Orden</strong>
    <Link to="/checkout">
      <span class="btn1">Pagar</span>
    </Link>
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
            {/* <div class="if-right"> <span class="blue-link">Subscription Options</span> <span onClick={handleprox} class="blue-link">Add to Wishlist</span></div>  */}
        </div>
      </li>

        </div>
    </ul>       
      ))

    }
  </div>
  <div class="sub-table cf">
    <div class="summary-block">
            <div class="price">
          <ul>
          <li class="subtotal"><span class="sb-label">Subtotal</span><span class="sb-value">${totalPrecioCarrito()}</span></li>
          <li class="shipping"><span class="sb-label">Shipping</span><span class="sb-value">n/a</span></li>
          <li class="tax"><span class="sb-label">Est. Tax | <span class="tax-edit">edit <i class="i-notch-down"></i></span></span><span class="sb-value">$5.00</span></li>
          <li class="tax-calculate"><input type="text" value="06484" class="tax" /><span class="btn">Calculate</span></li>
          <li class="grand-total"><span class="sb-label">Total</span><span class="sb-value">${totalPrecioCarrito() + 5.00}</span></li>
          </ul>
            </div>
            <div>
            <h4>{nombre}</h4>
            <h4>{apellido}</h4>
            <h4>{direccion}</h4>
            <h4>{codigoPostal}</h4>
            <h4>{telefono}</h4>
            <h4>{ciudad}</h4>
            <h4>{pais}</h4>
            </div>
           {/* ))

        }  */}
    </div>
  </div>
  
  <div class="cart-footer cf">
      <span><button onClick={handleClear} class="btn1">Pagar</button></span>
      <span class="cont-shopping"><i class="i-angle-left"></i>Pagar</span>    
  </div>
</div>
  )
}

