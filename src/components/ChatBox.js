import { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import { dummyData2 } from "../store/dummyData";
import Pagination from "./Pagination";

const ShowBox = styled.div`
  width: 100%;
  margin: 0 auto 60px;
`;

const ChatCounterBox = styled.div`
  width: 100%;
  text-align: left;
  margin: 90px 0 auto;
  padding-bottom: 14px;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(151, 167, 167, 0.5);
  box-sizing: border-box;
`;

const ChatViewBox = styled.div`
  padding: 55px 0;
  border-bottom: 1px solid rgba(151, 167, 167, 0.5);
  box-sizing: border-box;

  &:nth-child(6n) {
    border-bottom: none;
  }

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const ChatProfile = styled.div`
  width: 18%;
  margin: 0 3% 0 1%;
  float: left;

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const ChatContent = styled.div`
  width: 77%;
  margin-right: 1%;
  float: left;
  font-family: AppleSDGothicNeoL00;
  font-size: 20px;
  line-height: 1.4;
  color: #000;
`;

const ChatBox = ({ dataCategory }) => {
  const [page, setPage] = useState(1); // 현재 페이지
  const [category, setCategory] = useState(dataCategory); // 각 카테고리 별 표시

  // if (dataCategory.dataCategory === null) {
  //   setCategory("전체");
  // } // 카테고리가 없을 경우 전체로 설정

  const itemsPerPage = 6; // 페이지당 게시물 수
  const searchData = Array.from(dummyData2);
  const filteredData = (tab) => {
    if (tab === "전체") {
      return searchData;
    }
    return searchData.filter((data) => data.category === tab);
  }; // 페이지에 따라 데이터 필터링

  const totalchatNum = filteredData(category).length; // 전체 댓글 수
  const totalChatPages = Math.ceil(
    filteredData(category).length / itemsPerPage
  ); // 전체 댓글 페이지 수

  const currentData = filteredData(category).slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  ); // 현재 페이지에 보여줄 댓글 데이터

  const boolCheck = () => {
    return page === totalChatPages ? true : false;
  };

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <>
      <ChatCounterBox>답변 {totalchatNum}</ChatCounterBox>
      <ShowBox>
        {currentData.map((data, index) => (
          <ChatViewBox>
            <ChatProfile key={index}>
              <Profile name={data.title} category={category} />
            </ChatProfile>
            <ChatContent key={index}>{data.content}</ChatContent>
          </ChatViewBox>
        ))}
      </ShowBox>
      <Pagination page={page} totalPages={totalChatPages} setPage={setPage} />
    </>
  );
};

export default ChatBox;
