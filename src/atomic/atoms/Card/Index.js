import React from "react";
import { StyledCard } from "./Card.styles";
import Box from "@material-ui/core/Box";

const Card = ({ className, children }) => {
    return (
        <StyledCard className={className} borderRadius={8} px={2} py={2}>
            <Box display="flex" alignItems="center">
                {children}
            </Box>
        </StyledCard>
    );
};

export default Card;
