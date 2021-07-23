import React from 'react';
import { shallow } from 'enzyme';
import { NewTripComponent } from './NewTrip';

describe('Component NewTrip', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewTripComponent />);
    expect(component).toBeTruthy();
  });
});
