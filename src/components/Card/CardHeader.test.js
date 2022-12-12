import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardHeader from "./CardHeader";

describe("CardHeader", () => {
    it("renders snapshot", () => {
        const { container } = render(<CardHeader />);
        expect(container).toMatchSnapshot();
    });
    it("renders CardHeader", () => {
        render(<CardHeader>CardHeader</CardHeader>);
        expect(screen.getByText("CardHeader")).toBeInTheDocument();
    });
});
