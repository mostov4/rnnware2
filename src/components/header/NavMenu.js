import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useSelector } from 'react-redux';

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const state = useSelector(state => state)

  return (state && (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com")) ? (
    <div
      className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
            {window.location.pathname === "/" ? <span className="clrChange">{strings["home"]}</span> : <span >{strings["home"]}</span>}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/dine"}>
              {" "}
              {window.location.pathname === "/dine" ? <span className="clrChange">{strings["Dine"]}</span> : <span >{strings["Dine"]}</span>}

            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/storage"}>
            {window.location.pathname === "/storage" ? <span className="clrChange">{strings["Storage"]}</span> : <span >{strings["Storage"]}</span>}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/utensils"}>
            {window.location.pathname === "/utensils" ? <span className="clrChange">{strings["Utensils"]}</span> : <span >{strings["Utensils"]}</span>}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/serve"}>
            {window.location.pathname === "/serve" ? <span className="clrChange">{strings["Serve"]}</span> : <span >{strings["Serve"]}</span>}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/foryou"}>
            {window.location.pathname === "/foryou" ? <span className="clrChange">{strings["foryou"]}</span> : <span >{strings["foryou"]}</span>}
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  ) :

    <div
      className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>

            <Link to={process.env.PUBLIC_URL + "/retailerproductlist"}>
            {window.location.pathname === "/crm" ? <span className="clrChange">{strings["crm"]}</span> : <span >{strings["crm"]}</span>}

            </Link>

          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/foryou"}>
            {window.location.pathname === "/foryou" ? <span className="clrChange">{strings["foryou"]}</span> : <span >{strings["foryou"]}</span>}
            </Link>
          </li>

        </ul>
      </nav>

    </div>

};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
