import React, {Component} from 'react';
import Visual from '../components/Visual.js';
import Properties from '../components/AllProperties.js';


export default class Content extends Component {

    render(){
        let render_visual;
        switch(this.props.type){
            case "video":
                render_visual=(
                    <object  width="100%" height="90%"
                        data={this.props.src}>
                    </object>
                );
            break;
            case "web":
                render_visual=(
                    <iframe  width="100%" height="90%"
                        src={this.props.src}>
                    </iframe>
                );
            break;
            default:
                render_visual=(
                    <img width="100%" height="90%"
                        className='imgCard' 
                        src={this.props.src}  
                    />
                );
            break;
        }
        return(
            this.props.onlyContent ? 
                <Visual className="panel panel-default"
                    render_visual={render_visual}
                />
                : <Properties
                    className="panel panel-default"
                    title={this.props.title}
                    id={this.props.id}
                    type={this.props.type}
                    render_visual={render_visual}
                />
        );
    }



}