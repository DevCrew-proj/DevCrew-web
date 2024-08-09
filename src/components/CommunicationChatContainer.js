import styled from "styled-components";
import Profile from "./Profile";
import ImageSlider from "./ImageSlider";

const CommunicationContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid #97a7a7;
  border-radius: 20px;
  box-sizing: border-box;
  margin-bottom: 70px;
  padding: 70px 0 54px;
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
  width: 20%;
  margin-bottom: 34px;
  padding: 0 70px;
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
`;

const ChatImageBox = styled.div`
  width: 100%;
  height: 453px;
  margin: 0 0 15px;
`;

const ChatFileBox = styled.div`
  padding: 0 70px;
  background-color: red;
`;

const CommunicationChatContainer = (data) => {
  console.log(data.data.image);
  return (
    <CommunicationContainer>
      <CommunicationBox>
        <CommunicationProfileBox>
          <Profile category={data.data.category} />
        </CommunicationProfileBox>
        <CommunicationContentBox>
          <ChatTitle>
            {data.data.title === null
              ? "경력직을 우선시하는 PM 포지션, 어떻게 준비해야 할까요?"
              : data.data.title}
          </ChatTitle>
          <ChatContent>
            {data.data.content === null
              ? "안녕하세요, 기획자 신짱구입니다. PM 포지션을 목표로 하고 있지만,많은 회사가 경력직만 채용하는 상황에서 고민하고 있습니다. 저는 현재 기획자로서 3년의 경험이 있으며, PM 역할에 필요한 스킬과 자격증 취득을 준비하고 있습니다. 사이드 프로젝트로 실전 경험을 쌓으려 노력 중입니다. 이런 준비가 실제로 경력으로 인정받을 수 있을지, 그리고 경력직 요구를 극복하기 위한 추가적인 조언이 필요합니다. 현직 PM 분들의 조언을 부탁드립니다. 감사합니다. 안녕하세요, 기획자 신짱구입니다. PM 포지션을 목표로 하고 있지만, 많은 회사가 경력직만 채용하는 상황에서 고민하고 있습니다. 저는 현재 기획자로서 3년의 경험이 있으며, PM 역할에 필요한 스킬과 자격증 취득을 준비하고 있습니다. 사이드 프로젝트로 실전 경험을 쌓으려 노력 중입니다. 이런 준비가 실제로 경력으로 인정받을 수 있을지, 그리고 경력직 요구를 극복하기 위한 추가적인 조언이 필요합니다. 현직 PM 분들의 조언을 부탁드."
              : data.data.content}
          </ChatContent>
          <ChatImageBox>
            <ImageSlider images={data.data.image} />
          </ChatImageBox>
          <ChatFileBox>dk</ChatFileBox>
        </CommunicationContentBox>
      </CommunicationBox>
    </CommunicationContainer>
  );
};

export default CommunicationChatContainer;
