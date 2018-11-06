import React, { Component } from 'react';


export default class AllProperties extends Component {

    render() {
        return (
            <div style={{height: 150, width:"100%"}} className='panel-body'>
                {this.props.render_visual}
                <div>
                    id est {this.props.id}
                    titre est {this.props.title}
                </div>
            </div>
        )
    }
}