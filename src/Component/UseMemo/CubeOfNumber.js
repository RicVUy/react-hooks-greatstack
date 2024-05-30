import React, { useMemo, useState } from 'react'

function CubeOfNumber() {
    const [number, setNnumber] = useState(0)
    const [counter, setCounter]= useState(0)

    function cubeNum(num) {
        console.log('Calculation done!')
        return Math.pow(num,3)
        
    }
    //const result = cubeNum(number)
    const result = useMemo(()=> cubeNum(number),[number])
    return (<>
    <div className='App-header1'>
    <h2>useMemo hook only runs when one of its dependencies get updated;
        it returns a memoized value.
    </h2>
       <input type='number' value={number} onChange={(e)=>{setNnumber(e.target.value)}}/>
       <h1>Cube of the number is {result}</h1>
       <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
       <h2>Count is {counter}</h2>
       </div>
    </>
        
    )
}

export default CubeOfNumber
