import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyl } from "./GlobalStyl";

export const theme = {
    font: {
        xs: 12,
        sm: 16,
        md: 24,
        lg: 36,
        xl: 48,
    },
    colors: {
        dark: "#2B3A4B",
        light: "#E5E5E5",
        white: "#FFF",
        gray: "#A3AED0",
        "gray--light": "#EBEEF2",
        primary: "#5F41B2",
        "primary--middle": "#c7bde4",
        "primary--light": "#F4F7FE",
        second: "",
        "second--middle": "",
        "second--light": "",
        third: "",
        "third--middle": "",
        "third--light": "",
    },
    radius: [8, 12, 15, 20, 45],
    name: "Default",
};

const Default = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyl />
        {children}
    </ThemeProvider>
);
export default Default;
