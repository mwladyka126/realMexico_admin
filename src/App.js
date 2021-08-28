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
import { BookingsOverview } from "./components/views/BookingsOverview/BookingsOverview";

import { NewBooking } from "./components/views/NewBooking/NewBooking";
import { EditBooking } from "./components/views/EditBooking/EditBooking";
import { SingleBooking } from "./components/views/SingleBooking/SingleBooking";
import { SingleOffer } from "./components/views/SingleOffer/SingleOffer";
import { EditOffer } from "./components/views/EditOffer/EditOffer";
import { OfferFormular } from "./components/views/OfferFormular/OfferFormular";
import { OffersOverview } from "./components/views/OffersOverview/OffersOverview";
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
              <Route exact path="/bookings" component={BookingsOverview} />
              <Route exact path="/bookings/add" component={NewBooking} />
              <Route
                exact
                path="/bookings/:bookingId"
                component={SingleBooking}
              />
              <Route exact path="/bookings/:id/edit" component={EditBooking} />
              <Route exact path="/offers" component={OffersOverview} />
              <Route
                exact
                path="/offers/add"
                render={(props) => (
                  <OfferFormular {...props} toBeEdit={false} />
                )}
              />
              <Route exact path="/offers/:offerId" component={SingleOffer} />
              <Route
                exact
                path="/offers/:id/edit"
                render={(props) => <OfferFormular {...props} toBeEdit={true} />}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
