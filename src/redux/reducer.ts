export const POST_DATA = (state = {}, action: any) => {
  switch (action.type) {
    case "POST":
      return (state = action.payload);
    default:
      return state;
  }
};

export const PROFILE_DATA = (state = {}, action: any) => {
  switch (action.type) {
    case "PROFILE":
      return (state = action.payload);
    default:
      return state;
  }
};

export const PREVLINK = (state = { post: "", profile: "" }, action: any) => {
  switch (action.type) {
    case "POST_URL":
      state.post = action.payload;
      return state;
    case "PROFILE_URL":
      state.profile = action.payload;
      return state;
    default:
      return state;
  }
};

export const ISMODALOPEN = (state = false, action: any) => {
  switch (action.type) {
    case "ISMODALOPEN":
      return (state = action.payload);
    default:
      return state;
  }
};
