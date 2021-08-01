import React from "react";
import { shallow } from "enzyme";
import { BookingComponent } from "./BookingsOverview";

describe("Component Booking", () => {
  it("should render without crashing", () => {
    const component = shallow(<BookingComponent />);
    expect(component).toBeTruthy();
  });
});
