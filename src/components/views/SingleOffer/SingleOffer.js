import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { getOne, fetchOneOfferFromAPI } from "../../../redux/offersRedux.js";
import { connect } from "react-redux";

import styles from "./SingleOffer.module.scss";

const Component = ({ className, children, offer, fetchOffer }) => (
  useEffect(() => {
    fetchOffer();
  }, []),
  (
    <div className={clsx(className, styles.root)}>
      <h2>SingleOffer</h2>
      <p>{offer.title} </p>
    </div>
  )
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offer: getOne(state),
});
const mapDispatchToProps = (dispatch, props) => ({
  fetchOffer: () => dispatch(fetchOneOfferFromAPI(props.match.params.offerId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as SingleOffer, Component as SingleOfferComponent };
