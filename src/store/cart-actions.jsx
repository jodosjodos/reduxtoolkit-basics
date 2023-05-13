import axios from "axios";
import { cartActions } from "./cart-slice";
import { uiActions } from "./uiSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await axios.get("http://localhost:300/api/result");
      return res;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "error while receicving data data to backen",
          type: "error",
        })
      );
    }
  };
};
