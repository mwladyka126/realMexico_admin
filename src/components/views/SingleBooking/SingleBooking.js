import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import {
  getOne,
  fetchOneBookingFromAPI,
} from "../../../redux/bookingsRedux.js";
import { connect } from "react-redux";

import styles from "./SingleBooking.module.scss";

const Component = ({ className, children, booking, fetchBooking }) => (
  useEffect(() => {
    fetchBooking();
  }, []),
  (
    <div className={clsx(className, styles.root)}>
      <h2>SingleBooking</h2>
      <p>{booking.lastName} </p>
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
