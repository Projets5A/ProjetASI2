import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap';
import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import contentMap from "../../source/contentMap.json";
import Slid from "../common/slid/containers/Slid"

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentMap: contentMapTmp,
    }
  }
  

  render() {
    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
          </div>
          <div className='col-md-6 col-lg-6 height-100 vertical-scroll'>
            <Slid
              txt="hello this is my first slid"
              title="hello world!"
              id={1}
              content_id={1}
              contentMap={this.state.contentMap}
              displayMode= "FULL_MNG"
            />
            <Slid
              txt="hello this is my first slid"
              title="hello world!"
              id={1}
              content_id={1}
              contentMap={this.state.contentMap}
              displayMode= "SHORT"
            />
          </div>
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <BrowseContentPanel
              datas={contentMap}
            />
          </div>
        </div>
      </div>
    );
  }
}
