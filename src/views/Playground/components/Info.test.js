import React from "react"
import { render } from "@testing-library/react"
import Info from "./Info"
import jest  from "jest-mock"

describe("Info", () => {
    it("renders snapshot", () => {
        const props = {
            text: "Test",
            show: jest.fn(),
            expand: jest.fn(),
            hide: jest.fn(),
        }
        const { container } = render(<Info {...props} />)
        expect(container).toMatchSnapshot()
    })
})
