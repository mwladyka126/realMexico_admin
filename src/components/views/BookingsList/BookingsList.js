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

import styles from "./BookingsList.module.scss";
import {
  getAllBookings,
  fetchBookingsFromAPI,
} from "../../../redux/bookingsRedux.js";

const Component = ({
  className,
  children,
  offers,
  fetchOffers,
  bookings,
  fetchBookings,
}) => (
  useEffect(() => {
    fetchOffers();
    fetchBookings();
  }, []),
  console.log(offers),
  (
    <div className={clsx(className, styles.root)}>
      <h2>Overview</h2>
      {children}
      <Grid container spacing={2} className={styles.tables}>
        <Grid item xs={12} sm={6} className={styles.tables_bookings}>
          {" "}
          <Paper>
            <h2>Bookings</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
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
                    <TableCell>{booking.email}</TableCell>
                    <TableCell>
                      <Button
                        className={styles.booked}
                        component={Link}
                        to={`${process.env.PUBLIC_URL}/booking/${booking._id}`}
                      >
                        see details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <div className={styles.buttons}>
                  <Button>
                    <Link to={"/bookings/"}>All bookings</Link>
                  </Button>
                  <Button>
                    <Link to={"/bookings/add"}> new booking offer</Link>
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
  bookings: getAllBookings(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchOffers: () => dispatch(fetchOffersFromAPI()),
  fetchBookings: () => dispatch(fetchBookingsFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as BookingsList, Component as HomepageComponent };
