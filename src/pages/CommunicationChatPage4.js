import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import Bottombar from "../components/Bottombar";
import CommunicationChatContainer from "../components/CommunicationChatContainer";
import ChatBox from "../components/ChatBox";

const Layout = styled.div`
  width: 1680px;
  min-height: 1566px;
`;

const Container = styled.div`
  width: 1680px;
  min-height: 1282px; // 1566 - 100 - 184 = 1282px
  margin: 80px 0 90px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 792px;
  min-height: 1000px;
`;

const Title = styled.h2`
  color: #2e4f4f;
  font-family: AppleSDGothicNeoB00;
  font-size: 40px;
  font-weight: 400;
  display: flex;
  justify-content: left;
  align-items: top;
  margin: 0 0 48px;
`;

const InputChatBox = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: 1px solid #a6b4b4;
  box-sizing: border-box;
  border-radius: 20px;
  color: #8f8f8f;
  font-family: AppleSDGothicNeoL00;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 18px;
  padding: 32px 38px;
  resize: none;
  scrollbar-width: thin;
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
  padding: 3px 15px 1px;
  text-align: center;
  display: block;
  float: right;
  cursor: pointer;
`;

const CommunicationChat3 = () => {
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
  });
  const [chatData, setChatData] = useState([]); // 채팅 데이터
  const id = location.state.id; // id 값 받아오기
  const category = location.state.category; // category 값 받아오기
  const [content, setContent] = useState(""); // 댓글 내용
  const [placeholderContent, setPlaceholderContent] = useState(
    "로그인 후 댓글 남기기, 최대 500자 이내"
  );

  useEffect(() => {
    if (sessionStorage.getItem("auth_token") !== null) {
      setPlaceholderContent("최대 500자 이내");
    }
  });

  const retrieveFeedback = async () => {
    try {
      const resSingleBoard = await axios.get(
        `https://devcrew.kr/api/v1/feedback/designs/${id}`
      );
      setCommentCount(resSingleBoard.data.data.commentCount);
      setSingleData(resSingleBoard.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveChat = async () => {
    try {
      const resChat = await axios.get(
        `https://devcrew.kr/api/v1/feedback/designs/${id}/comments?page=${
          page - 1
        }&size=6`
      );
      setTotalChatPages(resChat.data.data.totalPages);
      setChatData(resChat.data.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  const postChat = async (content) => {
    try {
      await axios.post(
        `https://devcrew.kr/api/v1/feedback/designs/${id}/comments`,
        { content: content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
          },
        }
      );
      alert("댓글이 등록되었습니다.");
      window.location.reload(function () {
        window.scrollTo(0, 0);
      });
    } catch (error) {
      console.error(error);
      alert("댓글 등록에 실패했습니다.");
    }
  };

  const handleSubmit = () => {
    if (localStorage.getItem("auth_token") === null) {
      alert("로그인 후 이용해주세요.");
    } else if (content === "") {
      alert("댓글을 입력해주세요.");
    } else {
      postChat(content);
      retrieveChat();
    }
  };

  useEffect(() => {
    retrieveFeedback();
  }, []);

  useEffect(() => {
    retrieveChat();
  }, [page]);

  const accessToken = sessionStorage.getItem("auth_token");

  return (
    <Layout>
      {accessToken ? <Topbar3 /> : <Topbar />}
      <Container>
        <IncumbentBox>
          <Title>디자인 피드백</Title>
          <CommunicationChatContainer data={singleData} category={category} />
          <InputChatBox
            placeholder={placeholderContent}
            maxLength='500'
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <SubmitBtn onClick={() => handleSubmit()}>게시</SubmitBtn>
          <ChatBox
            data={chatData}
            commentCount={commentCount}
            page={page}
            setPage={setPage}
            totalPages={totalChatPages}
            dataCategory={category}
          />
        </IncumbentBox>
      </Container>
      <Bottombar />
    </Layout>
  );
};

export default CommunicationChat3;
