import { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
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

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const ChatProfile = styled.div`
  width: 21%;
  margin: 0 2% 0 1%;
  float: left;

  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const ChatContent = styled.div`
  width: 76%;
  float: left;
  font-family: AppleSDGothicNeoL00;
  font-size: 20px;
  line-height: 1.4;
  color: #000;
`;

const ChatBox = ({
  data,
  commentCount,
  page,
  setPage,
  totalPages,
  dataCategory,
}) => {
  const totalChatPages = totalPages === 0 ? 1 : totalPages; // 전체 페이지 수

  return (
    <>
      <ChatCounterBox>답변 {commentCount}</ChatCounterBox>
      <ShowBox>
        {data.map((data, index) => (
          <ChatViewBox key={index}>
            <ChatProfile>
              <Profile
                memberName={data.memberName}
                memberImage={data.memberImageUrl}
                category={dataCategory}
                createdAt={data.createdAt}
              />
            </ChatProfile>
            <ChatContent>{data.content}</ChatContent>
          </ChatViewBox>
        ))}
      </ShowBox>
      <Pagination page={page} totalPages={totalChatPages} setPage={setPage} />
    </>
  );
};

export default ChatBox;
