import React from 'react';
import { shallow } from 'enzyme';
import { TripsListComponent } from './TripsList';

describe('Component TripsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripsListComponent />);
    expect(component).toBeTruthy();
  });
});
