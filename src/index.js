import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Theme from "./themes/index";
import { makeServer } from "./mock/server";

makeServer();

ReactDOM.render(
    <RecoilRoot>
        <Theme>
            <App />
        </Theme>
    </RecoilRoot>,
    document.getElementById("root")
);
