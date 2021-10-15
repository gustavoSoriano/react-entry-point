import { createGlobalStyle } from "styled-components";

export const GlobalStyl = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
    }

    .d-flex{
        display:flex;
    }

    .flex-column{
        flex-direction:column;
    }

    .align-center{
        align-items:center;
    }

    .justify-center{
        justify-content:center;
    }

    .mx-auto{
        margin:auto;
    }

    ${({ theme: { radius, colors, font } }) => `
        ${Array(4)
            .fill(1)
            .map(
                (_, i) => `
                ${["left", "right", "top", "bottom"]
                    .map(
                        (n) => `
                        .m${n[0]}-${i + 1}{
                            margin-${n}: ${(i + 1) * 5}px;
                        }
                        .p${n[0]}-${i + 1}{
                            padding-${n}: ${(i + 1) * 5}px;
                        }
                    `
                    )
                    .join("")}
            `
            )
            .join("")}

        ${radius
            .map(
                (r, i) => `
                .radius-${i + 1}{
                    border-radius: ${r}px;
                }
            `
            )
            .join("")}

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
