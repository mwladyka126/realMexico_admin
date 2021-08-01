import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { OffersList } from "../../features/OffersList/OffersList";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./OffersOverview.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Paper>
      <div className={styles.addBooking}>
        <h4>New offer</h4>
        <Button size="small" variant="contained" className={styles.button}>
          <Link to={"/offers/add"} className={styles.link}>
            add
          </Link>
        </Button>
      </div>
    </Paper>
    <OffersList />
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
  Component as OffersOverview,
  // Container as Offer,
  Component as OffersOverviewComponent,
};
