import React from 'react';
import { shallow } from 'enzyme';
import { TripComponent } from './Trip';

describe('Component Trip', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripComponent />);
    expect(component).toBeTruthy();
  });
});
