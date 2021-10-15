import React from "react";
import { StyledChip } from "./Chip.styles";
import Box from "@material-ui/core/Box";

const Chip = ({ className, children, disabled, hideBg, onClick }) => {
    return (
        <StyledChip
            className={className}
            hideBg={hideBg}
            disabled={disabled}
            onClick={onClick}
            borderRadius={20}
        >
            <Box display="flex" alignItems="center" px={2} py={1}>
                {children}
            </Box>
        </StyledChip>
    );
};

export default Chip;
