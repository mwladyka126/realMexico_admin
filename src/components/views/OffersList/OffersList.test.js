import React from 'react';
import { shallow } from 'enzyme';
import { OffersListComponent } from './OffersList';

describe('Component OffersList', () => {
  it('should render without crashing', () => {
    const component = shallow(<OffersListComponent />);
    expect(component).toBeTruthy();
  });
});
