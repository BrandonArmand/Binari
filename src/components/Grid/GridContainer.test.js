import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridContainer from "./GridContainer";

describe("GridContainer", () => {
    it("renders snapshot", () => {
        const { container } = render(<GridContainer />);
        expect(container).toMatchSnapshot();
    });
    it("renders GridContainer", () => {
        render(<GridContainer>GridContainer</GridContainer>);
        expect(screen.getByText("GridContainer")).toBeInTheDocument();
    });
});
