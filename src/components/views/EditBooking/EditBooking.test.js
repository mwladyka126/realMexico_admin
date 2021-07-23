import React from 'react';
import { shallow } from 'enzyme';
import { EditBookingComponent } from './EditBooking';

describe('Component EditBooking', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditBookingComponent />);
    expect(component).toBeTruthy();
  });
});
