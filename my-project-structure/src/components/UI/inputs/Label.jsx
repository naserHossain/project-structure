import styled from "styled-components";

const fontSizes = {
    sm: "0,.8rem",
    md: "1rem",
    lg: "1.2rem",
};

const lineHeights = {
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
};
const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
    color: #222;
    line-height: ${(props) => lineHeights[props.line] ?? "1.2rem"};
    user-select: none;
`;

export default Label;
