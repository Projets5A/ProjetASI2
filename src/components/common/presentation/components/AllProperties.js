import React, { Component } from 'react';


export default class AllProperties extends Component {

    render() {
        return (
            <div style={{height: 150, width:"100%"}} className='panel panel-default'>
                {this.props.render_visual}
                id est {this.props.id}
                titre est {this.props.title}
            </div>
        )
    }
}