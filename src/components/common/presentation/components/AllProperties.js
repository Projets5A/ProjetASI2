import React, { Component } from 'react';


export default class AllProperties extends Component {

    render() {
        return (
            <div className='panel panel-default'>
                <img src={this.props.src} ></img>
                id est {this.props.id}
                titre est {this.props.title}
            </div>
        )

    }
}