import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button)`
    background-color: #6772e5 !important;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px !important;
    &:hover {
        background-color: #5469d4;
    }
    & .MuiButton-label {
        color: #fff;
    }
`;
