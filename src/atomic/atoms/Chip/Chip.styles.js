import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const StyledChip = styled(Box).attrs(({ hideBg }) => ({
    className: `pl-3 pr-3 pt-1 pb-1 pointer ${!hideBg && "bg-gray--light"}`,
}))`
    filter: ${({ disabled }) => disabled && "grayscale(1)"};
`;
