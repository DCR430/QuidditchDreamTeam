import React from 'react'

function StudentCard({studentObj,clickHandler}){
  
  let studentClick = () =>{
        return clickHandler(studentObj.id)

    }
    console.log(studentObj)

    return(
    <>
      <h2>{studentObj.name}</h2>
      <img class = "img" src={studentObj.img} onClick={studentClick}/>
    </>  
    )
}

export default StudentCard