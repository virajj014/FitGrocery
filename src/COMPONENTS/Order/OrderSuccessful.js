import React, { useState } from 'react'
import './OrderSuccessful.css'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider'

const OrderSuccessful = ({ orderid, message, redirecto }) => {

    const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
    const [orderdata, setorderdata] = useState({
        OrderNo: orderid,
        OrderDate: '12/12/2021',
        OrderStatus: 'Delivered',
        CustomerName: 'Harshal Jain',
        CustomerShipToAddress: 'B-101, Shreeji Apartment, Near Shreeji Hospital, Kalyan West, Thane, Maharashtra 421301',
        CustomerEmail: 'virajj014@gmail.com',
        OrderItems: [
            {
                ProductName: 'Product 1',
                Price: 100,
                Quantity: 2,
            },
            {
                ProductName: 'Product 2',
                Price: 5000,
                Quantity: 5,
            }
        ],
        SubTotal: 25200,
        Tax: 100,
        ShippingCharges: 80,
        Total: 25380,
        PaymentType: 'Cash on Delivery'
    })
    return (
        <div
            className='OrdersSuccessful'
        >
            <button className='popup__close-btn'
                onClick={() => {

                    if(redirecto == 'userorders'){
                        window.location.href = '/user/yourorders'
                    }
                    setordersuccesscont(false)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className='confirmationcont'>
                <div className='c1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <h2>{message}</h2>
                </div>

                <div className='c2'>
                    <h2>Order Summary</h2>
                    <div>
                        <p>Order Number</p>
                        <p>{orderdata?.OrderNo}</p>
                    </div>
                    <div>
                        <p>Order Date</p>
                        <p>{
                            orderdata.OrderDate
                        }</p>
                    </div>

                    <div>
                        <p>Name</p>
                        <p>{
                            orderdata.CustomerName
                        }</p>
                    </div>

                    <div>
                        <p>Email</p>
                        <p>
                            {
                                orderdata.CustomerEmail
                            }
                        </p>
                    </div>

                    <div>
                        <p>Order Subtotal</p>
                        <p>$ {orderdata.SubTotal}</p>
                    </div>

                    <div>
                        <p>Payment Method</p>
                        <p>{orderdata.PaymentType}</p>
                    </div>

                    <div>
                        <p>Shipping Address</p>
                        <p>{orderdata.CustomerShipToAddress
                        }</p>
                    </div>

                    <div>
                        <p>Shipping Charges</p>
                        <p>$ {orderdata.ShippingCharges}</p>
                    </div>

                    <div>
                        <p>Tax</p>
                        <p>$ {orderdata.Tax}</p>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>$ {orderdata.Total}</p>
                    </div>

                </div>

                <div className='c3'>
                    <table>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                orderdata?.OrderItems && orderdata.OrderItems.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <p>{index + 1}</p>
                                            </td>
                                            <td><p>{item.ProductName}</p></td>
                                            <td><p>${item.Price}</p></td>
                                            <td><p>{item.Quantity}</p></td>
                                            <td><p>${item.Price * item.Quantity}</p></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='totalcont'>
                    <div>
                        <p>Subtotal</p>
                        <p>$ {orderdata.SubTotal}</p>
                    </div>

                    <div>
                        <p>Shipping</p>
                        <p>$ {orderdata.ShippingCharges}</p>
                    </div>

                    <div>
                        <p>Tax</p>
                        <p>$ {orderdata.Tax}</p>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>$ {orderdata.Total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccessful