import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contacts/contactAction';


export default function ContactContainer(props) {

    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    var submitHandler=(event)=>
    {
        event.preventDefault();

        var tempObj = {
            name: event.target[0].value,
            address: event.target[1].value,
            city: event.target[2].value,
            phone: event.target[3].value,
            email: event.target[4].value
        }
        dispatch(addContact(tempObj))
    }

    return (
        <div className='contactContainer'>

            <div className='upperContainer'>

                <div className='containerHeader'>

                    <p className='containerHeading'>
                        CONTACTS LIST
                    </p>

                </div>

                <div className='contactDisplayDiv'>

                    <hr />

                    <div className='contactDisplayHeader'>
                        <p>Name</p>
                        <p>Address</p>
                        <p>Delete</p>
                    </div>

                    <hr />

                    <div className='mainContactDisplayDiv'>

                        {(state.contacts.length>0)?state.contacts.map((item, index)=>
                        {
                            return(
                                <div className='contactRow'>
                                    <p className='contactNameDisplay'>{item.name}</p>
                                    <p className='contactAddressDisplay'>{item.address}</p>
                                    <button className='deleteBtn' onClick={(event)=>dispatch(deleteContact(event, index))}><i class="fa-solid fa-trash"></i></button>
                                </div>
                            )
                        }):''}

                    </div>

                </div>

            </div>

            <div className='belowContainer'>

                <p className='belowContainerHeading'>ADD CONTACT</p>

                <form className='addContactForm' onSubmit={(event)=>submitHandler(event)}>

                    <div className='inputDiv'>
                        <label for="nameID">Name:</label>
                        <input type="text" id="nameID" required /><br />
                    </div>

                    <div className='inputDiv'>
                        <label for="addressID">Address:</label>
                        <input type="text" id="addressID" required /><br />
                    </div>

                    <div className='inputDiv'>
                        <label for="cityID">City:</label>
                        <input type="text" id="cityID" required /><br />
                    </div>

                    <div className='inputDiv'>
                        <label for="phoneID">Phone:</label>
                        <input type="number" id="phoneID" required /><br />
                    </div>

                    <div className='inputDiv'>
                        <label for="emailID">E-mail:</label>
                        <input type="email" id="emailID" required /><br />
                    </div>

                    <button type='submit' className='submitFormBtn'>Submit</button>

                </form>

            </div>

        </div>
    )
}
