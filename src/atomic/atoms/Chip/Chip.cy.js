import React from "react";
import { mount } from "@cypress/react";
import Chip from "./Index";

describe("Chip", () => {
    it("renders the Chip", () => {
        mount(<Chip className="chip-component">Chip</Chip>);

        cy.get(".chip-component").should("be.visible");
    });
});
