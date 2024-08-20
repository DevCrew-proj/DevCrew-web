import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import CommunicationSideBar from "../components/CommunicationSideBar";
import CommunicationBox from "../components/CommunicationBox";
import Pagination from "../components/Pagination";

const Layout = styled.div`
  width: 1680px;
  min-height: 1612px;
`;

const Container = styled.div`
  width: 1680px;
  min-height: 1328px; // 1612 - 100 - 184 = 1328px
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 1024px;
  height: 1052px;
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
  margin: 0 0 40px;
`;

const QuestionBtn = styled.button`
  width: 14%;
  color: #fff;
  background-color: #5d6c6f;
  border: none;
  border-radius: 5px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
  margin: 0 0 50px 86%;
  cursor: pointer;
`;

const Communication4 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const [communicationData, setCommunicationData] = useState({
    designFeedbackList: [],
    totalPages: 1,
  });

  const searchFeedbackList = async () => {
    try {
      const response = await axios.get(
        `https://devcrew.kr/api/v1/feedback/designs?page=${page - 1}`
      );
      setCommunicationData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchFeedbackList();
  }, [page]);

  const totalPages =
    communicationData.totalPages === 0 ? 1 : communicationData.totalPages;

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>디자인 피드백</Title>
          <CommunicationSideBar
            totalcontents={communicationData.totalFeedbacks}
          />
          {communicationData.designFeedbackList.map((data, index) => (
            <CommunicationBox key={index} data={data} category='디자인' />
          ))}
          <QuestionBtn onClick={() => navigate("/communicationBoard4")}>
            질문하기
          </QuestionBtn>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </IncumbentBox>
      </Container>
      <Bottombar />
    </Layout>
  );
};
export default Communication4;
