
import Header from "./header";
import Products from "./products";
import { Fragment } from "react";
import "./Layout.css";
import {CartItems} from "./cartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const itemsList=useSelector(state=>state.cart.itemsList)
  let total  ;
  console.log(itemsList);
  if(itemsList.length>0){
    
    itemsList.forEach(item => {
      total += item.totalPrice
    });
  }
  console.log(total);
  const showCart=useSelector(state=>state.cart.showCart)
  return (
    <Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart&&<CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </Fragment>
  );
};

export default Layout;
