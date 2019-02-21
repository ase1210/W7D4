export const thunk = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
}

// how does this thunk function have access to the store??