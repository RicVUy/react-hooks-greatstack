import React, { useContext } from 'react'
import { AppContext } from './Context/AppContext'
function Third() {

    const phone = useContext(AppContext)
    return (
        <>
       <p>Third</p> 
       <h3>Phone: {phone}</h3>
       
       </>
    )
}

export default Third
