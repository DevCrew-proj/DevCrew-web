import styled from "styled-components";
import Profile from "./Profile";
import ImageSlider from "./ImageSlider";
import FileUpload2 from "./FileUpload2";

const CommunicationContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid #97a7a7;
  border-radius: 20px;
  box-sizing: border-box;
  margin-bottom: 44px;
  padding: 70px 0 35px;
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;

const CommunicationBox = styled.div`
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;

const CommunicationContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const CommunicationProfileBox = styled.div`
  width: 25%;
  margin-bottom: 34px;
  padding: 0 0 0 70px;
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;

const ChatTitle = styled.h3`
  font-family: AppleSDGothicNeoM00;
  font-size: 26px;
  font-weight: 400;
  margin: 0 0 28px;
  padding: 0 70px;
  overflow: hidden;
`;

const ChatContent = styled.p`
  font-family: AppleSDGothicNeoL00;
  font-size: 23px;
  font-weight: 400;
  margin: 0 0 35px;
  padding: 0 70px;
  line-height: 1.2;
  white-space: pre-wrap;
`;

const ChatImageBox = styled.div`
  width: 100%;
  height: 453px;
  margin: 0 0 15px;
`;

const ChatFileBox = styled.div`
  padding: 0 70px;
  margin: 0 auto;
`;

const CommunicationChatContainer = ({ data, category }) => {
  return (
    <CommunicationContainer>
      <CommunicationBox>
        <CommunicationProfileBox>
          <Profile
            memberName={data.memberName}
            memberImage={data.memberImageUrl}
            category={category}
            createdAt={data.createAt}
          />
        </CommunicationProfileBox>
        <CommunicationContentBox>
          <ChatTitle>{data.title}</ChatTitle>
          <ChatContent>{data.content}</ChatContent>
          {data.imageUrls.length === 0 ? null : (
            <ChatImageBox>
              <ImageSlider images={data.imageUrls} />
            </ChatImageBox>
          )}
          {data.fileUrls.length === 0 ? null : (
            <ChatFileBox>
              <FileUpload2 files={data.fileUrls} />
            </ChatFileBox>
          )}
        </CommunicationContentBox>
      </CommunicationBox>
    </CommunicationContainer>
  );
};

export default CommunicationChatContainer;
