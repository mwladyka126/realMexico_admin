import React from 'react';
import { shallow } from 'enzyme';
import { EditTripComponent } from './EditTrip';

describe('Component EditTrip', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditTripComponent />);
    expect(component).toBeTruthy();
  });
});
