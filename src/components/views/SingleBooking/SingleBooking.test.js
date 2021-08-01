import React from 'react';
import { shallow } from 'enzyme';
import { SingleBookingComponent } from './SingleBooking';

describe('Component SingleBooking', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleBookingComponent />);
    expect(component).toBeTruthy();
  });
});
