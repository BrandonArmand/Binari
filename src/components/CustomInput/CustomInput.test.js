import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
    it("renders snapshot", () => {
        const { container } = render(<CustomInput />);
        expect(container).toMatchSnapshot();
    });
    it("renders CustomInput", () => {
        render(<CustomInput labelText="labelText" id="input_id" />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
    it("renders CustomInput and click it", async () => {
        const mockClickFn = jest.fn();
        let inputValue = "test";
        const changeEvent = {
            target: { value: "JavaScript" },
        };
        render(
            <CustomInput
                id="input_id"
                labelText="labelText"
                inputProps={{
                    onChange: mockClickFn,
                    value: inputValue,
                }}
            >
                Input
            </CustomInput>
        );
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, changeEvent);
        expect(mockClickFn).toHaveBeenCalledTimes(1);
    });
});
