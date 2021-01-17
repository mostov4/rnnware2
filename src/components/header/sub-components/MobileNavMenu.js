import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>
          {window.location.pathname === "/" ? <span className="clrChange">{strings["home"]}</span> : <span >{strings["home"]}</span>}
            </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/dine"}>
          {window.location.pathname === "/dine" ? <span className="clrChange">{strings["Dine"]}</span> : <span >{strings["Dine"]}</span>}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/storage"}>
          {window.location.pathname === "/storage" ? <span className="clrChange">{strings["Storage"]}</span> : <span >{strings["Storage"]}</span>}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/utensils"}>
          {window.location.pathname === "/utensils" ? <span className="clrChange">{strings["Utensils"]}</span> : <span >{strings["Utensils"]}</span>}
          </Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/serve"}>
          {window.location.pathname === "/serve" ? <span className="clrChange">{strings["Serve"]}</span> : <span >{strings["Serve"]}</span>}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "#"} disabled>{strings["pages"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
              {window.location.pathname === "/cart" ? <span className="clrChange">{strings["cart"]}</span> : <span >{strings["cart"]}</span>}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
              {window.location.pathname === "/checkout" ? <span className="clrChange">{strings["checkout"]}</span> : <span >{strings["checkout"]}</span>}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
              {window.location.pathname === "/wishlist" ? <span className="clrChange">{strings["wishlist"]}</span> : <span >{strings["wishlist"]}</span>}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {window.location.pathname === "/login-register" ? <span className="clrChange">{strings["login_register"]}</span> : <span >{strings["login_register"]}</span>}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
              {window.location.pathname === "/about" ? <span className="clrChange">{strings["about_us"]}</span> : <span >{strings["about_us"]}</span>}

              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
              {window.location.pathname === "/contact" ? <span className="clrChange">{strings["contact_us"]}</span> : <span >{strings["contact_us"]}</span>}
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/foryou"}>
          {window.location.pathname === "/foryou" ? <span className="clrChange">{strings["foryou"]}</span> : <span >{strings["foryou"]}</span>}
          </Link>

        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
