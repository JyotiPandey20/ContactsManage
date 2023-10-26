import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList(props) {
    const { contact, removeContact } = props //destructuring
    const contactList = contact.map((val) => {
        return (
            <div className='contacts' key={val.id}>
                <div style={{ marginLeft: "2px" }} >
                    {val.data.name}
                </div>
                <div className='email'>{val.data.email}</div>
                <span onClick={() => removeContact(val.id)}>
                    <DeleteIcon />
                </span>
            </div>
        );
    })
    return (
        <>
            <div className='contactList'>
                <fieldset >
                    <legend>Contact List</legend>
                    <div>{contactList}</div>

                </fieldset>
            </div>

        </>
    )
}
