import React from 'react'
import './UserAddress.css'

const UserAddress = () => {
    const [show, setShow] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: 'AddressLine1',
            AddressLine2: 'AddressLine2',
            AddressLine3: 'AddressLine3',
        },
        {
            AddressLine1: 'AddressLine5',
            AddressLine2: 'AddressLine6',
            AddressLine3: 'AddressLine7',
        },
        {
            AddressLine1: 'AddressLine8',
            AddressLine2: 'AddressLine9',
            AddressLine3: 'AddressLine10',
        }
    ]
    return (
        <div className='useraddress'>
            {
                !show && <h1 className='mainhead1'>Your Address</h1>
            }
            {
                !show &&

                <div className='addressin'>
                    {
                        savedaddress.map((item, index) => {
                            return (
                                <div className='address' key={index}>
                                    <span>{item.AddressLine1}</span>,
                                    <span>{item.AddressLine2}</span>,
                                    <span>{item.AddressLine3}</span>


                                    <div className='delbtn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                !show && <div className='addnewbtn'

                    onClick={() => setShow(true)}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


                </div>
            }
            {
                show &&

                <div className='addnew'>
                    <h1 className='mainhead1'>Add New Address</h1>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='postalcode'>Postal Code</label>
                            <input type="text" />
                        </div>

{/*                        
                    </div>



                    <div className='form'>
                       */}

                        <div className='form-group'>
                            <label htmlFor='addressline1'>Address Line 1</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline2'>Address Line 2</label>
                            <input type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='addressline3'>Address Line 3</label>
                            <input type="text" />
                        </div>
                    </div>

                    <button className='mainbutton1'
                        onClick={() => setShow(false)}
                    >Save</button>
                </div>
            }
        </div>
    )
}

export default UserAddress