import React from "react"
import { shallow } from "enzyme"

import Layout from "../components/Layout"


describe("Layout component", () => {

    describe("When shallow rendered without any children.", () => {

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

    describe("When shallow rendered with children", () => {
        
        const message = "Hello World!"

        const layoutWrapper = shallow(
            <Layout>
                <p>{message}</p>
            </Layout>
        )

        it("Renders without errors", () => {
            expect(layoutWrapper).toHaveLength(1)
        })

        it("Has the website name in the heading", () => {
            expect(layoutWrapper.find("h1").text()).toEqual("Notes2Self")
        })

        it("Renders the given children", () => {
            expect(layoutWrapper.find("p").first().text()).toEqual(message)
        })

        it ("Has the copyright in the footer", () => {
            expect(layoutWrapper.find("p").last().text()).toEqual("© Joseph R Miles 2020")
        })

    })

})