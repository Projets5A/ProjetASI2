import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//const json = require('./sources/robots.json');
//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
    }
    
  //render function use to update the virtual dom
  render() {
    
    return (
      <div className="container-fluid">
            Hello World!
      </div>
    );
  }
}

//export the current classes in order to be used outside
export default Main;