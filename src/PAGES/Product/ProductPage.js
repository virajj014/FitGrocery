import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './ProductPage.css'
const ProductPage = () => {
    const { prodid } = useParams()
    const [imageset, setimageset] = React.useState(null)
    const [productdata, setproductdata] = React.useState([])
    const [activeimg, setactiveimg] = React.useState({})
    const [count, setcount] = React.useState(1)


    const getproductdatabyid = async () => {
        let temp = {
            "Code": 200,
            "Message": "Success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Product 1 Description",
                    "ProductImage": [
                        {
                            id: 1,
                            image: img1
                        },
                        {
                            id: 2,
                            image: img2
                        },
                        {
                            id: 3,
                            image: img3
                        }
                    ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days"
                }
            ]
        }

        if (temp.Code == 200) {
            setimageset(temp.Data[0].ProductImage)
            setproductdata(temp.Data[0])
            setactiveimg(temp.Data[0].ProductImage[0])
        }
    }


    useEffect(() => {
        getproductdatabyid()
    }, [])
    return (
        <div className='productpage'>
            {/* <h1>Product id is - {prodid}</h1>
            <p>
                {JSON.stringify(productdata)}
            </p> */}

            <Navbar />

            <div className='pc1'>
                <Link to='/'>
                    <button className='goback'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        Go Back
                    </button>
                </Link>


                <div className='c11'>
                    <div className='imgset'>
                        {
                            imageset && imageset?.map((item,index)=>{
                                return (
                                    <div className='imgsmall'
                                        onClick={()=>{
                                            setactiveimg(item)
                                        }}
                                    >
                                        <img src={item.image} alt="" 
                                         className={
                                            activeimg.id == item.id ? 'active' : ''
                                         }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='imgbig'>
                        <img src={activeimg.image} alt="" />
                    </div>
                </div>

                <div className='c12'>
                    <h1 className='head1'>{productdata.ProductName}</h1>
                    <div className='c121'>
                        <p className='price'>
                            ${productdata.SalesPrice * count}
                            <span>${productdata.ProductPrice * count}</span>
                        </p>

                        <div className='incrdecr'>
                            <button
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p>{count}</p>
                            <button
                                onClick={() => {
                                    if (count < 10) {
                                        setcount(count + 1)
                                    }
                                }}
                            >+</button>
                        </div>
                    </div>

                    <div className='btncont'>
                        <button
                            onClick={() => {
                                alert('Added to cart')
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                alert('Buy Now')
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage