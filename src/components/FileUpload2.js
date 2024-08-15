import { useState } from "react";
import styled from "styled-components";
import download from "../assets/image/download.svg";
import Vector4 from "../assets/image/vector4.svg";

const FileUploadContainer = styled.div`
  width: 100%;
  position: relative;
  & > div:first-child {
    border-radius: 8px;
  }
`;

const FileBox = styled.div`
  width: 100%;
  max-width: 763px;
  max-height: 53px;
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0;
  padding: 15px 24px;
  box-sizing: border-box;
  color: #6e6e6e;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
`;

const DownloadIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const ArrowIcon = styled.img`
  width: 20px;
  height: 10px;
  float: right;
  margin-top: 7px;
  cursor: pointer;
  // click 시 회전 animation
  transform: ${(props) =>
    props.fileDropDown ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
`;

const FileClickContainer = styled.div`
  width: 100%;
  max-height: 220px;
  display: ${(props) => (props.fileDropDown ? "block" : "none")};
  position: absolute;
  top: 57px;
  left: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const FileUpload2 = ({ files }) => {
  const [fileDropDown, setFileDropDown] = useState(false);
  return (
    <FileUploadContainer>
      <FileBox>
        <DownloadIcon src={download} alt='File Download' />
        {files[0]}
        <ArrowIcon
          src={Vector4}
          alt='Arrow Up'
          fileDropDown={fileDropDown}
          onClick={() => {
            setFileDropDown(!fileDropDown);
          }}
        />
      </FileBox>
      <FileClickContainer fileDropDown={fileDropDown}>
        {files.length === 1
          ? null
          : files.slice(1).map((file, index) => (
              <FileBox key={index}>
                <DownloadIcon src={download} alt={`File Download ${index}`} />
                {file}
              </FileBox>
            ))}
      </FileClickContainer>
    </FileUploadContainer>
  );
};

export default FileUpload2;
