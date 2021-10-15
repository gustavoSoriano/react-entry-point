import React from "react";
import { StyledChip } from "./Chip.styles";

const Chip = ({ className, children, disabled, hideBg, onClick }) => {
    return (
        <StyledChip
            className={className}
            hideBg={hideBg}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledChip>
    );
};

export default Chip;
