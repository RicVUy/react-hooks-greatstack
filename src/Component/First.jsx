import React from 'react'
import Second from './Second'
function First() {
    return (
        <>
        <div  className='App-header1'>
            <h2>UseContext is use to tranfer data from one component to another without doing props drilling</h2>
       <p>First</p> 
       <Second/>
       </div>
       </>
    )
}

export default First
