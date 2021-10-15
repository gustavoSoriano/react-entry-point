import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from "recoil"
import App from './App'
import Theme from './themes/index'

const DynamicComponent = Theme[ window.localStorage.getItem('theme') || 'Default' ] || Fragment

ReactDOM.render(
    <RecoilRoot>
        <DynamicComponent>
            <App />
        </DynamicComponent>
    </RecoilRoot>,
    document.getElementById("root")
)






