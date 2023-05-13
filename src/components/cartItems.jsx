import CartItem from "./cartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
export const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        { cartItems.length !=0 && cartItems.map((item) => {
          return (
            <li key={item.id}>
              {
                <CartItem
                quantity={item.quantity}
                  id={item.id}
                  price={item.price}
                  total={item.totalPrice}
                  name={item.name}
                />
              }
            </li>
          );
        })} 
        
      </ul>
    </div>
  );
};


