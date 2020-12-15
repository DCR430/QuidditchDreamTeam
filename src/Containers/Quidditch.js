import React from 'react'
import StudentCard from '../Components/StudentCard'

function Quidditch(props){
     let quidditchTeam = props.quidditchTeam.map(studentObj => <StudentCard key={studentObj.id} studentObj={studentObj} removeHandler={props.removeHandler}/>)
    console.log("QPROPS",props.clickHandler)
    return(
        <>
        <h1 class = "allstar">Quidditch All Stars</h1>
        {quidditchTeam}
        </>
        
        
    )
}

export default Quidditch