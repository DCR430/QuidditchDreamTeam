import React, { Component } from 'react'

export default class Form extends Component {
    state={
        name:" ",
        gif:" "
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submit=(e)=>{
        e.preventDefault()
        console.log("FORM",this.state)

    }
    
    render() {
        return (
        <div>
            <h2>Add a Student</h2>
            <form>
                Name <input name="name"
                placeholder="student name" 
                value={this.state.name} 
                onChange={e => this.onChange(e)} />
                <br></br>
                
                 Gif  <input name="gif" 
                placeholder="student Gif "
                value={this.state.gif} 
                onChange={e => this.onChange(e)} />
                <br></br>
                <button onClick={e => this.submit(e) }>Add Student</button>
             </form>
        </div>
        )
    }
}

