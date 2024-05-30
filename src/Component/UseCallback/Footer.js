import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Footer() {
    const phone = useContext(AppContext)
    return (
        <>
       <h2>Footer</h2> 
       <p>Phone:{phone}</p>

       </>
    )
}

export default Footer
