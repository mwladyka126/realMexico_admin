import React from 'react';
import { shallow } from 'enzyme';
import { OrdersListComponent } from './OffersList';

describe('Component OrdersList', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrdersListComponent />);
    expect(component).toBeTruthy();
  });
});
