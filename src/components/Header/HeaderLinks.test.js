import React from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLinks from "./HeaderLinks";


describe("HeaderLinks", () => {
    it("renders snapshot", () => {
        const { container } = render(<Router><HeaderLinks /></Router>);
        expect(container).toMatchSnapshot();
    });
    it("renders HeaderLinks", () => {
        render(
            <Router>
                <HeaderLinks />
            </Router>
        );
        expect(screen.getByText("Playground")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });
});
