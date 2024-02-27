import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={reactLogo} className="logo" alt="Vite logo" />
        PRODUCTS
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          {isAuthenticated ? <Profile /> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
}
