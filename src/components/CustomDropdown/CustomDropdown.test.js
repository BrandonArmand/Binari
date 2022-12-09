import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomDropdown from "./CustomDropdown";

describe("CustomDropdown", () => {
    it("renders snapshot", () => {
        const { container } = render(<CustomDropdown />);
        expect(container).toMatchSnapshot();
    });
    it("renders CustomDropdown", () => {
        render(
            <CustomDropdown buttonText="dropdown">
                CustomDropdown
            </CustomDropdown>
        );
        expect(screen.getByText("dropdown")).toBeInTheDocument();
    });
});
