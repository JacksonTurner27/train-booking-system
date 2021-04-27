import Bookings from './Bookings';
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('<Bookings />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Bookings />
            </Router>
        )
      });

    test('Bookings component renders title', () => {
        const h4 = wrapper.find('.bookingsTitle');
        expect(h4.text()).toBe('My Bookings');
    });

    test('Bookings component renders table', () => {
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
    });

    
})

