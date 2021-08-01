import React from 'react';
import { shallow } from 'enzyme';
import { SingleOfferComponent } from './SingleOffer';

describe('Component SingleOffer', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleOfferComponent />);
    expect(component).toBeTruthy();
  });
});
