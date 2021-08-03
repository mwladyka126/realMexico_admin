import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
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
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Bookings </h2>

      <Paper>
        <TableContainer className={styles.scrollWrapper}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                {fullList ? <TableCell>First Name</TableCell> : null}
                <TableCell>Email</TableCell>
                {fullList ? <TableCell>Phone</TableCell> : null}
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={bookings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  bookings: getAllBookings(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as BookingsList, Component as HomepageComponent };
