import styled from "styled-components";
import Profile from "./Profile";

const ShowBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ChatCounterBox = styled.div`
  width: 100%;
  text-align: left;
  margin: 0 auto;
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

  &:last-of-type {
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

const ChatBox = ({ chatNum }) => {
  return (
    <ShowBox>
      <ChatCounterBox>답변 {chatNum}</ChatCounterBox>
      <ChatViewBox>
        <ChatProfile>
          <Profile />
        </ChatProfile>
        <ChatContent>
          안녕하세요. 현재 PM 3년 차인 신형만입니다. 스타트업에서 시작해서
          천천히 하다보면 충분히 가능할 것 같아요 화이팅 안녕하세요. 현재 PM 3년
          차인 신형만입니다. 스타트업에서 시작해서 천천히 하다보면 충분히 가능할
          것 같아요 화이팅 안녕하세요. 현재 PM 3년 차인 신형만입니다.
          스타트업에서 시작해서 천천히 하다보면 충분히 가능할 것 같아요 화이팅
        </ChatContent>
      </ChatViewBox>
      <ChatViewBox>
        <ChatProfile>
          <Profile />
        </ChatProfile>
        <ChatContent>
          안녕하세요. 현재 PM 3년 차인 신형만입니다. 스타트업에서 시작해서
          천천히 하다보면 충분히 가능할 것 같아요 화이팅 안녕하세요. 현재 PM 3년
          차인 신형만입니다.
        </ChatContent>
      </ChatViewBox>
    </ShowBox>
  );
};

export default ChatBox;
