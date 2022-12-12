import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardFooter from "./CardFooter";

describe("CardFooter", () => {
    it("renders snapshot", () => {
        const { container } = render(<CardFooter />);
        expect(container).toMatchSnapshot();
    });
    it("renders CardFooter", () => {
        render(<CardFooter>CardFooter</CardFooter>);
        expect(screen.getByText("CardFooter")).toBeInTheDocument();
    });
});
