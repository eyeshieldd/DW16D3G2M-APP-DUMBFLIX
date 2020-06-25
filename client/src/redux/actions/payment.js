import { API } from "../../config/api";
import moment from "moment";

import { PAYMENT_ERROR, PAYMENT_SUCCESS } from "./types";

export const FileUpload = (file, idUser, clearForm) => async (dispatch) => {
  try {
    const formData = new FormData();

    formData.append("startDate", moment());
    formData.append("dueDate", moment());
    formData.append("userId", idUser);
    formData.append("attache", file);
    formData.append("status", "Pending");

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await API.post("/transaction", formData, config);

    dispatch({
      type: PAYMENT_SUCCESS,
    });
    clearForm();
  } catch (e) {
    dispatch({
      type: PAYMENT_ERROR,
    });
  }
};
