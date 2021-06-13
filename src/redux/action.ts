export const post = (data: any) => {
  return {
    type: "POST",
    payload: data,
  };
};

export const profile = (data: any) => {
  return {
    type: "PROFILE",
    payload: data,
  };
};

export const prevLinkPost = (link: string) => {
  return {
    type: "POST_URL",
    payload: link,
  };
};

export const prevLinkProfile = (link: string) => {
  return {
    type: "PROFILE_URL",
    payload: link,
  };
};

export const isModalOpen = (toggle: boolean) => {
  return {
    type: "ISMODALOPEN",
    payload: toggle,
  };
};
