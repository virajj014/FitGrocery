import React from 'react'
import './YourOrders.css'

const YourOrders = () => {

    const data = [
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'On the way',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Delivered',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelled',
            total: 100
        },
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 112346,
            date: '12/12/2021',
            status: 'On the way',
            total: 1600
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Delivered',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelled',
            total: 100
        }
    ]
    return (
        <div className='yourorders'>
            <h1 className='mainhead1'>Your Orders</h1>

            <table>
                <thead>
                    <tr>
                        <th>Oder ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.date}</td>
                                <td>
                                    <p>
                                        {item.status == 'Delivered' && <span className='greendot'></span>}
                                        {item.status == 'On the way' && <span className='yellowdot'></span>}
                                        {item.status == 'Cancelled' && <span className='reddot'></span>}
                                        {item.status}</p>
                                </td>
                                <td>${item.total}</td>
                                <td>
                                    <button className='mainbutton1'>View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default YourOrders