import React from 'react';
import { shallow } from 'enzyme';
import { OfferFormularComponent } from './OfferFormular';

describe('Component OfferFormular', () => {
  it('should render without crashing', () => {
    const component = shallow(<OfferFormularComponent />);
    expect(component).toBeTruthy();
  });
});
