export const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  return next(action);
};
