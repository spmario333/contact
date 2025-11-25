import React from 'react'
import { ContactScreen } from './components/ContactScreen'
import { Provider } from 'react-redux';
import { store } from './store/store';



export const Contact = () => {
  return (
    <>
    
    <Provider store={store}>

        <ContactScreen/>


    </Provider>
    
    </>
  )
}
