import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import ListBar from "../components/Listbar";
import CommunicationSideBar from "../components/CommunicationSideBar";
import CommunicationBox from "../components/CommunicationBox.js";
import Pagination from "../components/Pagination";
import dummyData from "../store/dummyData";

const Layout = styled.div`
  // 원래 크기에서 height는 60% 감소
  width: 1920px;
  height: 2075px; // 2075 - 116 - 210 = 1737px
  background-color: #f0f0f0;
`;

const Container = styled.div`
  width: 1920px;
  height: 1737px;
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
`;

const Communication1 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const [category, setCategory] = useState("전체"); // 각 카테고리 별 표시
  const [communicationData, setCommunicationData] = useState([]); // 커뮤니티 data 받기
  const [chatNum, setChatNum] = useState(0); // 답변 count

  const itemsPerPage = 4; // 페이지당 게시물 수
  const searchData = Array.from(dummyData);
  const filteredData = (tab) => {
    if (tab === "전체") {
      return searchData;
    }
    return searchData.filter((data) => data.category === tab);
  }; // category에 따라 데이터 필터링

  const totalcontents = filteredData(category).length; // 전체 데이터 수
  const totalPages = Math.ceil(filteredData(category).length / itemsPerPage); // 전체 페이지 수

  const currentData = filteredData(category).slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  ); // 현재 페이지에 보여줄 데이터

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>현직자 조언</Title>
          <ListBar category={category} setCategory={setCategory} />
          <CommunicationSideBar totalcontents={totalcontents} />
          {currentData.map((data, index) => (
            <CommunicationBox key={index} data={data} chatNum={chatNum} />
          ))}
          <QuestionBtn onClick={() => navigate("/communicationBoard1")}>
            질문하기
          </QuestionBtn>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </IncumbentBox>
      </Container>
    </Layout>
  );
};
export default Communication1;
