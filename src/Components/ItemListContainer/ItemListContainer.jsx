import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {products} from '../../products';
import  ItemList  from '../ItemList/ItemList';
import style from './Item.module.css';

export const ItemListContainer = () => {
    const[product, setProduct] = useState([])
    const {CategoryId}  = useParams();
    // console.log(products)
    const getProducts = () => new Promise((res, rej)=>{
        setTimeout(()=>{res(products)}, 2000)
    })
    useEffect(()=>{
        if(CategoryId){
            getProducts().then(p => setProduct(p.filter(produ => produ.category === CategoryId )))
            .catch((err)=>console.log(err, "error en setTimeout de getProducts()"))
        }else{
            getProducts().then((p)=> setProduct(p))
            .catch((err)=>console.log(err))
        }
        
        return () => setProduct([])
    },[CategoryId]) 
    console.log(product, "aaaaaaaaaaaaaaaaa")
    
    return (
        <div className="bk">
    {
       product.length > 0?
        <ItemList product={product} />
        :
        <h1>Cargando...</h1>
    }
</div>
  )
}
