import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import AddContact from './components/AddContact.jsx'
import ContactList from './components/ContactList.jsx'
import uuid4 from "uuid4";


export default function App(props) {
  const localStorageKey = "contact"

  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))

      || []
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])
  const addContact = (data) => {
    // console.log(data, "from app.js")
    setContact([...contact,
    {
      id: uuid4(),
      data
    }])
  }

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id
    })
    setContact(updatedList)
  }
  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </>
  )
}
