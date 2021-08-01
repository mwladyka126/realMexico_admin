import React from "react";
import { shallow } from "enzyme";
import { OfferComponent } from "./OffersOverview";

describe("Component Offer", () => {
  it("should render without crashing", () => {
    const component = shallow(<OfferComponent />);
    expect(component).toBeTruthy();
  });
});
