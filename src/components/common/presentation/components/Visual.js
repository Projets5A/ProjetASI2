import React, { Component } from 'react';
import '../../../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


export default class Visual extends Component {

    render() {
        return (
            <div className='panel panel-default'>
                <img src={this.props.src} ></img>
            </div>
        )

    }
}