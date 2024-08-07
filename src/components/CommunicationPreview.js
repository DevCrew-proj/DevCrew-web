import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 100%;
  height: 100%;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5%;
  border: 1px solid #829595;
  border-radius: 17px;
  box-sizing: border-box;
`;

const PreviewItem = styled.div`
  border: 1px solid #829595;
  box-sizing: border-box;
  background: #d9d9d9;
  position: relative;
  width: 202px;
  height: 176px;
  margin-bottom: 16px;
  float: left;

  &:nth-child(2n + 1) {
    margin-right: 15px;
  }
`;

const RepresentativeLabel = styled.div`
  position: absolute;
  background: #829595;
  left: 0;
  top: 0;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: #fff;
  padding: 10px 22px;
`;

const CommunicationPreview = () => {
  return (
    <Sidebar>
      <PreviewContainer>
        <PreviewItem>
          <RepresentativeLabel>대표</RepresentativeLabel>
        </PreviewItem>
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
      </PreviewContainer>
    </Sidebar>
  );
};

export default CommunicationPreview;
