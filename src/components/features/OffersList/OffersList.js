import React, { useEffect, useState } from "react";
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

const Component = ({ className, children, offers, fetchOffers }) => {
  const [offersOnPage, setOffersOnPage] = useState(offers);
  const [term, setTerm] = useState("");

  const showOnPage = (event) => {
    setOffersOnPage(offers.slice(0, event.target.value));
  };
  const searchOffers = (e) => {
    setTerm(e.currentTarget.value);
    const filteredOffers = offers.filter(
      (el) =>
        el.title.toUpperCase().indexOf(term.toUpperCase()) >= 0 ||
        el.region.toUpperCase().indexOf(term.toUpperCase()) >= 0
    );
    setOffersOnPage(filteredOffers);
  };
  useEffect(() => {
    fetchOffers();
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Offers</h2>
      <div className={styles.sortInputs}>
        <div className={styles.sortInputs_search}>
          <input
            onChange={searchOffers}
            className="form-control"
            type="text"
            placeholder="Search by region or title..."
          />
        </div>
        <div className={styles.sortInputs_show}>
          <label htmlFor="show">Show</label>
          <select onClick={showOnPage} id="show">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value={offers.length}>ALL</option>
          </select>
        </div>
      </div>
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
              {offersOnPage.map((offer) => (
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
  );
};

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
