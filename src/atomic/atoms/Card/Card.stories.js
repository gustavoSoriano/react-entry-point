import React from "react";
import Card from "./Index";
import ThemeContainer from "../../themes/default/index";
import Box from "@material-ui/core/Box";

const story = {
    title: "Atoms/Card",
    component: Card,
    argTypes: {
        title: { control: { type: "text" } },
        onClick: { action: "onClick" },
    },
};

const Template = (args) => {
    return (
        <ThemeContainer>
            <Card>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <circle cx="32.5" cy="32.5" r="32.5" fill="#F4F7FE" />
                    <path
                        opacity="0.35"
                        d="M41.2356 46.1082H22.6642C20.0998 46.1082 18.0213 44.0298 18.0213 41.4654V22.8939C18.0213 20.3295 20.0998 18.2511 22.6642 18.2511H41.2356C43.8 18.2511 45.8785 20.3295 45.8785 22.8939V41.4654C45.8785 44.0298 43.8 46.1082 41.2356 46.1082Z"
                        fill="#5F41B2"
                    />
                    <path
                        d="M45.8785 36.8225V41.4654C45.8785 44.0298 43.8 46.1082 41.2356 46.1082H22.6642C20.0998 46.1082 18.0213 44.0298 18.0213 41.4654V36.8225H24.7411C25.9807 36.8225 27.1894 37.4895 27.6707 38.6317C28.3749 40.2984 30.0231 41.4654 31.9499 41.4654C33.8767 41.4654 35.5249 40.2984 36.2291 38.6317C36.7104 37.4895 37.9175 36.8225 39.1587 36.8225H45.8785Z"
                        fill="#5F41B2"
                    />
                </svg>

                <Box display="flex" flexDirection="column" pl={1.5}>
                    <Box className="gray text-sm" mb={0.5}>
                        Unassigned
                    </Box>
                    <span className="dark text-lg">350</span>
                </Box>
            </Card>
        </ThemeContainer>
    );
};

export const Default = Template.bind({});

Default.args = {
    title: "Confirmação",
};

export default story;
