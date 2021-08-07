import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import styles from "./Menu.module.scss";

const Component = ({ className, children }) => (
  <ul className={clsx(className, styles.navList)}>
    <li>
      {" "}
      <NavLink
        exact
        to={"/offers/"}
        className={styles.link}
        activeClassName={styles.active}
      >
        OFFERS
      </NavLink>
    </li>
    <li>
      {" "}
      <NavLink
        exact
        to={"/bookings/"}
        className={styles.link}
        activeClassName={styles.active}
      >
        BOOKINGS
      </NavLink>
    </li>
    <li>
      {" "}
      <NavLink
        exact
        to={"/offers/add"}
        className={styles.link}
        activeClassName={styles.active}
      >
        NEW OFFER
      </NavLink>
    </li>
    <li>
      {" "}
      <NavLink
        exact
        to={"/bookings/add"}
        className={styles.link}
        activeClassName={styles.active}
      >
        NEW BOOKING
      </NavLink>
    </li>
  </ul>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Menu, Component as MenuComponent };
