import React from 'react'
import './Main.css'
import productList from '../../tempData/products'

function Main() {
    return (
        <div className="Main">
            Here is the main contents
            <ul>
            {
                productList.map((product) => {
                    return (
                        <li>
                            {product.name}
                        </li>  
                    );
                })
            } 
            </ul>
        </div>
    )
}

export default Main
