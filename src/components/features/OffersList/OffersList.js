import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
      <h2 className={styles.title}>Offers</h2>
      <Paper>
        <TableContainer className={styles.scrollWrapper}>
          <Table className={styles.table}>
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
                  <TableCell> {offer.region}</TableCell>
                  <TableCell>{offer.price}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      className={styles.button}
                    >
                      <Link to={`/offers/${offer._id}`} className={styles.link}>
                        details
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
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

export { Container as OffersList, Component as OffersListComponent };
