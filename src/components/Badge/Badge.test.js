import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from "./Badge";

describe("Badge", () => {
    it("renders snapshot", () => {
        const { container } = render(<Badge />);
        expect(container).toMatchSnapshot();
    });
    it("renders snapshot with colour info", () => {
        const { container } = render(<Badge color="info" />);
        expect(container).toMatchSnapshot();
    });
    it("renders text", () => {
        render(<Badge>Badge</Badge>);
        expect(screen.getByText("Badge")).toBeInTheDocument();
    });
});
