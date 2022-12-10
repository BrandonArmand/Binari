import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
    it("renders snapshot", () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
    it("renders Button", () => {
        render(<Button>Button</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    it("renders button and click it", () => {
        const mockClickFn = jest.fn();
        render(<Button onClick={mockClickFn}>Button</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
        const btn = screen.getByRole("button");
        btn.click();
        expect(mockClickFn).toHaveBeenCalledTimes(1);
    });
    it("renders Link", () => {
        render(
            <BrowserRouter>
                <Button linkTo="test">Button</Button>
            </BrowserRouter>
        );
        expect(screen.getByRole("link")).toBeInTheDocument();
    });
    it("renders Link and click it", () => {
        const mockClickFn = jest.fn();
        render(
            <BrowserRouter>
                <Button linkTo="test" onClick={mockClickFn}>
                    Link
                </Button>
            </BrowserRouter>
        );
        const link = screen.getByText("Link");
        fireEvent.click(link);
        expect(mockClickFn).toHaveBeenCalledTimes(1);
    });
});
