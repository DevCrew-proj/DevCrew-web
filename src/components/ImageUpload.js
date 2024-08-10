import React from "react";
import styled from "styled-components";
import ImageUploadButton from "../assets/image/ImageUploadBtn.svg";

const Sidebar = styled.div`
  width: 100%;
  height: 100%;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 96px 5.5%;
  border: 1px solid #829595;
  border-radius: 17px;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: none;
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

  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &:nth-child(2n + 1) {
    margin-right: 15px;
  }
`;

const ImageUploadImg = styled.img`
  width: 40px;
  height: 40px;
`;

const ImageUpload = () => {
  return (
    <Sidebar>
      <PreviewContainer>
        <PreviewItem className='ImageUploadBox'>
          <ImageUploadImg src={ImageUploadButton} alt='이미지 업로드' />
        </PreviewItem>
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
      </PreviewContainer>
    </Sidebar>
  );
};

export default ImageUpload;
