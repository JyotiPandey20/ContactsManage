import React, { useState } from 'react'

export default function AddContact({addContact}) {
    const [contactData, setContactData] = useState(
        {
            name: "",
            email: ""
        }
    );

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setContactData(
                {
                    ...contactData,
                    name: e.target.value
                })
        } else {
            setContactData(
                {
                    ...contactData,
                    email: e.target.value
                })
        }

    }
    const handleAddBtn = (e) => {
        e.preventDefault();
        if (contactData.name === "" || contactData.email === "") {
            alert("Äll fields are Required...")
            return
        }
        addContact(contactData)
        setContactData({ name:"" ,email:""})
    }

    return (
        <>
            <form action="">
                <fieldset>
                    <legend className='add-contact'> Add Contact </legend>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Enter name...'
                        name='name'
                        value={contactData.name}
                        onChange={handleChange} />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id='email'
                        placeholder='Enter Email...'
                        name='email'
                        value={contactData.email}
                        onChange={handleChange} />
                    <br />
                    <button onClick={handleAddBtn}>Add Contact</button>
                </fieldset>
            </form>
        </>
    )
}
