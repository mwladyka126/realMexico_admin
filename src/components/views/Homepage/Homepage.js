import React from "react";
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

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";

const demoList = [
  {
    table: "1",
    time: "12:30",
    people: "2",
    details: "1",
  },
  {
    table: "2",
    time: "15:30",
    people: "5",
    details: "9",
  },
  {
    table: "1",
    time: "17:30",
    people: "2",
    details: "1",
  },
  {
    table: "2",
    time: "18:30",
    people: "5",
    details: "9",
  },
];

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Overview</h2>
    {children}
    <Grid container spacing={2} className={styles.tables}>
      <Grid item xs={12} sm={6} className={styles.tables_trips}>
        <Paper>
          <h2>Trips</h2>
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
              {demoList.map((demoList) => (
                <TableRow key={demoList.table}>
                  <TableCell component="th" scope="row">
                    {demoList.table}
                  </TableCell>
                  <TableCell>{demoList.time}</TableCell>
                  <TableCell>{demoList.people}</TableCell>
                  <TableCell>
                    <Button
                      className={styles.booked}
                      component={Link}
                      to={`${process.env.PUBLIC_URL}/tables/booking/${demoList.details}`}
                    >
                      see details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <div className={styles.buttons}>
                <Button>all trips</Button>
                <Button>new trip</Button>
              </div>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
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
              {demoList.map((demoList) => (
                <TableRow key={demoList.table}>
                  <TableCell component="th" scope="row">
                    {demoList.table}
                  </TableCell>
                  <TableCell>{demoList.time}</TableCell>
                  <TableCell>{demoList.people}</TableCell>
                  <TableCell>
                    <Button
                      className={styles.booked}
                      component={Link}
                      to={`${process.env.PUBLIC_URL}/tables/booking/${demoList.details}`}
                    >
                      see details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <div className={styles.buttons}>
                <Button>all bookings</Button>
                <Button>new booking</Button>
              </div>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
