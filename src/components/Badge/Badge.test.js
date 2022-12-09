import React from "react";
import { render } from "@testing-library/react";
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
});
