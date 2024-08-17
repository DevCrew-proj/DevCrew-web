import React, { useState } from "react";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import ImageUpload from "./ImageUpload";
import axios from "axios";

const Layout = styled.div`
  width: 1490px;
  height: 1019px;
  margin: 0 auto 230px;
`;

const FormLayout = styled.div`
  width: 100%;
  height: 946px;
  margin-bottom: 22px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const ContentContainer = styled.div`
  width: 67%;
  height: 100%;
  margin-right: 1%;
  float: left;
`;

const TitleInputBox = styled.div`
  border-radius: 17px;
  background: rgba(130, 149, 149, 0.35);
  margin: 0 0 16px 0;
  padding: 25px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: AppleSDGothicNeoL00;
  font-weight: normal;
  font-size: 24px;
  color: #000;
  background: transparent;

  &::placeholder {
    color: #fff;
  }
`;

const ContentEditor = styled.div`
  border-radius: 17px;
  background: rgba(130, 149, 149, 0.35);
  margin-bottom: 16px;
  height: 752px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-family: AppleSDGothicNeoL00;
  font-weight: 400;
  font-size: 24px;
  color: #000;
  background: transparent;
  box-sizing: border-box;
  padding: 25px;
  resize: none;

  &::placeholder {
    color: #fff;
  }
`;

const UploadButton = styled.div`
  width: 169px;
  padding: 9px 0;
  clear: both;
  background-color: #5d6c6f;
  border-radius: 5px;
  font-family: Pretenard;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  float: right;
`;

const PreviewContainer = styled.div`
  float: left;
  width: 32%;
  height: 100%;
`;

const FormBoard = ({ apiEndpoint, feedbackTag, imageUploadApiEndpoint,fileUploadApiEndpoint }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [fileUrls, setFileUrls] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleUpload = async () => {
    const tagMap = {
      "기획": "PLAN",
      "디자인": "DESIGN",
      "front-end": "FRONTEND",
      "back-end": "BACKEND",
      "기타": "ETC"
    };

    const payload = {
      title: title || "제목 없음",
      content: details || "내용 없음",
      feedbackTag: tagMap[feedbackTag] || "ETC", 
      ...(fileUrls.length > 0 && { fileUrls: fileUrls }),
      ...(imageUrls.length > 0 && { imageUrls: imageUrls })
    };

    console.log("Payload being sent:", payload);

    try {
      const response = await axios.post(apiEndpoint, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Response data:", response.data);
      alert("Upload successful!");
    } catch (error) {
      console.error("Error uploading:", error);
      console.log("Server response:", error.response?.data || error.message);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <Layout>
      <FormLayout>
        <ContentContainer>
          <TitleInputBox>
            <TitleInput
              type='text'
              placeholder='제목을 입력하세요'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </TitleInputBox>
          <ContentEditor>
            <TextArea
              placeholder='최대 500자까지 입력 가능합니다.'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={500}
            />
          </ContentEditor>
          <FileUpload setFileUrls={setFileUrls} apiEndpoint={fileUploadApiEndpoint} />
        </ContentContainer>
        <PreviewContainer>
          <ImageUpload setImageUrls={setImageUrls} apiEndpoint={imageUploadApiEndpoint} />
        </PreviewContainer>
      </FormLayout>
      <UploadButton onClick={handleUpload}>업로드 하기</UploadButton>
    </Layout>
  );
};

export default FormBoard;
