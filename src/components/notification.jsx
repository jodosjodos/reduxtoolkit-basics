import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

const Notification = ({ type, message }) => {
  const notificationd = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>{notificationd.open && <h1 onClick={handleClose}>{message}</h1>}</div>
  );
};

export default Notification;
