import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap';
import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import contentMap from "../../source/contentMap.json";
import presJson from "../../source/pres.json";
import Slid from "../common/slid/containers/Slid";
import Presentation from "../common/presentation/containers/Presentation";
import { createStore } from 'redux'
import todoApp from '../../reducers/selectReducer'
import { Provider } from 'react-redux'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(todoApp)
    this.state = {
      contentMap: contentMapTmp,
    }
  }
  

  render() {
    return (
      <Provider store={this.store}>
        <div className='container-fluid height-100'>
          <div className="row height-100">
            <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
              <Presentation 
                title={presJson.title}
                description={presJson.description}
                id={presJson.id}
                slidArray={presJson.slidArray}
                contentMap={this.state.contentMap}/>
            </div>
            <div className='col-md-6 col-lg-6 height-100 vertical-scroll'>
              <Slid
                txt="hello this is my first slid"
                title="hello world!"
                id={1}
                content_id={1}
                contentMap={this.state.contentMap}
                displayMode="FULL_MNG"
              />
              <Slid
                txt="hello this is my first slid"
                title="hello world!"
                id={1}
                content_id={1}
                contentMap={this.state.contentMap}
                displayMode="SHORT"
              />
            </div>
            <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
              <BrowseContentPanel
                datas={contentMap}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
