import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { OffersList } from "../../features/OffersList/OffersList";

import clsx from "clsx";

import styles from "./OffersOverview.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Paper>
      <div className={styles.addNew}>
        <h3 className={styles.buttonDesc}>New offer</h3>
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

export {
  Component as OffersOverview,
  // Container as Offer,
  Component as OffersOverviewComponent,
};
