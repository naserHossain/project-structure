import React from "react";
import styled from "styled-components";
import TextInput from "../../UI/inputs/TextInputs";
import Label from "../../UI/inputs/Label";

const Container = styled.div`
    padding: 1rem;
    width: 80%;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red;
`;

const InputGroup = ({ label, name, value, placeholder, error }) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <TextInput name={name} id={name} placeholder={placeholder ?? ""} />
            {error && <ErrorMessage> {error} </ErrorMessage>};
        </Container>
    );
};

export default InputGroup;
