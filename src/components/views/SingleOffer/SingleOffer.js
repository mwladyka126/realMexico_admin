import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import clsx from "clsx";

import {
    getOne,
    fetchOneOfferFromAPI,
  deleteOfferRequest,
} from "../../../redux/offersRedux.js";
import { connect } from "react-redux";

import styles from "./SingleOffer.module.scss";

const Component = ({ className, children, offer, fetchOffer, deleteOffer }) => {
  useEffect(() => {
    fetchOffer();
  }, []);
  const deleteOfferHandler = () => {
    deleteOffer();
    if (window.confirm("are you sure you ?")) {
      window.location = "/";
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className={styles.text}>
            <div className={styles.text_element}>
              <h1 className={styles.title}>{offer.title}</h1>
              <p className={styles.title}>
                Price per person per day: {offer.price} EUR
              </p>
              <p>{offer.description}</p>
            </div>
            <div className={styles.text_element}>
              <h3 className={styles.title}>Highlights</h3>
              <p>{offer.description}</p>
            </div>
            <div className={styles.text_element}>
              <h3 className={styles.title}>Region: {offer.region}</h3>
              <p>{offer.description}</p>
            </div>
            <div className={styles.buttons}>
              <Button
                size="medium"
                variant="contained"
                className={styles.button}
                text="delete"
                onClick={deleteOfferHandler}
              >
                delete
              </Button>
              <Button
                size="medium"
                variant="contained"
                className={styles.button}
              >
                <Link to={`/offers/${offer._id}/edit`} className={styles.link}>
                  edit
                </Link>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={styles.photos}>
            <div className={styles.photoWrapper}>
              <img src={offer.image[0]} alt={offer.title} />
            </div>
            <div className={styles.photoWrapper}>
              <img src={offer.image[1]} alt={offer.title} />
            </div>
            <div className={styles.photoWrapper}>
              <img src={offer.image[2]} alt={offer.title} />
            </div>
          </Paper>
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
  offer: getOne(state),
});
const mapDispatchToProps = (dispatch, props) => ({
  fetchOffer: () => dispatch(fetchOneOfferFromAPI(props.match.params.offerId)),
  deleteOffer: () => dispatch(deleteOfferRequest(props.match.params.offerId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as SingleOffer, Component as SingleOfferComponent };
