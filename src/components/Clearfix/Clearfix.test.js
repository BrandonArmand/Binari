import React from "react";
import { render } from "@testing-library/react";
import Clearfix from "./Clearfix";

describe("Clearfix", () => {
    it("renders snapshot", () => {
        const { container } = render(<Clearfix />);
        expect(container).toMatchSnapshot();
    });
});
