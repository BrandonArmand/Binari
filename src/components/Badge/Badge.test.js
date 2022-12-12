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
        render(<Badge color="info">Info Badge</Badge>);
        expect(screen.getByText("Info Badge")).toBeInTheDocument();
        expect(screen.getByText("Info Badge")).toHaveClass(
            "makeStyles-info-14"
        );
    });
    it("renders text", () => {
        render(<Badge>Default Badge</Badge>);
        expect(screen.getByText("Default Badge")).toBeInTheDocument();
        expect(screen.getByText("Default Badge")).toHaveClass(
            "makeStyles-badge-17 makeStyles-gray-24"
        );
    });
});
