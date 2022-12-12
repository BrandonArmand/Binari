import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cardbody from "./Cardbody";

describe("Cardbody", () => {
    it("renders snapshot", () => {
        const { container } = render(<Cardbody />);
        expect(container).toMatchSnapshot();
    });
    it("renders Cardbody", () => {
        render(<Cardbody>Cardbody</Cardbody>);
        expect(screen.getByText("Cardbody")).toBeInTheDocument();
    });
});
