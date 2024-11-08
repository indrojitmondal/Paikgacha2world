import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';

const Product = ({product}) => {
    const {product_id,product_image,product_title, price} = product;
    return (
        <div className='bg-white p-4'>
             <img src={product_image} className='h-[300px]' alt={product_title} />
             <h2  className='font-bold text-lg'> {product_title} </h2>
             <h3>Price: {price}k </h3>
             
 
              <Link to={`/product/${product_id}`}>
                <button className='border mt-2 border-primary rounded-[32px] bg-body px-4 py-2 font-bold text-primary  '>View Details</button>
              </Link>
             
             

        </div>
    );
};

export default Product;