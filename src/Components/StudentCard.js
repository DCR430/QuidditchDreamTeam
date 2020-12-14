import React from 'react'

function StudentCard({studentObj}){
  
    return(
        <>
      <p>{studentObj.name}</p>
      <img src={studentObj.img}/>
      </>  
    )
}

export default StudentCard