import React from 'react';
import { shallow } from 'enzyme';
import { EditOfferComponent } from './EditOffer';

describe('Component EditOffer', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditOfferComponent />);
    expect(component).toBeTruthy();
  });
});
