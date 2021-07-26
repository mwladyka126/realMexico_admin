import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import clsx from "clsx";
import styles from "./Menu.module.scss";

const Component = ({ className, children }) => (
  <ul className={clsx(className, styles.navList)}>
    <li>
      {" "}
      <Link to={"/offers/"} className={styles.link}>
        OFFERS
      </Link>
    </li>
    <li>
      {" "}
      <Link to={"/bookings/"} className={styles.link}>
        BOOKINGS
      </Link>
    </li>
    <li>
      {" "}
      <Link to={"/offers/add"} className={styles.link}>
        NEW OFFER
      </Link>
    </li>
    <li>
      {" "}
      <Link to={"/bookings/add"} className={styles.link}>
        NEW BOOKING
      </Link>
    </li>
  </ul>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Menu, Component as MenuComponent };
