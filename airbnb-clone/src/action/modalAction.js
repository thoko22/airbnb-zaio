import { OPEN_MODAL } from "../type/modalTypes";

export const openModal = (openClose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      content
    }
  };
};
