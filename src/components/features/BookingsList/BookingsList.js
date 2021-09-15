import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

import { connect } from "react-redux";
import styles from "./BookingsList.module.scss";
import {
  getAllBookings,
  fetchBookingsFromAPI,
} from "../../../redux/bookingsRedux.js";

const Component = ({ className, bookings, fetchBookings, fullList }) => {
  const [bookingsOnPage, setBookingOnPage] = useState(bookings.slice(0, 10));
  const [term, setTerm] = useState("");

  const showOnPage = (event) => {
    setBookingOnPage(bookings.slice(0, event.currentTarget.value));
  };
  const searchBookings = (e) => {
    setTerm(e.currentTarget.value);
    const filteredBookings = bookings.filter(
      (el) =>
        el.lastName.toUpperCase().indexOf(term.toUpperCase()) >= 0 ||
        el.firstName.toUpperCase().indexOf(term.toUpperCase()) >= 0
    );
    setBookingOnPage(filteredBookings);
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Bookings </h2>
      <div className={styles.sortInputs}>
        <div className={styles.sortInputs_search}>
          <input
            onChange={searchBookings}
            className="form-control"
            type="text"
            placeholder="Search by name..."
          />
        </div>
        <div className={styles.sortInputs_show}>
          <label htmlFor="show">Show</label>
          <select onClick={showOnPage} id="show">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value={bookings.length}>ALL</option>
          </select>
        </div>
      </div>

      <Paper>
        <TableContainer className={styles.scrollWrapper}>
          <Table className={styles.table}>
            <TableHead className={styles.table_head}>
              <TableRow>
                <TableCell className={styles.table_head_cell}>Date</TableCell>
                <TableCell className={styles.table_head_cell}>Name</TableCell>
                {fullList ? (
                  <TableCell className={styles.table_head_cell}>
                    First Name
                  </TableCell>
                ) : null}
                <TableCell className={styles.table_head_cell}>Email</TableCell>
                {fullList ? (
                  <TableCell className={styles.table_head_cell}>
                    Phone
                  </TableCell>
                ) : null}
                <TableCell className={styles.table_head_cell}>
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingsOnPage.map((booking) => (
                <TableRow key={booking._id}>
                  <TableCell component="th" scope="row">
                    {booking.created}
                  </TableCell>
                  <TableCell>{booking.lastName}</TableCell>
                  {fullList ? <TableCell>{booking.firstName}</TableCell> : null}
                  <TableCell>{booking.email}</TableCell>
                  {fullList ? <TableCell>{booking.phone}</TableCell> : null}
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      className={styles.button}
                    >
                      <Link
                        to={`/bookings/${booking._id}`}
                        className={styles.link}
                      >
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
  bookings: PropTypes.array,
  fetchBookings: PropTypes.func,
  fullList: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  bookings: getAllBookings(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as BookingsList, Component as HomepageComponent };
