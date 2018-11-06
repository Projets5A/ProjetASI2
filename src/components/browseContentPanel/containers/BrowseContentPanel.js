import React, { Component } from 'react';
import ContentView from '../../common/content/containers/Content';

export default class BrowseContentPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: props.datas,
      contentsToRender: []
    }
  }

  render() {
    for(let key in this.state.datas) {
      const content = <ContentView 
        key= {this.state.datas[key].id}
        id= {this.state.datas[key].id}
        src = {this.state.datas[key].src}
        type = {this.state.datas[key].type}
        title = {this.state.datas[key].title}
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
