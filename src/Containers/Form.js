import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
        <div>
            <h2>Add a Student</h2>
            <form>
                Name:<input type="text"/>
                Gif :<input type="text"/>
             </form>
        </div>
        )
    }
}

