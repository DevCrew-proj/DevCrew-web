import styled from "styled-components";
import { useState, useEffect } from "react";

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #a6b4b4;
  box-sizing: border-box;
  border-radius: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CommunicationName = styled.span`
  display: block;
  width: 100%;
  color: #000;
  font-family: AppleSDGothicNeoM00;
  font-size: 22px;
  font-weight: 400;
`;

const CommunicationBoxCategory = styled.span`
  min-width: 20px;
  color: #fff;
  background-color: #5d6c6f;
  border: none;
  border-radius: 7px;
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  padding: 3px 9px 2px;
  margin-right: 7px;
`;

const ChatTime = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-weight: 400;
`;

const Profile = ({ memberName, memberImage, category, createdAt }) => {
  // 시간 표기를 위한 state
  const [timeAgo, setTimeAgo] = useState("");
  const updateTimeStamp = () => {
    // 경과된 시간 계산 (1초 = 1000)
    const timeElapsed = Math.floor((new Date() - new Date(createdAt)) / 1000);

    if (timeElapsed < 60) {
      setTimeAgo(`방금 전`);
    } else if (timeElapsed < 60 * 60) {
      const minutes = Math.floor(timeElapsed / 60);
      setTimeAgo(`${minutes}분 전`);
    } else if (timeElapsed < 60 * 60 * 24) {
      const hours = Math.floor(timeElapsed / (60 * 60));
      setTimeAgo(`${hours}시간 전`);
    } else {
      const days = Math.floor(timeElapsed / (60 * 60 * 24));
      setTimeAgo(`${days}일 전`);
    }
  };

  useEffect(() => {
    updateTimeStamp();
  });

  return (
    <>
      <div style={{ width: "35%", float: "left" }}>
        <ProfileImage src={memberImage} />
      </div>
      <div style={{ width: "65%", float: "left" }}>
        <CommunicationName>
          {memberName === undefined ? "신짱구" : memberName}
        </CommunicationName>
        <CommunicationBoxCategory>
          {category === undefined ? "카테고리" : category}
        </CommunicationBoxCategory>
        <ChatTime>{timeAgo}</ChatTime>
      </div>
    </>
  );
};

export default Profile;
