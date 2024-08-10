import styled from "styled-components";

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
  border-radius: 5px;
  font-family: AppleSDGothicNeoM00;
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  padding: 2px 5px 1px;
  margin-right: 7px;
`;

const ChatTime = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: AppleSDGothicNeoM00;
  font-size: 8px;
  font-weight: 400;
`;

const Profile = ({ name, category }) => {
  return (
    <>
      <div style={{ width: "40%", float: "left" }}>
        <ProfileImage src='http://via.placeholder.com/50x50' />
      </div>
      <div style={{ width: "60%", float: "left" }}>
        <CommunicationName>
          {name === undefined ? "신짱구" : name}
        </CommunicationName>
        <CommunicationBoxCategory>
          {category === undefined ? "카테고리" : category}
        </CommunicationBoxCategory>
        <ChatTime>5분 전</ChatTime>
      </div>
    </>
  );
};

export default Profile;
