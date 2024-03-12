import { useState } from "react"


export default function Counter(){

    const [count, setCount]=useState(0);

    const clickMe=()=>{
        const newCount=count+1;
        setCount(newCount)
    }

    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount)
    }

    return(
        <div style={
            {
                border:'2px solid red',
                margin:'20px',
                padding:'20px'
            }
        }>
            <h3>Counter:{count} </h3>
                <button onClick={clickMe}>Click me</button>
                <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}