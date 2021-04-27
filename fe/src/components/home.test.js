import Home from './Home';
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('<Home />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Home />
            </Router>
        )
      });

    test('Home component renders welcome message', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe('Helping you find your way in the darkness.');
    });

    test('Home component renders title', () => {
        const h1 = wrapper.find('.text');
        expect(h1.text()).toBe("Heritage Trains");
    });

    
})

