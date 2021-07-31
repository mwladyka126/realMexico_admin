import React from 'react';
import { shallow } from 'enzyme';
import { BookingsListComponent } from './BookingsList';

describe('Component BookingsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<BookingsListComponent />);
    expect(component).toBeTruthy();
  });
});
