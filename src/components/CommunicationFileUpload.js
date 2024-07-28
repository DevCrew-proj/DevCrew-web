import React from 'react';
import styled from 'styled-components';
import SelectFile from '../assets/image/selectfile.svg';
import Delete from '../assets/image/delete.svg';

const Layout = styled.div`
  width: 1290px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 22px;
  width: 60%;
`;

const UploadContainer = styled.div`
  border-radius: 17px;
  border: 1px solid #829595;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20.5px 35.9px;
  width: 1007px;
  box-sizing: border-box;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

const FileIcon = styled.img`
  border-radius: 2px;
  margin: 3.5px 22px 4.5px 0;
  width: 38px;
  height: 27px;
`;

const FileName = styled.span`
  word-break: break-word;
  font-family: 'Pretendard', 'Roboto_Condensed';
  font-weight: normal;
  font-size: 30px;
  color: #6E6E6E;
`;

const FileSize = styled.span`
  word-break: break-word;
  font-family: 'Pretendard', 'Roboto_Condensed';
  font-weight: normal;
  font-size: 30px;
  color: #C8C8C8;
`;

const Dot = styled.div`
  border-radius: 3px;
  background: #D9D9D9;
  margin: 15.5px 17px 13.5px 0;
  width: 6px;
  height: 6px;
`;

const DeleteIcon = styled.img`
  margin: 4.5px 0 4.4px 0;
  width: 26.1px;
  height: 26.1px;
`;

const CommunicationFileUpload = () => {
  return (
    <Layout>
      <ContentSection>
        <ContentContainer>
          <UploadContainer>
            <FileInfo>
              <FileIcon src={SelectFile} alt="SelectFile" />
              <FileName>dev_crew_document.pdf</FileName>
            </FileInfo>
            <FileInfo>
              <Dot />
              <FileSize>536 kb</FileSize>
            </FileInfo>
            <DeleteIcon src={Delete} alt="Delete Icon" />
          </UploadContainer>
        </ContentContainer>
      </ContentSection>
    </Layout>
  );
}

export default CommunicationFileUpload;
