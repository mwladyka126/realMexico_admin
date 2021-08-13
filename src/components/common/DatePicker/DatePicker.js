import React from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import clsx from "clsx";

import styles from "./DatePicker.module.scss";

const Component = ({ className, setDate, defaultDate }) => {
  const [selectedDate, setSelectedDate] = React.useState(
    defaultDate || new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label=""
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  defaultDate: PropTypes.string,
  setDate: PropTypes.func,
};

export { Component as DatePicker, Component as DatePickerComponent };
