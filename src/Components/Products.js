import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'


export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    const [filter, setFilter] = useState('');


    const searchText = (e) =>{
        setFilter(e.target.value);
    }
    let dataSearch = products.filter(product =>{
          return Object.keys(product).some(key =>
            product[key].toString().toUpperCase().includes(filter.toString().toUpperCase())
            )
    });

    return (
        <>
           
          <section className="py-4 container">
              <div className="row justify-content-center">

            <div className="col-12 mb-5">   
             <div className="mb-3 col-4 mx-auto text-center">
                 <input
                 placeholder="Search Item"
                 type="text"
                 className="form-control-search"
                 value={filter}
                 onChange={searchText.bind(this)}
                 />
                 </div>
                 </div>
               

            {products.length !== 0 && <h1>Products</h1>}
            
            <div className='products-container'>
                {products.length === 0 && <div >slow internet...no products display</div>}
                {dataSearch.map(product => {
                    return(
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            R {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                )})}
            </div>
            </div>
            </section>
        </>
    )
}