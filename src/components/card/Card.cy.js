import React from "react";
import { mount } from "@cypress/react";
import Card from "./Index";

describe("Card", () => {
    it("renders the Card", () => {
        mount(<Card className="card-component">Card</Card>);

        cy.get(".card-component").should("be.visible");
    });
});
