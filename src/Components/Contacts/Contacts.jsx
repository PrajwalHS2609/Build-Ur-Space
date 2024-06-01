import React from 'react'
import ContactsHead from './ContactsHead'
import ContactsMain from './ContactsMain'
import "./Contacts.css"
import WhereToFind from './WhereToFind/WhereToFind'
const Contacts = () => {
  return (
    <div className='contactContainer'>
      <ContactsHead/>
      <ContactsMain/>
      <WhereToFind/>
    </div>
  )
}

export default Contacts
