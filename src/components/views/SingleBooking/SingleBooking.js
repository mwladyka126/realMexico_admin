import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import {
  getOne,
  fetchOneBookingFromAPI,
} from "../../../redux/bookingsRedux.js";
import { connect } from "react-redux";

import styles from "./SingleBooking.module.scss";

const Component = ({ className, children, booking, fetchBooking, match }) => (
  useEffect(() => {
    fetchBooking();
    console.log(booking);
  }, [match.params.bookingId]),
  (
    <div className={clsx(className, styles.root)}>
      <h2>Booking details</h2>
      <p>{booking.lastName}</p>
      <p>{booking.firstName}</p>
      <p>{booking.email}</p>
      <p>{booking.phone}</p>
      <p>
        {booking.trips.map((trip) => (
          <>
            <p>{trip.title}</p>
            <p>{trip.people}</p>
            <p>{trip.days}</p>
            <p>{trip.price}</p>
            <p>{trip.totalPrice}</p>
          </>
        ))}
      </p>
    </div>
  )
);

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
