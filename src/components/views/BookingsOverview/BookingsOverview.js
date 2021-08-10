import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { BookingsList } from "../../features/BookingsList/BookingsList";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./BookingsOverview.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Paper>
      <div className={styles.addNew}>
        <h3 className={styles.buttonDesc}>New booking</h3>
        <Button size="small" variant="contained" className={styles.button}>
          <Link to={"/bookings/add"} className={styles.link}>
            add
          </Link>
        </Button>
      </div>
    </Paper>
    <BookingsList fullList={true} />
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
  Component as BookingsOverview,
  // Container as Booking,
  Component as BookingsOverviewComponent,
};
