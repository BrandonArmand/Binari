import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
    it("renders snapshot", () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
    it("renders text", () => {
        render(<Button>Button</Button>);
        expect(screen.getByText("Button")).toBeInTheDocument();
    });
});
