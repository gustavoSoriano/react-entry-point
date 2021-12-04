import styled from "styled-components";

export const ScrollBarStyl = styled.div`
  width: ${ ({width}) => width }px;
  height: ${ ({height}) => height }px;
  overflow-${ ({type}) => type }: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;
