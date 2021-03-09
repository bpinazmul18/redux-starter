import reducer from "./reducer";

function CreateStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
  }

  return {
    dispatch,
    getState,
  };
}

export default CreateStore(reducer);
