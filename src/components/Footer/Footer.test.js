import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders snapshot", () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByRole("list")).toBeInTheDocument();
    });
});
