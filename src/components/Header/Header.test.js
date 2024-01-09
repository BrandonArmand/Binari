import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
              <Router>
                <Header brand="BrandName" route="/home" />
              </Router>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
