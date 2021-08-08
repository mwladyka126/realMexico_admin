import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { BookingsList } from "../../features/BookingsList/BookingsList";
import { OffersList } from "../../features/OffersList/OffersList";

import styles from "./Homepage.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.title}>Dashboard</h1>
    {children}
    <Grid container spacing={2} className={styles.tables}>
      <Grid item xs={12} sm={6} className={styles.tables_offers}>
        <OffersList />
        <div className={styles.buttons}>
          <Button size="medium" variant="contained" className={styles.button}>
            <Link to={"/offers"} className={styles.link}>
              {" "}
              all offers
            </Link>
          </Button>
          <Button size="medium" variant="contained" className={styles.button}>
            <Link to={"/offers/add"} className={styles.link}>
              {" "}
              new offer
            </Link>
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.tables_bookings}>
        {" "}
        <BookingsList />
        <div className={styles.buttons}>
          <Button size="medium" variant="contained" className={styles.button}>
            <Link to={"/bookings/"} className={styles.link}>
              All bookings
            </Link>
          </Button>
          <Button size="medium" variant="contained" className={styles.button}>
            <Link to={"/bookings/add"} className={styles.link}>
              {" "}
              new booking{" "}
            </Link>
          </Button>
        </div>
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Homepage, Component as HomepageComponent };
