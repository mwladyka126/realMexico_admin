import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { store } from "./redux/store";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { Booking } from "./components/views/Booking/Booking";
import { BookingsList } from "./components/views/BookingsList/BookingsList";
import { NewBooking } from "./components/views/NewBooking/NewBooking";
import { EditBooking } from "./components/views/EditBooking/EditBooking";
import { EditTrip } from "./components/views/EditTrip/EditTrip";
import { Trip } from "./components/views/Trip/Trip";
import { TripsList } from "./components/views/TripsList/TripsList";
import { NewTrip } from "./components/views/NewTrip/NewTrip";
import { NotFound } from "./components/views/NotFound/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2B4C6F" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/bookings" component={BookingsList} />
              <Route exact path="/bookings/add" component={NewBooking} />
              <Route exact path="/bookings/:id" component={Booking} />
              <Route exact path="/bookings/:id/edit" component={EditBooking} />
              <Route exact path="/trips" component={TripsList} />
              <Route exact path="/trips/add" component={NewTrip} />
              <Route exact path="/trips/:id" component={Trip} />
              <Route exact path="/trips/:id/edit" component={EditTrip} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
