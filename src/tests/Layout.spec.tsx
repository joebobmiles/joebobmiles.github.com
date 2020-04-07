import React from "react"
import { shallow } from "enzyme"

import Layout from "../components/Layout"


describe("Layout component", () => {

    const layoutWrapper = shallow(<Layout></Layout>)

    it("Renders without error.", () => {
        expect(layoutWrapper).toHaveLength(1)
    })

    it("Has the website name in the heading", () => {
        expect(layoutWrapper.find("h1").text()).toEqual("Notes2Self")
    })

    it ("Has the copyright in the footer", () => {
        expect(layoutWrapper.find("p").text()).toEqual("© Joseph R Miles 2020")
    })
})