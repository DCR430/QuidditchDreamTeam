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
            <form submit={(e)=>{
                    e.preventDefault()
                   this.props.onChange({[e.target.name]:e.target.value})

            }}>
                Name <input name="name"
                placeholder="student name" 
                value={this.state.name} 
                onChange={e => this.onChange(e)} />
            
                
                 Gif  <input name="gif" 
                placeholder="student Gif "
                value={this.state.gif} 
                onChange={e => this.onChange(e)} />
            
                <button onClick={e => this.submit(e) }>Add Student</button>
             </form>
        </div>
        )
    }
}

