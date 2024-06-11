import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import HeaderButton from "./HeaderButton";
import PropTypes from "prop-types";

function Navigation({ logout, name }) {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archive" className="link">Arsip</Link>
          </li>
        </ul>
      </nav>
      <HeaderButton />
      <button onClick={logout} className="button-logout">
        {name}
        <BsBoxArrowRight size={20} />
      </button>
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
