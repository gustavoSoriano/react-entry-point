import React from "react";
import styled from "styled-components";

export const StyledChip = styled.div.attrs(({ hideBg }) => ({
    className: `radius-5 pl-3 pr-3 pt-1 pb-1 pointer ${
        !hideBg && "bg-gray--light"
    }`,
}))`
    filter: ${({ disabled }) => disabled && "grayscale(1)"};
`;
