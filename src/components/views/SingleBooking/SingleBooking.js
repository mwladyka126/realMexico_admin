import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import {
  getOne,
  fetchOneBookingFromAPI,
} from "../../../redux/bookingsRedux.js";
import { connect } from "react-redux";

import styles from "./SingleBooking.module.scss";

const Component = ({ className, children, booking, fetchBooking, match }) => {
  useEffect(() => {
    fetchBooking();
    console.log(booking);
  }, [match.params.bookingId]);
  return (
    <div className={clsx(className, styles.root)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h2 className={styles.title}>Details for Booking {booking._id}</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={styles.contact}>
            <h3 className={styles.contact_title}>Contact</h3>
            <div className={styles.contact_element}>
              <p>Surame: {booking.lastName}</p>
              <p> Name: {booking.firstName}</p>
            </div>
            <div className={styles.contact_element}>
              <p>Email: {booking.email}</p>
              <p>Phone: {booking.phone}</p>
            </div>
          </Paper>
        </Grid>

        {booking.trips.map((trip) => (
          <Grid item xs={12} sm={4}>
            <Paper className={styles.trip}>
              <h3 className={styles.trip_title}>Trip: {trip.title}</h3>
              <div className={styles.trip_element}>
                <p>Persons: {trip.people}</p>
                <p>Days: {trip.days}</p>
              </div>
              <div className={styles.trip_element}>
                <p>Price: {trip.price}</p>
                <p>TOTAL: {trip.totalPrice}</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper>
        <div>
          <p className={styles.value}>
            TOTAL ORDER VALUE: {booking.orderTotalValue} EUR
          </p>
        </div>
      </Paper>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  booking: getOne(state),
});
const mapDispatchToProps = (dispatch, props) => ({
  fetchBooking: () =>
    dispatch(fetchOneBookingFromAPI(props.match.params.bookingId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export { Container as SingleBooking, Component as SingleBookingComponent };
