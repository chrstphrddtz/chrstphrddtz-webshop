import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          <Link className="nav-link" to="/contact">
            contact
          </Link>
          <Link className="nav-link" to="/auth">
            sign in
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
