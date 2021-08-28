export const initialState = {
  offers: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    oneOffer: {
      _id: "1111",
      region: "",
      regionId: "",
      title: "",
      description: "",
      price: "",
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
