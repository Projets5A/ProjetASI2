import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap';
import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import contentMap from "../../source/contentMap.json";
import Presentation from "../common/presentation/containers/Presentation";
import { createStore } from 'redux';
import globalReducer from '../../reducers/globalReducer';
import { Provider } from 'react-redux';
import EditSlidPanel from '../editSlidPanel/containers/editSlidPanel';
import { updateContentMap, updatePresentation } from '../../actions';
import Comm from "../../services/react_comm";

const store = createStore(globalReducer);

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMap: contentMapTmp,
    }
    this.communication = new Comm();
    this.communication.loadPres(undefined, 
      (presJson) => {
        store.dispatch(updatePresentation(presJson));
      },
      (error) => {console.log(error, "get presentation not working")})
    this.communication.loadContent( 
      (newContent) => {
        store.dispatch(updateContentMap(newContent));
      },
      (error) => {console.log(error, "get content map not working")})
  }

  render() {
    return (
      <Provider store={store}>
        <div className='container-fluid height-100'>
          <div className="row height-100">
            <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
              <Presentation 
                contentMap={undefined}
                presentation={undefined}
              />
            </div>
            <div className='col-md-6 col-lg-6 height-100'>
              <EditSlidPanel
                selected_slid={{}}
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
