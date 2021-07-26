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
import { EditOffer } from "./components/views/EditOffer/EditOffer";
import { Offer } from "./components/views/Offer/Offer";
import { OffersList } from "./components/views/OffersList/OffersList";
import { NewOffer } from "./components/views/NewOffer/NewOffer";
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
              <Route exact path="/offers" component={OffersList} />
              <Route exact path="/offers/add" component={NewOffer} />
              <Route exact path="/offers/:id" component={Offer} />
              <Route exact path="/offers/:id/edit" component={EditOffer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
