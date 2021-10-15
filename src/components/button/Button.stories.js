import React from "react";
import Button from "./Index";

const story = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        title: { control: { type: "text" } },
        onClick: { action: "onClick" },
    },
};

const Template = (args) => {
    return <Button title={args.title} onClick={() => args.onClick("Clicou")} />;
};

export const Default = Template.bind({});

Default.args = {
    title: "Confirmação",
};

export default story;
