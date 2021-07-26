import React from 'react';
import { shallow } from 'enzyme';
import { NewOfferComponent } from './NewOffer';

describe('Component NewOffer', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewOfferComponent />);
    expect(component).toBeTruthy();
  });
});
