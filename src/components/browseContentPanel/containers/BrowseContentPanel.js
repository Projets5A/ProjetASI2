import React, { Component } from 'react';
import ContentView from '../../common/content/containers/Content';
import { connect } from "react-redux";

class BrowseContentPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: props.datas,
      contentsToRender: []
    }
  }

  render() {
    for(let key in this.props.datas) {
      const content = <ContentView 
        key= {this.props.datas[key].id}
        id= {this.props.datas[key].id}
        src = {this.props.datas[key].src}
        type = {this.props.datas[key].type}
        title = {this.props.datas[key].title}
        onlyContent = {false}
      />
      this.state.contentsToRender.push(content)
    }
    return(
      <div>
        {this.state.contentsToRender}
      </div>
    )
  }


}

const mapStateToProps = (state, ownProps) => {
  return {
    datas: state.updateModelReducer.content_map,
  }
}


export default connect(mapStateToProps)(BrowseContentPanel);
