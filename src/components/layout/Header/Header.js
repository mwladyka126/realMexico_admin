import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./../../features/Menu/Menu";

import clsx from "clsx";

import styles from "./Header.module.scss";

const Component = ({ className, children }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src="/logo.png" alt="Logo" title="REALMexico" />
          </Link>
        </div>
        <Menu className={styles.bigScreen} />
        <div className={styles.hamburger}>
          <FontAwesomeIcon
            onClick={showMenu}
            className={styles.icon}
            icon={faBars}
          >
            x
          </FontAwesomeIcon>
        </div>
      </div>
      {menu ? <Menu className={styles.smallScreen} /> : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };
