import React, { Component } from 'react';


export default class AllProperties extends Component {

    render() {
        return (
            <div>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div style={{height: 150, width:"100%"}} className='panel-body'>
                    {this.props.render_visual}
                </div>
            </div>
        )
    }
}