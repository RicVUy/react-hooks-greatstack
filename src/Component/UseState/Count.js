import React, {useState} from 'react'

function Count() {
    const [count,setCount] = useState(0)
   const handleCount= (()=>{
     setCount(count=>count+4)
     setCount(count=>count+4)
     setCount(count=>count+4)


   })
    return (
        <>
        <div className='App-header1'>
          
<h1>{count}</h1>
<button onClick={handleCount}>increase</button>
</div>
</>
    )
}

export default Count
