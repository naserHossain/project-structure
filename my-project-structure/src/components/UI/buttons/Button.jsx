import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    outline: none;
    background: #e1e1e1;
    color: #333;
    border-radius: 0.15rem;
    padding: 0.25rem 1rem;
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.1rem;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: #727171;
    }
`;
export default Button;
