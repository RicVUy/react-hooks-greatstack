import React, {useState} from 'react'

function HooksUseState() {
    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        year: "2023",
        color: "red"
    })

    const changeColor = () => {
        setCar((prev)=>{
            return {...prev, color: "blue"}
        })
    }
    return (
        <>
        <h2>Hooks UseState</h2>
        
        <h1> My {car.brand}</h1>
        <h2> It is a {car.color} {car.model} from {car.year} </h2>
        <button onClick={changeColor}>car</button>
        </>
    )
}

export default HooksUseState
