import React from "react";
import styled from "styled-components";
import icX from "../assets/image/icX.svg";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  background: white;
  padding: 118px 145px 118px;
  border-radius: 30px;
  max-width: 962px;
  height: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  left: 44px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const XIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #2f4f4f4d;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h2`
  font-family: AppleSDGothicNeoB00;
  font-size: 40px;
  font-weight: 400;
  line-height: 55.76px;
  text-align: left;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-family: AppleSDGothicNeoB00;
  font-size: 25px;
  font-weight: 400;
  line-height: 34.85px;
  text-align: left;
  color: #565656cc;
`;

const InfoContainer = styled.div``;

const InfoText = styled.p`
  font-family: Inter;
  font-size: 25px;
  font-weight: 500;
  line-height: 30.26px;
  text-align: left;
  color: #565656;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 200px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  object-fit: contain;
`;

const PortfolioModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <XIcon src={icX} />
        </CloseButton>
        <ModalContent>
          <TitleContainer>
            <ProjectTitle>{data.projectName}</ProjectTitle>
            {/* <InfoText>
              IT 프로젝트를 하기 위한 학생들의 참여를 매력적이고, 소중하는
              서비스
            </InfoText> */}
          </TitleContainer>
          <ImageContainer src={data.images[0]} />
          {/* <InfoText>프로젝트 대표 이미지를 넣어주세요</InfoText> */}
          <InfoContainer>
            <SubTitle>요약</SubTitle>
            <InfoText>- {data.summary}</InfoText>
          </InfoContainer>
          <InfoContainer>
            <SubTitle>팀명</SubTitle>
            <InfoText>- {data.teamName}</InfoText>
          </InfoContainer>
          {/* <InfoContainer>
            <SubTitle>역할</SubTitle>
            <InfoText>- {data.roles}</InfoText>
          </InfoContainer> */}
          <InfoContainer>
            <SubTitle>기간</SubTitle>
            <InfoText>- {data.duration}</InfoText>
          </InfoContainer>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default PortfolioModal;
