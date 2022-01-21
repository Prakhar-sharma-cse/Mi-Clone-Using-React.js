import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReview.css'

const ProductReview = ({productReview}) => {
    return (
        <div className="product-review">
           {
                productReview.map((item,index) => (
                    <ProductReviewCard key={item + index} image={item.image} review={item.review} name={item.name} price={item.price} index={index}/>
                ))
           } 
        </div>
    )
}

export default ProductReview
