import { PAYMENT_ERROR, PAYMENT_SUCCESS } from "../actions/types";

const initialState = {
  loading: true,
  filmsAll: [],
  error: "",
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
