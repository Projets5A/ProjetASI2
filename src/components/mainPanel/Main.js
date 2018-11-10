import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap';
import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import contentMap from "../../source/contentMap.json";
import presJson from "../../source/pres.json";
import Presentation from "../common/presentation/containers/Presentation";
import { createStore } from 'redux';
import globalReducer from '../../reducers/globalReducer';
import { Provider } from 'react-redux';
import EditSlidPanel from '../editSlidPanel/containers/editSlidPanel';
import { updateContentMap, updatePresentation } from '../../actions';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(globalReducer);
    this.state = {
      contentMap: contentMapTmp,
    }
    this.store.dispatch(updatePresentation(presJson));
    this.store.dispatch(updateContentMap(contentMapTmp));
    
  }
  

  render() {
    return (
      <Provider store={this.store}>
        <div className='container-fluid height-100'>
          <div className="row height-100">
            <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
              <Presentation />
            </div>
            <div className='col-md-6 col-lg-6 height-100 vertical-scroll'>
              <EditSlidPanel
                selected_slid={""}
                contentMap={contentMap}
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
