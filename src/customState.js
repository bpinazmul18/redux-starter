function CreateStore() {
  let state;
  function getState() {
    return state;
  }
  return {
    getState,
  };
}

export default CreateStore();
