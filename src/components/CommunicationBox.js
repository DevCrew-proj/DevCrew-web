import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chat from "../assets/image/chat.svg";

const CommunityBoxContainer = styled.div`
  max-width: 1170px;
  max-height: 216px;
  border: 1px solid #829595;
  border-radius: 10px;
  box-shadow: 0px 2px 6px #829595;
  box-sizing: border-box;
  margin-bottom: 18px;
  padding: 25px 110px 25px 30px;
  justify-content: center;
  align-items: center;
`;

const CommunityBoxTitle = styled.h3`
  font-family: Pretendard;
  color: #171717;
  font-weight: 700;
  font-size: 25px;
  text-align: left;
  line-height: 1;
  margin: 0 0 20px;
  letter-spacing: -0.3px;
`;

const CommunityBoxContent = styled.p`
  max-height: 84px;
  font-family: Pretendard;
  color: #6e6e6e;
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  line-height: 1.2;
  margin: 0 0 16px;
  overflow: hidden;
  letter-spacing: -0.8px;
`;

const CommunityBoxCategory = styled.span`
  min-width: 41px;
  height: 17px;
  color: #fff;
  background-color: #5d6c6f;
  border: none;
  border-radius: 5px;
  font-family: AppleSDGothicNeoM00;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 5px 14px 3px;
  margin-right: 5px;
`;

const ChatImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
  vertical-align: middle;
`;

const ChatNum = styled.span`
  height: 13px;
  color: #5d6c6f;
  font-family: AppleSDGothicNeoM00;
  font-size: 10px;
  font-weight: 400;
`;

const CommunicationBox = ({ data, chatNum, category }) => {
  const navigate = useNavigate();
  const domain = window.location.pathname; // 현재 페이지의 url;

  // 해당 박스 클릭 시 data 정보를 CommunicationChat1 페이지로 넘겨줌
  // const handleClick = () => {
  //   if (domain === "/communication1") {
  //     navigate("/communicationChat1", {
  //       state: { data },
  //     });
  //   } else if (domain === "/communication2") {
  //     navigate("/communicationChat2", {
  //       state: { data },
  //     });
  //   } else if (domain === "/communication3") {
  //     navigate("/communicationChat3", {
  //       state: { data },
  //     });
  //   } else if (domain === "/communication4") {
  //     navigate("/communicationChat4", {
  //       state: { data },
  //     });
  //   }
  // };

  return (
    <CommunityBoxContainer
    // onClick={() => {
    //   handleClick();
    // }}
    >
      <CommunityBoxTitle>{data.title}</CommunityBoxTitle>
      <CommunityBoxContent>{data.content}</CommunityBoxContent>
      <div>
        <CommunityBoxCategory>{category}</CommunityBoxCategory>
        <ChatImg src={Chat} alt='Chat' />
        <ChatNum>{chatNum}</ChatNum>
      </div>
    </CommunityBoxContainer>
  );
};

export default CommunicationBox;
