import React, { Component } from "react";
import Slid from "../../common/slid/containers/Slid";
import { connect } from "react-redux";

class EditSlidePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_slid: this.props.selected_slid,
      contentMap: this.props.contentMap
    }
  }

  render() {
    let slid = <Slid
      id= {this.state.selected_slid.id}
      title= {this.state.selected_slid.title}
      content_id= {this.state.selected_slid.content_id}
      contentMap= {this.state.contentMap}
      displayMode= "FULL_MNG" />

    return(
      <div>{slid}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selected_slid: state.selectedReducer.slid,
  }
}

export default connect(mapStateToProps)(EditSlidePanel);