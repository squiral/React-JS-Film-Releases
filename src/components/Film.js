import React, {Component} from 'react'

class Film extends Component {
    render(){
        return (
            <li className="film"><a href={this.props.url}>"{this.props.name}"</a></li>
            
        )
    }

}


export default Film