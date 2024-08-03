import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar.js";
import CommunicationSideBar from "../components/CommunicationSideBar";
import CommunicationBox from "../components/CommunicationBox";
import Pagination from "../components/Pagination";
import { dummyData } from "../store/dummyData";

const Layout = styled.div`
  width: 1920px;
  min-height: 1842px; // 1842 - 116 - 210 = 1516px
`;

const Container = styled.div`
  width: 1920px;
  min-height: 1516px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 1170px;
  height: 1203px;
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
  const [chatNum, setChatNum] = useState(0);

  const itemsPerPage = 4;
  const totalContents = Math.ceil(dummyData.length);
  const totalPages = Math.ceil(totalContents / itemsPerPage);

  const currentData = dummyData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>기획 피드백</Title>
          <CommunicationSideBar totalcontents={totalContents} />
          {currentData.map((data, index) => (
            <CommunicationBox key={index} data={data} chatNum={chatNum} />
          ))}
          <QuestionBtn onClick={() => navigate("/communicationBoard2")}>
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
