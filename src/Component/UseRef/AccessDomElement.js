import React, {useRef, useContext} from 'react'
import { AppContext } from '../Context/AppContext'

// useRef is also use to access and modify the DOM element
function AccessDomElement() {
    const inputElem =useRef()
    const phone = useContext(AppContext)
    const handleClick =()=>{
        inputElem.current.style.background = "blue"
    }
    return (
        <>
     <h2> UseRef is also use to access and modify the DOM element</h2>
        <h2>Access DOM Element</h2>
        <input type='text' ref={inputElem}/>
        <button onClick={handleClick}>Click here</button>
<p>Phone: {phone}</p>
        </>
    )
}

export default AccessDomElement
