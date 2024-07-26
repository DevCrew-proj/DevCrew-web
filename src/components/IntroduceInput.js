import React from "react";
import styled from "styled-components";
import { InputLabel } from "./InputLabel";

const Container = styled.div`
  flex: 1 1 calc(50% - 67px);
  box-sizing: border-box;
  margin-bottom: 67px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 19px 18px;
  border-radius: 9px;
  border: none;
  font-size: 20px;
`;

export const IntroduceInput = ({ labelText, placeholder }) => {
  return (
    <>
      <Container>
        <InputLabel labelText={labelText}></InputLabel>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder={placeholder}
          required
        />
      </Container>
    </>
  );
};
