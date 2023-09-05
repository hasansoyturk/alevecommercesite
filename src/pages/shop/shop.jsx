import React from 'react'
import { PRODUCTS } from '../../products' 
import { Product } from './product'
import './shop.css'

export const Shop = () => {
    return (
        <div className='shop'>Shop

            <div className='shopTitle'>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) => (
                
                <Product data={product} key={product.id}/>
 
                ))}
            </div>
        </div>
    )
}
