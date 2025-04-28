import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.cart.cartItem);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeIcon = theme === "light" ? "☀️" : "🌙";

  return (
    <div className="Header-Container">
      <div>
        <img
          id="logo-image"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contactus">Contact US</Link></li>
          <li><Link to="/cartpage">Cart - {items.length}</Link></li>
          <li>
            <button onClick={toggleTheme} className="theme-icon">
              {themeIcon}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
