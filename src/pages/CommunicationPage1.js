import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar.js";
import ListBar from "../components/Listbar";
import CommunicationSideBar from "../components/CommunicationSideBar";
import CommunicationBox from "../components/CommunicationBox.js";
import Pagination from "../components/Pagination";
import { dummyData } from "../store/dummyData";

const Layout = styled.div`
  // 원래 크기에서 height는 60% 감소
  width: 1920px;
  min-height: 2075px; // 2075 - 116 - 210 = 1749px
`;

const Container = styled.div`
  width: 1920px;
  min-height: 1749px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 1170px;
  height: 1385px;
`;

const Title = styled.h2`
  color: #2e4f4f;
  font-family: AppleSDGothicNeoH00;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: left;
  align-items: top;
  margin: 0 0 50px;
`;

const QuestionBtn = styled.button`
  width: 15%;
  min-width: 170px;
  height: 50px;
  color: #fff;
  background-color: #5d6c6f;
  border: none;
  border-radius: 5px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  padding: 13px 38px 15px;
  margin: 0 0 58px 85%;
  cursor: pointer;
`;

const Communication1 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const [category, setCategory] = useState("전체"); // 각 카테고리 별 표시
  const [communicationData, setCommunicationData] = useState({
    adviceFeedbackList: [],
    totalPages: 0,
  }); // 초기화
  const [chatNum, setChatNum] = useState(0); // 답변 count

  const searchFeedbackList = async () => {
    try {
      const response = await axios.get(
        // 전체일 때 category는 빈 문자열?
        `https://devcrew.kr/api/v1/feedback/advices?feedbackTag=${category}&page=${
          page - 1
        }`
      );
      setCommunicationData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchFeedbackList();
  }, [category, page]);

  console.log(communicationData.adviceFeedbackList);
  console.log(dummyData);

  const itemsPerPage = 4; // 페이지당 게시물 수
  const totalcontents = communicationData.adviceFeedbackList.length; // 전체 데이터 수
  const totalPages =
    communicationData.totalPages === 0 ? 1 : communicationData.totalPages;

  const currentData = communicationData.adviceFeedbackList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  ); // 현재 페이지에 보여줄 데이터

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>현직자 조언</Title>
          <ListBar category={category} setCategory={setCategory} />
          <CommunicationSideBar totalcontents={totalcontents} />
          {currentData.map((data, index) => (
            <CommunicationBox
              key={index}
              data={data}
              chatNum={chatNum}
              category={category}
            />
          ))}
          <QuestionBtn onClick={() => navigate("/communicationBoard1")}>
            질문하기
          </QuestionBtn>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </IncumbentBox>
      </Container>
      <Bottombar />
    </Layout>
  );
};
export default Communication1;
