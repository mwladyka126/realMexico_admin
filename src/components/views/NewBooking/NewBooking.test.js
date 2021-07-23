import React from 'react';
import { shallow } from 'enzyme';
import { NewBookingComponent } from './NewBooking';

describe('Component NewBooking', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewBookingComponent />);
    expect(component).toBeTruthy();
  });
});
