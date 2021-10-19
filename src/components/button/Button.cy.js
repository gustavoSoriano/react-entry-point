import React from "react";
import { mount } from "@cypress/react";
import Button from "./Index";

describe("Button", () => {
    it("renders the Button", () => {
        let count = 0;

        mount(
            <Button
                title={"Botão"}
                onClick={() => {
                    count += 1;
                }}
            />
        );

        cy.contains("Botão").dblclick();

        cy.contains("Botão")
            .should(($el) => {
                expect($el).to.be.visible;
            })
            .then(() => {
                expect(count).equal(2);
            });
    });
});
