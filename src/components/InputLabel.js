import React from "react";
import styled from "styled-components";

const LabelContainer = styled.div``;

const LabelText = styled.span`
  font-size: 200x;
  font-weight: 400;
  color: #373737;
`;

const RequiredMark = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #2faceb;
  line-height: 33.6px;
`;

export const InputLabel = ({ labelText }) => {
  return (
    <>
      <LabelContainer>
        <LabelText>{labelText}</LabelText>
        <RequiredMark>*</RequiredMark>
      </LabelContainer>
    </>
  );
};
