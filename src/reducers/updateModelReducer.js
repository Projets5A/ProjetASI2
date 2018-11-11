
const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
  switch (action.type) {
    case 'UPDATE_PRESENTATION':
      const newPres = {presentation: action.obj, content_map: state.content_map};
      return newPres;
    case 'UPDATE_PRESENTATION_SLIDS':
      return; //TO DO
    case 'UPDATE_CONTENT_MAP':
      const newMap = {presentation: state.presentation, content_map: action.obj};
      return newMap;
    case 'ADD_CONTENT':
      return; //TO DO
    default:
      return state;
  }
}

export default updateModelReducer;

