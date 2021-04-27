import Navbar from './Navbar';
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('<Navbar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Router>
                <Navbar />
            </Router>
        );
      });

    test('Todo component renders the text of the todo', () => {
        const h3 = wrapper.find('.title');
        expect(h3.text()).toBe('Heritage Trains');
    });
    
    test('Renders all of the links correctly', () => {
        expect(wrapper.find(Link).length).toBe(4);
    })
})

