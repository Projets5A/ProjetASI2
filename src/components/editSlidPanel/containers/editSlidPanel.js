import React, { Component } from "react";
import Slid from "../../common/slid/containers/Slid";
import { connect } from "react-redux";

class EditSlidPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_slid: this.props.selected_slid,
      contentMap: this.props.contentMap
    }
  }

  render() {
    const slid = <Slid
    id= {this.props.selected_slid.id}
    title= {this.props.selected_slid.title}
    txt= {this.props.selected_slid.txt}
    content_id= {this.props.selected_slid.content_id}
    contentMap= {this.props.contentMap}
    displayMode= "FULL_MNG" />
    
    return(
      <div>{slid}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if(state.changeModel_reducer.content_map) {
    return {
      selected_slid: state.selectSlid_reducer.slid,
      contentMap: state.changeModel_reducer.content_map,
    }
  } else {
    return {
      selected_slid: state.selectSlid_reducer.slid,
    }
  }
}

export default connect(mapStateToProps)(EditSlidPanel);