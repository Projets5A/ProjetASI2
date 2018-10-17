import React, {Component} from 'react';
import Visual from '../../presentation/components/Visual.js';
import Properties from '../../presentation/components/AllProperties.js';


export default class Content extends Component {

    constructor( props){
        super(props);
        this.state = {
            id : this.props.id,
            src : this.props.src,
            type : this.props.type,
            title : this.props.title,
            onlyContent : this.props.onlyContent,    
        };
    }
    

    render(){
        return(
            this.state.onlyContent ? 
                <Visual src={this.state.src}/>
                : <Properties 
                    src={this.state.src}
                    title={this.state.title}
                    id={this.state.id}
                />

        );
    }



}