import React, { useCallback, useState } from 'react'
import Header from './Header'
function UseCallback() {

    const [count,setCount]=useState(0)

   // const newFn = ()=> {}
   const newFn = useCallback((count)=>{},[])
    return (
        <>
        <h2>UseCallback</h2>
        <h3>UseCallback hook lets you cache a function definition between rerenders.
            It means, when we use the useCallback hook, it doesn't create multiple 
            instance of same function when rerender happens.
            Instead of creating new instance of the function, it provides the 
            cached function on re-render of the component.
        </h3>

        <Header newFn={newFn}/>
           <button onClick={()=>(setCount(prev=>prev+1))}>Click here</button>
           <h2>Count is: {count}</h2>
        </>
    )
}

export default UseCallback
