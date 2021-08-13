import React from "react";
import { shallow } from "enzyme";
import { DatePickerComponent } from "./DatePicker";

describe("Component DatePicker", () => {
  const setDate = function () {};
  it("should render without crashing", () => {
    const component = shallow(
      <DatePickerComponent setDate={setDate} className="str" />
    );
    expect(component).toBeTruthy();
  });
});
