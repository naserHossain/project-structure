import React from "react";
import styled from "styled-components";
import Text from "../../UI/texts/Texts";
import TextInput from "../../UI/inputs/TextInputs";

const Container = styled.div`
    padding: 1rem;
    width: 100%;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InputGroup = () => {
    return (
        <div>
            <h2>input group</h2>
            <Text> it will be a label </Text>
            <TextInput placeholder="what is your name" />
        </div>
    );
};

export default InputGroup;
