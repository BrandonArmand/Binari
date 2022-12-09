import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
    it("renders snapshot", () => {
        const { container } = render(<CustomButton />);
        expect(container).toMatchSnapshot();
    });
    it("renders CustomButton", () => {
        render(<CustomButton>CustomButton</CustomButton>);
        screen.debug();
        expect(screen.getByText("CustomButton")).toBeInTheDocument();
    });
});
