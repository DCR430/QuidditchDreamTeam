import React from 'react'
import StudentCard from '../Components/StudentCard'

function Quidditch(props){
     let quidditchTeam = props.quidditchTeam.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj}/>)
    console.log("QPROPS",props.quidditchTeam.name)
    return(
        <>
        <h1>Quidditch All Stars</h1>
        {quidditchTeam}
        </>
        
        
    )
}

export default Quidditch