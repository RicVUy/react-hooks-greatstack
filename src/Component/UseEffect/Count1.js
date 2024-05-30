import React, { useState,useEffect } from 'react'

function Count1() {
   // UseEffect(cb,[])
   const [count, setCount] = useState(0)
   
   useEffect(() =>{
    setTimeout(()=>{
        setCount(count=>count+1)
       
    },2000)
    //})  -- count is continous
    // here counted only once because of the empty bracket
   },[count])
    return (
        <>
        <h1>{count}</h1>
        </>
    )
}

export default Count1
