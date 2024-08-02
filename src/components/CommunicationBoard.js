import React, { useState } from "react";
import styled from "styled-components";
import CommunicationToolBar from "./CommunicationToolBar";
import CommunicationFileUpload from "./CommunicationFileUpload";
import CommunicationPreview from "./CommunicationPreview";

const Layout = styled.div`
  width: 1290px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 230px;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleInputBox = styled.div`
  border-radius: 17px;
  background: rgba(130, 149, 149, 0.35);
  position: relative;
  margin: 0 0 16px 0;
  padding: 23px 21.4px 25px 21px;
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: "AppleSDGothicNeoL00", "Roboto_Condensed";
  font-weight: normal;
  font-size: 1.5rem;
  color: #000000;
  background: transparent;
  box-sizing: border-box;

  &::placeholder {
    color: #ffffff;
  }
`;

const ContentEditor = styled.div`
  border-radius: 17px;
  background: rgba(130, 149, 149, 0.35);
  position: relative;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 1px;
  width: 100%;
  max-width: 1000px;
  height: 762px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const EditorBox = styled.div`
  box-shadow: 0px 9px 27px 0px rgba(0, 0, 0, 0.07),
    0px 3.8px 11.3px 0px rgba(0, 0, 0, 0.05),
    0px 2px 6px 0px rgba(0, 0, 0, 0.042),
    0px 1.1px 3.4px 0px rgba(0, 0, 0, 0.035),
    0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.028),
    0px 0.2px 0.7px 0px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  background: var(--white, #ffffff);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 16px 34px 16px 30.7px;
  width: 100%;
  max-width: 718px;
  height: fit-content;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-family: "AppleSDGothicNeoL00", "Roboto_Condensed";
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  text-decoration: ${(props) =>
    props.line ? "line-through" : props.underline ? "underline" : "none"};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  text-align: ${(props) => props.alignment};
  list-style-type: ${(props) => props.listStyle};
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  font-size: 1.5rem;
  color: #000000;
  background: transparent;
  box-sizing: border-box;
  padding: 16px;
  resize: none;
  margin-top: 10px;
  line-height: ${(props) => (props.line ? "1.5" : "normal")};

  &::placeholder {
    color: #ffffff;
  }
`;

const UploadButton = styled.button`
  background-color: #5d6c6f;
  border-radius: 5px;
  padding: 11px 0;
  color: #ffffff;
  font-size: 1.5rem;
  width: 169px;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CommunicationBoard = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [style, setStyle] = useState({
    bold: false,
    underline: false,
    italic: false,
    line: false,
    alignment: "left",
    listStyle: "none",
    backgroundImage: "",
  });

  const handleToolChange = (tool, alignment) => {
    switch (tool) {
      case "bold":
        setStyle((prev) => ({ ...prev, bold: !prev.bold }));
        break;
      case "underline":
        setStyle((prev) => ({ ...prev, underline: !prev.underline }));
        break;
      case "slide":
        setStyle((prev) => ({ ...prev, italic: !prev.italic }));
        break;
      case "line":
        setStyle((prev) => ({ ...prev, line: !prev.line }));
        break;
      case "sort":
        setStyle((prev) => ({ ...prev, alignment }));
        break;
      default:
        break;
    }
  };

  const handleEmojiClick = (emoji) => {
    setDetails((prev) => prev + emoji);
  };

  return (
    <Layout>
      <ContentSection>
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
            <EditorBox>
              <CommunicationToolBar
                onToolChange={handleToolChange}
                onEmojiClick={handleEmojiClick}
              />
            </EditorBox>
            <TextArea
              placeholder='최대 500자까지 입력 가능합니다.'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={500}
              {...style}
            />
          </ContentEditor>
          <CommunicationFileUpload />
        </ContentContainer>
        <PreviewContainer>
          <CommunicationPreview />
          <UploadButton>업로드 하기</UploadButton>
        </PreviewContainer>
      </ContentSection>
    </Layout>
  );
};

export default CommunicationBoard;
