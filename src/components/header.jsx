import { useDispatch } from "react-redux";
import Cart from "./cart";
import "./Header.css";
import { authActions } from "../store/authSlice";
const Header = () => {
const dispatch=useDispatch()
  const logoutHandler=()=>{
   dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
            <button className="logout-btn" onClick={logoutHandler}>logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
