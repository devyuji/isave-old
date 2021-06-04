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

// export const PREVLINKPOST = (state = "", action: any) => {
//   switch (action.type) {
//     case "PREVLINKPOST":
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };

// export const PREVLINKPROFILE = (state = "", action: any) => {
//   switch (action.type) {
//     case "PREVLINKPROFILE":
//       return (state = action.payload);
//     default:
//       return state;
//   }
// };

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
