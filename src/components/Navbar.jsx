import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={reactLogo} className="logo" alt="Vite logo" />
        PRODUCTS
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
