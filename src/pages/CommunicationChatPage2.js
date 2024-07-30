import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import CommunicationChatContainer from "../components/CommunicationChatContainer";
import ChatBox from "../components/ChatBox";

const Layout = styled.div`
  // 원래 크기에서 height는 60% 감소
  width: 1920px;
  min-height: 2000px; // 1790 - 116 - 210 = 1464px
  background-color: #f0f0f0;
`;

const Container = styled.div`
  width: 1920px;
  padding: 90px 0;
  min-height: 1464px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 905px;
  min-height: 1270px;
`;

const Title = styled.h2`
  color: #2e4f4f;
  font-family: AppleSDGothicNeoB00;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  display: flex;
  justify-content: left;
  align-items: top;
  margin: 0 0 74px;
`;

const InputChatBox = styled.textarea`
  width: 100%;
  min-height: 230px;
  border: 1px solid #a6b4b4;
  box-sizing: border-box;
  border-radius: 20px;
  color: #8f8f8f;
  font-family: AppleSDGothicNeoL00;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 30px 0 18px;
  padding: 32px 38px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  color: #2e4f4f;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 4px;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  padding: 8px 20px 4px;
  text-align: center;
  display: block;
  float: right;
  cursor: pointer;
`;

const CommunicationChat2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [chatNum, setChatNum] = useState(0); // 답변 count

  const data = location.state.data;

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>기획 피드백</Title>
          <CommunicationChatContainer data={data} />
          <ChatBox chatNum={chatNum} />
          <InputChatBox placeholder='로그인 후 댓글 남기기' />
          <SubmitBtn onClick={() => navigate("/communication2")}>
            게시
          </SubmitBtn>
        </IncumbentBox>
      </Container>
    </Layout>
  );
};

export default CommunicationChat2;
