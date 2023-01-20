import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../../products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import style from '../ItemDetailContainer/ItemDetailContainer.module.css'

export const ItemDetailContainer = () => {
    const {idProd} = useParams()
    const[itemD, setItemD] = useState({})
    const [loading, setLoading] = useState(false);
    const getProduct=()=> new Promise((res,rej)=>{
        setTimeout(()=>res(
         products.find(p=>p.id == idProd),
         2000),
         setLoading(false))
    })
    // console.log(itemD)
    useEffect(()=>{
        setLoading(true)
        getProduct()
        .then(response=>{
            setItemD(response)
            setLoading(true)
        }
        )

        // return () => setItemD([]) //limpio el valor anterior
    },[itemD])
  return (
    <div className={style.iD}>
        {
            loading?
            <ItemDetail itemD={itemD}/>
            :
            <h1>Cargando...</h1>
        }
    </div>
  )
}
