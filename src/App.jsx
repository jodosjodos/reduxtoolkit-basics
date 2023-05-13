import { useEffect } from "react";
import "./App.css";
import Auth from "./components/auth";
import Layout from "./components/layout";
import { useDispatch, useSelector } from "react-redux";
import  Axios from "axios";
import Notification from "./components/notification";
import { uiActions } from "./store/uiSlice";
import { fetchData } from "./store/cart-actions";
// import { sendCartData } from "./store/cart-slice";
let isFirstRender=true
function App() {
  
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
   const notificationn=useSelector(state=>state.ui.notification)
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  const handleSubmission=async()=>{
    try {

      dispatch(uiActions.showNotification({
        open:true,
        message:'sending request',
        type:"warning"
      }))
      const data=await Axios.put("http://localhost:300/api/result",[cart])
      if(data){
        dispatch(uiActions.showNotification({
          open:true,
          message:'succeffyl request',
          type:"success"
        }))
      }
   return data

    } catch (err) {
      console.log(err);
      dispatch(uiActions.showNotification({
        open:true,
        message:'error while sending data to backen',
        type:"error"
      }))

    }
   
  }
 useEffect(()=>{
  if(isFirstRender){
    isFirstRender==false
    return
  }
 handleSubmission()
 },[cart])


//  second way  using thunks defined in  where u have defined store 

useEffect(()=>{
  dispatch(fetchData(cart)) 
},[dispatch])


//  useEffect(()=>{
//   if(isFirstRender){
//     isFirstRender=true,
//     return;
//   }
//   if(cart.changed){
//       dispatch( sendCartData(cart))

//   }
//  },[cart,dispatch])


  return (
    <div className="App">
   { notificationn &&  <Notification message={notificationn.message} type={notificationn.type} />}
       {!isLoggedIn  && <Auth />}
     {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
