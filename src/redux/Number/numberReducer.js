import numberType from "./numberType";

const initialState = {
  DefaultNumber: 0,
};

function numberReducer(state = initialState, action) {
  switch (action.type) {
    case numberType.ADD_NUMBER:
      return {
        ...state,
        DefaultNumber: state.DefaultNumber + 1,
      };
    case numberType.DECRESS_NUMBER:
      return {
        ...state,
        DefaultNumber: state.DefaultNumber - 1,
      };
    default:
      return state;
  }
}
export default numberReducer;
