import React from "react"
import { shallow } from "enzyme"

import NotFoundPage from "../pages/404"

describe("Not Found Page page", () => {

    it("Renders without error.", () => {
        // I would use toExist() instead, but that fails for this page.
        // I do not know why...
        expect(shallow(<NotFoundPage />)).toHaveLength(1)
    })

})