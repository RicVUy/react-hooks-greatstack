import React, { useEffect, useRef, useState } from 'react'

function ChangeValue() {
    const [value, setValue] = useState(0)
    //const [count, setCount] = useState(0)
const count = useRef(0)
    useEffect(()=>{
        count.current = count.current+1
    })
    return (
        <>
        
        <div className='App-header2'>
        <h3> useRef is use instead of useState if we do not want to rerender the component</h3>
        <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
        <h2>Render: {count.current}</h2>
        </div>
        </>
        
    )
}

export default ChangeValue
