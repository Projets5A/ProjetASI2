import React, { Component } from "react";
import Slide from "../../slid/containers/Slid";
import EditMetaSlid from "../../slid/components/EditMetaSlid";
import { connect } from "react-redux";

class Presentation extends Component {
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
    if(this.props.presentation) {
      for(let i= 0; i<this.props.presentation.slidArray.length; i++) {
        slides.push(<Slide 
          key={this.props.presentation.slidArray[i].id}
          id= {this.props.presentation.slidArray[i].id}
          title= {this.props.presentation.slidArray[i].title}
          txt= {this.props.presentation.slidArray[i].txt}
          content_id= {this.props.presentation.slidArray[i].content_id}
          contentMap={this.props.contentMap} 
          displayMode= "SHORT"
        />);
      }
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

const mapStateToProps = (state, ownProps) => {
  console.log(state.changeModel_reducer.content_map, state.changeModel_reducer.presentation, "presentation");
  console.log("incrementation")
  if(state.changeModel_reducer.content_map && state.changeModel_reducer.presentation) {
    return {
      contentMap: state.changeModel_reducer.content_map,
      presentation: state.changeModel_reducer.presentation
    }
  }
  if(state.changeModel_reducer.content_map) {
    return {
      contentMap: state.changeModel_reducer.content_map,
    }
  }
  if(state.changeModel_reducer.presentation) {
    return {
      presentation: state.changeModel_reducer.presentation
    }
  }
}

export default connect(mapStateToProps)(Presentation);