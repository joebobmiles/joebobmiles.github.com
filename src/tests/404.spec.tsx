import React from "react"
import { shallow } from "enzyme"

import NotFoundPage from "../pages/404"

describe("Not Found Page page", () => {

    it("Renders without error.", () => {
        expect(shallow(<NotFoundPage />)).toHaveLength(1)
    })

    it("It shows \"404 - That's an error!\" message", () => {
        expect(shallow(<NotFoundPage />).find("h1").text()).toEqual("404 - That's an error!")
    })

})