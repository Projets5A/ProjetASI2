import selectedReducer from '../reducers/selectReducer';
import updateModelReducer from '../reducers/updateModelReducer';

const globalReducer = (state={slid:{}, presentation: {}, content_map: {}}, action) => {
    return {
      selectSlid_reducer: selectedReducer(state.slid,action),
      changeModel_reducer: updateModelReducer({content_map: state.content_map, presentation: state.presentation}, action)
    }
  }
export default globalReducer;