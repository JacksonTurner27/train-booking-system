import Book from './Book';
import Return from './Return';
import Out from './Out';
import React from 'react';
import { mount } from 'enzyme';

describe('<Book />', () => {
    it('Renders Outbound train booking component', () => {
      const wrapper = mount(<Book />);
      expect(wrapper.containsMatchingElement(<Out />)).toEqual(true);
    });

    it('Renders Return train booking component', () => {
      const wrapper = mount(<Book />);
      expect(wrapper.containsMatchingElement(<Return 
      />)).toEqual(true);
    });
  });