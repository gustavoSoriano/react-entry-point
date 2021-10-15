import { createGlobalStyle } from "styled-components";

export const GlobalStyl = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
    }

    ${({ theme: { radius, colors, font } }) => `
        ${Object.keys(colors)
            .map(
                (key) => `
                .${key}{
                    color: ${colors[key]};
                }
                .bg-${key}{
                    background-color: ${colors[key]};
                }
            `
            )
            .join("")}

        ${Object.keys(font)
            .map(
                (key) => `
                .text-${key}{
                    font-size: ${font[key]}px;
                }
            `
            )
            .join("")}
    `}

    .shadow{
        box-shadow: 0px 18px 32px rgba(208, 210, 218, 0.15);
    }

    .pointer{
        cursor:pointer
    }
`;
