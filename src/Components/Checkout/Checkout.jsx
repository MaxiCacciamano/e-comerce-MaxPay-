import React, { useState } from 'react'
import './checkout.scss'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/cartContext'
import { Factura } from './Factura';

export const Checkout = () => {
    const [input, setInput] = useState({
    nombre:"",
    apellido:"",
    direccion:"",
    codigoPostal:"",
    ciudad:"",
    estado:"",
    pais:"",
    telefono:""
  })

    const [ next, setNext ] = useState(false)
    const navigate = useNavigate()
    const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = React.useContext(CartContext)


    const handlesubmit  = (e)=>{
      e.preventDefault()
      setNext(true)
     }

       const handleChange = (e) =>{
    setInput((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }


  return (
    <div class="wrapper">
      {
        next? <Factura/>:
    <div class="containerr">
        <form onSubmit={handlesubmit}>
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Verificación compra
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">Nombre</label>
                    <input type="text"
                        value={input.nombre}
                        name="nombre"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="l-name">Apellido</label>
                    <input type="text" 
                      value={input.apellido}
                      name="apellido"
                      onChange={handleChange}
                    />
                </div>
            </div>
            <div class="street">
                <label for="name">Pais</label>
                <input type="text"
                  value={input.pais}
                  name="pais"
                  onChange={handleChange}
                />
            </div>
            <div class="address-info">
                <div>
                    <label for="city">Ciudad</label>
                    <input type="text"
                      value={input.ciudad}
                      name="ciudad"
                      onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="state">Estado</label>
                    <input type="text"
                    value={input.estado}
                    name="estado"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="zip">Dirección</label>
                    <input type="text"
                       value={input.direccion}
                       name="direccion"
                       onChange={handleChange}
                    />
                </div>
            </div>
            {/* <h1>
                <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input type="text" name="card-num"/>
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire"/>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"/>
                </div>
            </div> */}
            <div class="btns">
                <button
                  type='submit'
                >
                  {/* <Link to="Factura"> */}
                  Pagar
                  {/* </Link> */}
                  </button>
                  <button>
                <Link to="/cart">
                   Back to cart
                </Link>
                  </button>
            </div>
        </form>
    </div>

      }
</div>
  )
}


// import React, { useState } from 'react'
// import { Factura } from './Factura'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import { CartContext } from '../../context/cartContext'


// export const Checkout = () => {
//   const [input, setInput] = useState({
//     nombre:"",
//     apellido:"",
//     direccion:"",
//     codigoPostal:"",
//     ciudad:"",
//     pais:"",
//     telefono:""
//   })
  
//   const [ next, setNext ] = useState(false)
//   const navigate = useNavigate()
//   const {cart, totalProductosCarrito, totalPrecioCarrito, emptyCart, deleteProductbyid} = React.useContext(CartContext)

//   const handlesubmit  = (e)=>{
//     e.preventDefault()
//     setNext(true)
//   }

//   const handleClear = () =>{
//     emptyCart()
//     navigate("/");
//     //Utilizando sweet alert
//     Swal.fire({
//       position: 'top-end',
//       icon: 'success',
//       title: 'Pago realizado con exito',
//       showConfirmButton: false,
//       timer: 1500
//     })
//     // alert("compra realizada con exito")
// }

//   const handleChange = (e) =>{
//     setInput((prev)=>{
//       return {
//         ...prev,
//         [e.target.name]:e.target.value
//       }
//     })
//   }

//   return (
//     <div>
//       {
        
//       <form onSubmit={handlesubmit}>
//         <h3>Nombre</h3>
//         <input
//          type="text"
//          value={input.nombre}
//          name="nombre"
//          onChange={handleChange}
//         />
//         <h3>Apellido</h3>
//         <input
//         type="text"
//         value={input.apellido}
//         name="apellido"
//         onChange={handleChange}
//         />
//         <h3>Direccion</h3>
//         <input
//         type="text"
//         value={input.direccion}
//         name="direccion"
//         onChange={handleChange}
//         />
//         <h3>Codigo postal</h3>
//         <input
//         type="number"
//         value={input.codigoPostal}
//         name="codigoPostal"
//         onChange={handleChange}
//         />
//         <h3>Ciudad</h3>
//         <input
//         type="text"
//         value={input.ciudad}
//         name="ciudad"
//         onChange={handleChange}
//         />
//         <h3>Pais</h3>
//         <input
//         type="text"
//         value={input.pais}
//         name="pais"
//         onChange={handleChange}
//         />
//         <h3>Telefono</h3>
//         <input
//         type="number"
//         value={input.telefono}
//         name="telefono"
//         onChange={handleChange}
//         />
//         <button
//         type='submit'
//         onClick={handleClear}
//         >
//           pagar
//         </button>
//         </form>

//         // ):
//         // (
//         //   <Factura {...input}/>
//         // )
//       }
//     </div>
//   )
// }
