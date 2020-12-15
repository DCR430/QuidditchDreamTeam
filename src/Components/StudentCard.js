import React from 'react'

function StudentCard({studentObj,clickHandler}){
  
  let studentClick = () =>{
        return clickHandler(studentObj.id)

    }
    console.log(studentObj)

    return(
    <div class = "student">
      <h2>{studentObj.name}</h2>
      <img class = "img" src={studentObj.img} onClick={studentClick}/>
    </div>  
    )
}

export default StudentCard