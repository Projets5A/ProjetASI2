import React, { Component } from 'react';
import '../../../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';


export default class Visual extends Component {

    render() {
        return (
            <div style={{height: 150, width:"100%"}} className='panel-body'>
                {this.props.render_visual}
            </div>
        )
    }
}