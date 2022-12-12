import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomLinearProgress from "./CustomLinearProgress";

describe("CustomLinearProgress", () => {
    it("renders snapshot", () => {
        const { container } = render(<CustomLinearProgress />);
        expect(container).toMatchSnapshot();
    });
    it("renders CustomLinearProgress", () => {
        render(<CustomLinearProgress />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });
    it("renders CustomLinearProgress", () => {
        render(<CustomLinearProgress color="primary" />);
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });
});
