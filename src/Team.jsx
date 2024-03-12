import { useState } from "react"

export default function Team(){

    const[team, setTeam]=useState(11);

    const teamStyle={
        border:'2px solid gray',
        padding:'20px'
    }

    const teamHandleAdd=()=>{
        const newTeam= team+1;
        setTeam(newTeam)
    }

    const teamHandleRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam)
    }
    return(
        <div style={teamStyle}>
            <h3>player:{team} </h3>
            <button onClick={teamHandleAdd}>Add player</button>
            <button onClick={teamHandleRemove}> Remove player</button>
        </div>
    )
}