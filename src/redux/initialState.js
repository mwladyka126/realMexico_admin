export const initialState = {
  offers: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    oneOffer: {},
  },
  regions: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  bookings: {
    data: [
      /*
      {
        trips: [],
        created: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },*/
    ],
    oneBooking: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
