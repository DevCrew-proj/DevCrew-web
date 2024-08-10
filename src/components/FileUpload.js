import { useState } from "react";
import styled from "styled-components";
import SelectFile from "../assets/image/selectfile.svg";
import Delete from "../assets/image/delete.svg";

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const UploadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 17px;
  border: 1px solid #829595;
  padding: 20px 36px;
  box-sizing: border-box;
  &.remainFile {
    padding-left: 96px;
    border: none;
  }
`;

const FileInfo = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow-wrap: break-word;
  font-family: Pretendard;
  font-weight: normal;
  font-size: 30px;
  color: #6e6e6e;

  /* &:first-of-type {
    max-width: 388px;
    max-height: 37px;
  } */
`;

const FileIcon = styled.img`
  margin-right: 22px;
  width: 38px;
  height: 27px;
  vertical-align: middle;
  transform: ${(props) =>
    props.fileDropDown ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
`;

const FileSize = styled.div`
  display: block;
  overflow-wrap: break-word;
  font-family: Pretendard;
  font-weight: normal;
  font-size: 30px;
  color: #c8c8c8;
  float: left;
`;

const Dot = styled.div`
  display: block;
  border-radius: 3px;
  background: #d9d9d9;
  width: 6px;
  height: 6px;
  float: left;
  margin: 15px 12px 0;
`;

const DeleteIcon = styled.img`
  margin: 4.5px 0 4.4px 0;
  width: 26.1px;
  height: 26.1px;
`;

const FileClickContainer = styled.div`
  width: 100%;
  max-height: 229px;
  background-color: #f7f7f7;
  display: ${(props) => (props.fileDropDown ? "block" : "none")};
  position: absolute;
  top: 84px;
  left: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const FileUpload = () => {
  const [fileDropDown, setFileDropDown] = useState(false);

  return (
    <Layout>
      <UploadContainer>
        <FileInfo>
          <FileIcon
            src={SelectFile}
            alt='SelectFile'
            fileDropDown={fileDropDown}
            onClick={() => {
              setFileDropDown(!fileDropDown);
            }}
          />
          dev_crew_document.pdf
        </FileInfo>
        <FileInfo>
          <Dot />
          <FileSize>536 kb</FileSize>
        </FileInfo>
        <DeleteIcon src={Delete} alt='Delete Icon' />
      </UploadContainer>
      <FileClickContainer fileDropDown={fileDropDown}>
        <UploadContainer className='remainFile'>
          <FileInfo>dev_crew_document.pdf</FileInfo>
          <FileInfo>
            <Dot />
            <FileSize>536 kb</FileSize>
          </FileInfo>
          <DeleteIcon src={Delete} alt='Delete Icon' />
        </UploadContainer>
        <UploadContainer className='remainFile'>
          <FileInfo>dev_crew_document.pdf</FileInfo>
          <FileInfo>
            <Dot />
            <FileSize>536 kb</FileSize>
          </FileInfo>
          <DeleteIcon src={Delete} alt='Delete Icon' />
        </UploadContainer>
        <UploadContainer className='remainFile'>
          <FileInfo>dev_crew_document.pdf</FileInfo>
          <FileInfo>
            <Dot />
            <FileSize>536 kb</FileSize>
          </FileInfo>
          <DeleteIcon src={Delete} alt='Delete Icon' />
        </UploadContainer>
        <UploadContainer className='remainFile'>
          <FileInfo>dev_crew_document.pdf</FileInfo>
          <FileInfo>
            <Dot />
            <FileSize>536 kb</FileSize>
          </FileInfo>
          <DeleteIcon src={Delete} alt='Delete Icon' />
        </UploadContainer>
      </FileClickContainer>
    </Layout>
  );
};

export default FileUpload;
