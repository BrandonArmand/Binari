import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTabs from "./CustomTabs";

describe("CustomTabs", () => {
    const tabs = [
        {
            tabName: "tab name",
            tabIcon: "tab icon",
            tabContent: "tab content",
        },
    ];
    it("renders snapshot", () => {
        const { container } = render(<CustomTabs tabs={tabs} />);
        expect(container).toMatchSnapshot();
    });
    it("renders CustomTabs", () => {
        render(<CustomTabs tabs={tabs} />);
        expect(screen.getByRole("tab")).toBeInTheDocument();
    });
    it("renders CustomTabs", () => {
        render(<CustomTabs tabs={tabs} />);
        expect(screen.getByRole("tab")).toBeInTheDocument();
    });
});
