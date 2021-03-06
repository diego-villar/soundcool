export const changeBlock = (id, field, value, optional) => dispatch => {
  dispatch({
    type: "CHANGE_BLOCK",
    id,
    field,
    value,
    ...optional
  });
};

export const connectOrDisconnectBlock = (
  node,
  value,
  inNode,
  optional
) => dispatch => {
  let [port] = value;
  // if there is such connection, disconnect
  if (inNode[port] && inNode[port].length > 0) {
    dispatch({
      type: "DISCONNECTING_BLOCK",
      node,
      value,
      ...optional
    });
  } else {
    dispatch({
      type: "CONNECTING_BLOCK",
      node,
      value,
      ...optional
    });
  }
};
