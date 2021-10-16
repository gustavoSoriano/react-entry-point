import React, { Fragment } from "react";
import Default from "./default/index";

const Themes = {
    Default,
};

const Component =
    Themes[localStorage.getItem("theme") || "Default"] || Fragment;

export default Component;
