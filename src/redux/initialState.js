export const initialState = {
  offers: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    oneOffer: {
      _id: "10",
      region: "CDMX",
      regionId: "cdmx",
      title: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      price: 3890,
      image: [],
    },
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
