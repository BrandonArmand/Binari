import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridItem from "./GridItem";

describe("GridItem", () => {
    it("renders snapshot", () => {
        const { container } = render(<GridItem />);
        expect(container).toMatchSnapshot();
    });
    it("renders GridItem", () => {
        render(<GridItem>GridItem</GridItem>);
        expect(screen.getByText("GridItem")).toBeInTheDocument();
    });
});
