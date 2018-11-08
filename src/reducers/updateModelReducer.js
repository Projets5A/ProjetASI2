const Tools = require("../services/Tools.js");

const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_PRESENTATION':
      return; //TO DO
    case 'UPDATE_PRESENTATION_SLIDS':
      return; //TO DO
    case 'UPDATE_CONTENT_MAP':
      return; //TO DO
    case 'ADD_CONTENT':
      return; //TO DO
    default:
      return state;
  }
}

export default updateModelReducer;