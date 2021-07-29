import Axios from "axios";
import { API_URL } from "../config";
/* selectors */
export const getAllBookings = ({ bookings }) => bookings.data;
export const getOne = ({ bookings }) => bookings.onebooking;
export const getOneBooking = ({ bookings }, bookingId) =>
  bookings.data.find((booking) => booking._id === bookingId);
export const getBookingsByRegion = ({ bookings }, regionId) =>
  bookings.data.filter((booking) => booking.regionId === regionId);

export const getLoadingState = ({ bookings }) => bookings.loading;

/* action name creator */
const reducerName = "bookings";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const FETCH_ONE_BOOKING = createActionName("FETCH_ONE_BOOKING");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const fetchOneBooking = (payload) => ({
  payload,
  type: FETCH_ONE_BOOKING,
});

/* thunk creators */

export const fetchBookingsFromAPI = () => {
  return (dispatch, getState) => {
    const { bookings } = getState();

    if (bookings.data.length === 0 || bookings.loading.active === "false") {
      dispatch(fetchStarted());
      Axios.get(`${API_URL}/bookings`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneBookingFromAPI = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.get(`${API_URL}/bookings/${id}`)
      .then((res) => {
        dispatch(fetchOneBooking(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_ONE_BOOKING: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        onebooking: action.payload,
      };
    }

    default:
      return statePart;
  }
};
