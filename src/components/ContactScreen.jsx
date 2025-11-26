import React, { useEffect } from 'react'
import { ContactCard } from './ContactCard'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingContact } from '../action/contact'
import { NavBar } from './NavBar'


export const ContactScreen = () => {


  const { contact } = useSelector(state => state.cont)

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(startLoadingContact())


  }, [dispatch])

  return (
<div className='con__screen'>


    <NavBar/>


    

    <div className="con-cards-container">
      {contact.map((c) => (
        <ContactCard
          {...c}
          key={c.id}
        />
      ))}
    </div>

</div>



  )
}
