import styled from "styled-components";
import Arrow from "../assets/image/arrow3.svg";

const CommunicationSideBarContainer = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const CommunicationSideContent = styled.span`
  font-family: Pretendard;
  color: #000;
  font-weight: 400;
  font-size: 20px;
  text-align: center;

  :last-child {
    display: block;
    float: right;
  }
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 18px;
  margin: 3px 0 0 10px;
  transform: rotate(90deg);
  // transition: transform 0.3s ease-in-out;
  display: block;
`;

const CommunicationSideBar = ({ search }) => {
  return (
    <CommunicationSideBarContainer>
      <CommunicationSideContent>검색결과 {search}건</CommunicationSideContent>
      <CommunicationSideContent>
        최신순
        <ArrowImg src={Arrow} alt='Arrow' />
      </CommunicationSideContent>
    </CommunicationSideBarContainer>
  );
};

export default CommunicationSideBar;
