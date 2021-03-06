import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./NewBooking.module.scss";
import { DatePicker } from "../../common/DatePicker/DatePicker";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>NewBooking</h2>
    <DatePicker />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NewBooking,
  // Container as NewBooking,
  Component as NewBookingComponent,
};
