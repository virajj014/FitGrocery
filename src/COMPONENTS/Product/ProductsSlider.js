import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import './ProductsSlider.css'
const ProductsSlider = ({ products, categoryname }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className='productsliderout' >
            <h1>{categoryname}</h1>

            <Carousel responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={3000}
            swipeable={true}
            draggable={true}
            >
                {products.map((item,index)=>{
                    return (
                        <ProductCard data={item} key={index} />
                    )
                })}
            </Carousel>
        </div >
    )
}

export default ProductsSlider