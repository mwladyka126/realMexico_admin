import React from "react";
import { shallow } from "enzyme";
import { LoadingComponent } from "./Loading";

describe("Component Loading", () => {
  it("should render without crashing", () => {
    const component = shallow(<LoadingComponent className="str" />);
    expect(component).toBeTruthy();
  });
});
