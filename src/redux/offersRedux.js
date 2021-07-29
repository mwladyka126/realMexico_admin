import Axios from "axios";
import { API_URL } from "../config";
/* selectors */
export const getAllOffers = ({ offers }) => offers.data;
export const getOne = ({ offers }) => offers.oneOffer;
export const getOneOffer = ({ offers }, offerId) =>
  offers.data.find((offer) => offer._id === offerId);
export const getOffersByRegion = ({ offers }, regionId) =>
  offers.data.filter((offer) => offer.regionId === regionId);

export const getLoadingState = ({ offers }) => offers.loading;

/* action name creator */
const reducerName = "offers";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const FETCH_ONE_OFFER = createActionName("FETCH_ONE_OFFER");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const fetchOneOffer = (payload) => ({ payload, type: FETCH_ONE_OFFER });

/* thunk creators */

export const fetchOffersFromAPI = () => {
  return (dispatch, getState) => {
    const { offers } = getState();

    if (offers.data.length === 0 || offers.loading.active === "false") {
      dispatch(fetchStarted());
      Axios.get(`${API_URL}/offers`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOneOfferFromAPI = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.get(`${API_URL}/offers/${id}`)
      .then((res) => {
        dispatch(fetchOneOffer(res.data));
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
          confirmation: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
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
          confirmation: false,
        },
      };
    }
    case FETCH_ONE_OFFER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          confirmation: false,
        },
        oneOffer: action.payload,
      };
    }

    default:
      return statePart;
  }
};
