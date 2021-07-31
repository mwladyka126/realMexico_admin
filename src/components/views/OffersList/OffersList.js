import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { connect } from "react-redux";
import {
  fetchOffersFromAPI,
  getAllOffers,
} from "../../../redux/offersRedux.js";

import styles from "./OffersList.module.scss";

const Component = ({ className, children, offers, fetchOffers }) => (
  useEffect(() => {
    fetchOffers();
  }, []),
  (
    <div className={clsx(className, styles.root)}>
      <h2>Offers overview</h2>
      {children}
      <Grid container spacing={2} className={styles.tables}>
        <Grid item xs={12} className={styles.tables_bookings}>
          {" "}
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Region</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {offers.map((offer) => (
                  <TableRow key={offer._id}>
                    <TableCell component="th" scope="row">
                      {offer.title}
                    </TableCell>
                    <TableCell> {offer.title}</TableCell>
                    <TableCell>{offer.region}</TableCell>
                    <TableCell>
                      <Button
                        className={styles.booked}
                        component={Link}
                        to={`${process.env.PUBLIC_URL}/offers/${offer._id}`}
                      >
                        see details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <div className={styles.buttons}>
                  <Button>
                    <Link to={"/offers"}> all offers</Link>
                  </Button>
                  <Button>
                    <Link to={"/offers/add"}> new offer</Link>
                  </Button>
                </div>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: getAllOffers(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchOffers: () => dispatch(fetchOffersFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as OffersList, Component as HomepageComponent };
