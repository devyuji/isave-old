export const DATA = (state = {}, action: any) => {
  switch (action.type) {
    case "POST":
      return (state = action.payload);
    default:
      return state;
  }
};
