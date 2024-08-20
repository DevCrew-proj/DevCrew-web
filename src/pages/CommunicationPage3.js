import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Topbar from "../components/Topbar.js";
import Bottombar from "../components/Bottombar.js";
import ListBar2 from "../components/Listbar2.js";
import CommunicationSideBar from "../components/CommunicationSideBar.js";
import CommunicationBox from "../components/CommunicationBox.js";
import Pagination from "../components/Pagination.js";

const Layout = styled.div`
  width: 1680px;
  min-height: 1815px;
`;

const Container = styled.div`
  width: 1680px;
  min-height: 1531px; // 1815 - 100 - 184 = 1531px
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IncumbentBox = styled.div`
  width: 1024px;
  height: 1212px;
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
  margin: 0 0 60px;
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

const Communication3 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1); // 현재 페이지
  const [category, setCategory] = useState("전체"); // 각 카테고리 별 표시
  const [communicationData, setCommunicationData] = useState({
    codeFeedbackList: [],
    totalPages: 1,
  }); // 초기화

  const searchFeedbackList = async () => {
    try {
      const response = await axios.get(
        category === "전체"
          ? `https://devcrew.kr/api/v1/feedback/codes/all?page=${page - 1}`
          : `https://devcrew.kr/api/v1/feedback/codes?language=${category}&page=${
              page - 1
            }`
      );
      setCommunicationData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchFeedbackList();
  }, [category, page]);

  const totalPages =
    communicationData.totalPages === 0 ? 1 : communicationData.totalPages; // 전체 페이지 수

  return (
    <Layout>
      <Topbar />
      <Container>
        <IncumbentBox>
          <Title>코드 리뷰</Title>
          <ListBar2 category={category} setCategory={setCategory} />
          <CommunicationSideBar
            totalcontents={communicationData.totalFeedbacks}
          />
          {communicationData.codeFeedbackList.map((data, index) => (
            <CommunicationBox
              key={index}
              data={data}
              category={data.language}
            />
          ))}
          <QuestionBtn onClick={() => navigate("/communicationBoard3")}>
            질문하기
          </QuestionBtn>
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            category={category}
          />
        </IncumbentBox>
      </Container>
      <Bottombar />
    </Layout>
  );
};
export default Communication3;
