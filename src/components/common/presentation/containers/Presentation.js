import React, { Component } from "react";
import Slide from "../../slid/containers/Slid";
import EditMetaSlid from "../../slid/components/EditMetaSlid";
import { connect } from "react-redux";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.presentation.id,
      title: this.props.presentation.title,
      txt: this.props.presentation.description,
      slidArray: this.props.presentation.slidArray,
      contentMap: this.props.contentMap
    }
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeDescription(e) {
    this.setState({txt: e.target.value})
  } 

  handleChangeTitle(e) {
    this.setState({title: e.target.value})
  } 

  render() {
    console.log(this.props.presentation);
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
          <div>{this.state.txt}</div>
        </div>
        <div className="panel-body">
          <EditMetaSlid 
            title = {this.state.title}
            txt = {this.state.txt}
            handleChangeTxt = {this.handleChangeDescription}
            handleChangeTitle = {this.handleChangeTitle}/>
            {slides}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contentMap: state.updateModelReducer.content_map,
    presentation: state.updateModelReducer.presentation
  }
}

export default connect(mapStateToProps)(Presentation);