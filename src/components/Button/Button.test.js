import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
    it("renders snapshot", () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
    it("renders button", () => {
        render(<Button>Button</Button>);
        screen.debug();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    it("renders Link", () => {
        render(
            <BrowserRouter>
                <Button linkTo="test">Button</Button>
            </BrowserRouter>
        );
        screen.debug();
        expect(screen.getByRole("link")).toBeInTheDocument();
    });
});
