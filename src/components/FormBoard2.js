import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FileUpload from "./FileUpload";
import ImageUpload from "./ImageUpload";
import axios from "axios";

const Layout = styled.div`
  width: 1290px;
  height: 1019px;
  margin: 50px 20px 100px 190px;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #5d6c6f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
  font-size: 20px;
  margin-top: 20px;
`;

const FormBoard2 = ({ apiEndpoint, language, imageUploadApiEndpoint, fileUploadApiEndpoint, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [fileUrls, setFileUrls] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = sessionStorage.getItem("auth_token");
    if (accessToken) {
      setToken(accessToken);
    } else {
      alert("Token not found in session storage!");
    }
  }, []);

  const handleUpload = async () => {
    const tagMap = {
      "JAVA": "JAVA",
      "JS": "JAVASCRIPT",
      "Kotlin": "KOTLIN",
      "Python": "PYTHON",
      "Swift": "SWIFT",
      "C": "C",
      "기타": "OTHER"
    };

    const payload = {
      title: title || "제목 없음",
      content: details || "내용 없음",
      language: tagMap[language],
      fileUrls,
      imageUrls
    };

    console.log("Payload being sent:", payload);

    setLoading(true);

    try {
      const response = await axios.post(apiEndpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  
        }
      });
      console.log("Response data:", response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error uploading:", error);
      if (error.response) {
        console.log("Server response data:", error.response.data);
        console.log("Server response status:", error.response.status);
        console.log("Server response headers:", error.response.headers);
      } else {
        console.log("Error message:", error.message);
      }
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (onSuccess) {
      onSuccess(); // 업로드 성공 후 콜백 호출
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
              maxLength={50}  
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

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>업로드 완료되었습니다!</h2>
            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Layout>
  );
};

export default FormBoard2;
