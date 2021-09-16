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
  deleteBookingRequest,
} from "../../../redux/bookingsRedux.js";
import { connect } from "react-redux";

import styles from "./SingleBooking.module.scss";

const Component = ({
  className,
  children,
  booking,
  fetchBooking,
  match,
  deleteBooking,
}) => {
  useEffect(() => {
    fetchBooking();
    console.log(booking);
  }, [match.params.bookingId]);
  const deleteBookingHandler = () => {
    deleteBooking();
    if (window.confirm("are you sure you ?")) {
      window.location = "/";
    }
  };
  return (
    <div className={clsx(className, styles.root)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2 className={styles.title}>Details for Booking {booking._id}</h2>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.contact}>
            <h3 className={styles.contact_title}>Contact</h3>
            <div className={styles.contact_element}>
              <p>
                <b>Surame: </b> {booking.lastName}
              </p>
              <p>
                <b> Name: </b>
                {booking.firstName}
              </p>
            </div>
            <div className={styles.contact_element}>
              <p>
                {" "}
                <b>Email: </b> {booking.email}
              </p>
              <p>
                <b> Phone: </b>
                {booking.phone}
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div>
              <p className={styles.value}>
                <b>TOTAL ORDER VALUE: </b> {booking.orderTotalValue} EUR
              </p>
            </div>
          </Paper>
        </Grid>

        {booking.trips.map((trip) => (
          <Grid item xs={12} sm={6}>
            <Paper className={styles.trip}>
              <h3 className={styles.trip_title}>Trip: {trip.title}</h3>
              <div className={styles.trip_element}>
                <p>
                  {" "}
                  <b>Persons: </b>
                  {trip.people}
                </p>
                <p>
                  {" "}
                  <b>Days: </b>
                  {trip.days}
                </p>
              </div>
              <div className={styles.trip_element}>
                <p>
                  {" "}
                  <b>Price: </b>
                  {trip.price} EUR
                </p>
                <p>
                  {" "}
                  <b>TOTAL: </b> {trip.totalPrice} EUR
                </p>
              </div>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} className={styles.buttons}>
          <Button
            size="medium"
            variant="contained"
            className={styles.button + " " + styles.delete}
            text="delete"
            onClick={deleteBookingHandler}
          >
            delete
          </Button>
          <Button size="medium" variant="contained" className={styles.button}>
            <Link to={`/bookings/${booking._id}/edit`} className={styles.link}>
              edit
            </Link>
          </Button>
        </Grid>
      </Grid>
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
  deleteBooking: () =>
    dispatch(deleteBookingRequest(props.match.params.bookingId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export { Container as SingleBooking, Component as SingleBookingComponent };
