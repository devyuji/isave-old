export const download = (link: string) => {
  window.location.href = `${link}&dl=1`;
};
