import React from 'react';
import { StyledCard } from './Card.styles';

const Card = ({ className, children }) => {
    return (
        <StyledCard className={className}>
            {children}
        </StyledCard>
    );
}

export default Card;