export const imageModal = (state = false, action) => {
  switch (action.type) {
    case "HIDE_MODAL":
      return false;

    case "SHOW_MODAL":
      return true;

    default:
      return state;
  }
};
