
const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
  switch (action.type) {
    case 'UPDATE_PRESENTATION':
      const newPres = {presentation: action.obj, content_map: state.content_map};
      return newPres;
    case 'UPDATE_PRESENTATION_SLIDS':
      console.log(action.obj);
      const newPresentation = JSON.parse(JSON.stringify(state.presentation));
      for(let i=0; i<newPresentation.slidArray.length;i++){
          if(newPresentation.slidArray[i].id === action.obj.id){
              newPresentation.slidArray[i] = action.obj;
          }
      }
      const newState3 = {presentation: newPresentation, content_map: state.content_map };
      return newState3;
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

