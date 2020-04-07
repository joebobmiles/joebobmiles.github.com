import React from "react"
import { shallow } from "enzyme"

import Site from "../pages/index"

describe("Home page", () => {

    it("Renders without error.", () => {
        expect(shallow(<Site />)).toHaveLength(1)
    })

})