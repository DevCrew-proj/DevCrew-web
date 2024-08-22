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
  overflow: hidden;
  background-color: #f7f7f7;
  margin: 0;
  padding: 15px 48px 15px 24px;
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
  position: absolute;
  top: 45%;
  right: 24px;
  width: 20px;
  height: 10px;
  float: right;
  cursor: pointer;
  // click 시 회전 animation
  transform: ${(props) =>
    props.fileDropDown ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
`;

const FileClickContainer = styled.div`
  width: 100%;
  max-height: 303px;
  display: ${(props) => (props.fileDropDown ? "block" : "none")};
  position: absolute;
  top: 107px;
  left: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const FileUpload2 = ({ files }) => {
  const [fileDropDown, setFileDropDown] = useState(false);
  return (
    <FileUploadContainer>
      <FileBox>
        <a href={files}>
          <DownloadIcon src={download} alt='File Download' />
        </a>
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
                <a href={file}>
                  <DownloadIcon src={download} alt={`File Download ${index}`} />
                </a>
                {file}
              </FileBox>
            ))}
      </FileClickContainer>
    </FileUploadContainer>
  );
};

export default FileUpload2;
