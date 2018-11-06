import React, { Component } from "react";
import Slide from "../../slid/containers/Slid";
import EditMetaSlid from "../../slid/components/EditMetaSlid";

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      slidArray: this.props.slidArray,
      contentMap: this.props.contentMap
    }
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeDescription(e) {
    this.setState({description: e.target.value})
  } 

  handleChangeTitle(e) {
    this.setState({title: e.target.value})
  } 

  render() {
    let slides = [];
    for(let i= 0; i<this.state.slidArray.length; i++) {
      slides.push(<Slide 
        key={this.state.slidArray[i].id}
        id= {this.state.slidArray[i].id}
        title= {this.state.slidArray[i].title}
        txt= {this.state.slidArray[i].txt}
        content_id= {this.state.slidArray[i].content_id}
        contentMap={this.state.contentMap} 
        displayMode= "SHORT"
      />);
    }
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.title}</h3>
          <div>{this.state.description}</div>
        </div>
        <div className="panel-body">
          <EditMetaSlid 
            title = {this.state.title}
            txt = {this.state.description}
            handleChangeTxt = {this.handleChangeDescription}
            handleChangeTitle = {this.handleChangeTitle}/>
            {slides}
        </div>
      </div>
    )
  }
}
