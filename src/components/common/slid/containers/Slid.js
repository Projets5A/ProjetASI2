import React, { Component } from "react";
import EditMetaSlid from "../components/EditMetaSlid";
import Content from "../../content/containers/Content";
import { setSelectedSlid } from "../../../../actions";
import { connect } from "react-redux";
import { updateSlid } from "../../../../actions/index"

class Slid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      txt: this.props.txt,
      content_id: this.props.content_id,
      contentMap: this.props.content_map,
      displayMode: this.props.displayMode
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTxt = this.handleChangeTxt.bind(this);
    this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
    this.updatePresentation = this.updatePresentation.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeTxt(e) {
    this.setState({ txt: e.target.value });
  }

  updateSelectedSlid() {
    const tmpSlid = {
      id: this.props.id,
      title: this.props.title, 
      txt: this.props.txt, 
      content_id: this.props.content_id
    };
    this.props.dispatch(setSelectedSlid(tmpSlid));
  }

  updatePresentation(e) {
    const tmpSlid = {
      id: this.props.id,
      title: this.state.title, 
      txt: this.state.txt, 
      content_id: this.props.content_id
    };
    this.props.dispatch(updateSlid(tmpSlid));
  }
  componentWillReceiveProps() {
    this.setState({txt: this.props.txt, title: this.props.title, content_id: this.props.content_id});
  }
  render() {
    let content = <div></div>;
    for (let key in this.props.contentMap) {
      if (this.props.content_id === this.props.contentMap[key].id) {
        content = <Content
          src={this.props.contentMap[key].src}
          type={this.props.contentMap[key].type}
          onlyContent={true}
        />
      }
    }
    let slid;
    switch (this.props.displayMode) {
      case "FULL_MNG":
        slid = <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <div className="panel-body">
            <div>{this.state.txt}</div>
            {content}
            <EditMetaSlid
              title={this.state.title}
              txt={this.state.txt}
              handleChangeTxt={this.handleChangeTxt}
              handleChangeTitle={this.handleChangeTitle} />
          </div>
        </div>
        break;
      case "SHORT":
        slid = <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <div className="panel-body">
            <div>{this.state.txt}</div>
          </div>
          {content}
        </div>
        break;
      default: break;
    }
    return (
      <div onClick={this.updateSelectedSlid} onChange={this.updatePresentation}>
        {slid}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contentMap: state.updateModelReducer.content_map,
  }
}

export default connect(mapStateToProps)(Slid);
