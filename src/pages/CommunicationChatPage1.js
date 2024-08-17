import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import CommunicationChatContainer from "../components/CommunicationChatContainer";
import ChatBox from "../components/ChatBox";

const Layout = styled.div`
  // 원래 크기에서 height는 60% 감소
  width: 1920px;
  min-height: 1790px; // 1790 - 116 - 210 = 1464px
`;

const Container = styled.div`
  width: 1920px;
  margin: 140px 0 216px;
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

const CommunicationChat1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(1); // 댓글 페이지
  const [commentCount, setCommentCount] = useState(0); // 댓글 수
  const [totalChatPages, setTotalChatPages] = useState(1); // 댓글 총 페이지
  const [singleData, setSingleData] = useState({
    id: 1,
    memberId: 1,
    title: "",
    content: "",
    memberName: "",
    memberImageUrl: "",
    imageUrls: [],
    fileUrls: [],
    commentCount: 0,
    feedbackTag: "",
  }); // 단일 데이터
  const [chatData, setChatData] = useState([]); // 채팅 데이터
  const id = location.state.id; // id 값 받아오기

  const retrieveFeedback = async () => {
    try {
      const resSingleBoard = await axios.get(
        `https://devcrew.kr/api/v1/feedback/advices/${id}`
      );
      setCommentCount(resSingleBoard.data.data.commentCount);
      setSingleData(resSingleBoard.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveChat = async () => {
    try {
      const resChat = await axios.get(
        `https://devcrew.kr/api/v1/feedback/advices/${id}/comments?page=${
          page - 1
        }&size=6`
      );
      setTotalChatPages(resChat.data.data.totalPages);
      setChatData(resChat.data.data.comments);
      console.log(resChat.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    retrieveFeedback();
  }, []);

  useEffect(() => {
    retrieveChat();
  }, [page]);

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>현직자 조언</Title>
          <CommunicationChatContainer data={singleData} />
          <InputChatBox placeholder='로그인 후 댓글 남기기' />
          <SubmitBtn onClick={() => navigate("/communication1")}>
            게시
          </SubmitBtn>
          <ChatBox
            data={chatData}
            commentCount={commentCount}
            page={page}
            setPage={setPage}
            totalPages={totalChatPages}
            dataCategory={singleData.feedbackTag}
          />
        </IncumbentBox>
      </Container>
      <Bottombar />
    </Layout>
  );
};

export default CommunicationChat1;
