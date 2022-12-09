import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
    it("renders snapshot", () => {
        const { container } = render(<Card />);
        expect(container).toMatchSnapshot();
    });
    it("renders Card", () => {
        render(<Card>Card</Card>);
        expect(screen.getByText("Card")).toBeInTheDocument();
    });
});
