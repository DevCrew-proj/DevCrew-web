import React from "react";
import styled from "styled-components";
import icArrowRightUp from "../assets/image/icArrowRightUp.svg";

const Portfolio = styled.div`
  width: fit-content;
  display: flex;
  gap: 28px;
  padding: 26px 21px;
  background-color: rgba(47, 79, 79, 0.6);
  border: 1px solid #dadada;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
`;

const Thumbnail = styled.div`
  width: 164px;
  height: 164px;
  background: #ffffff;
  border-radius: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
`;

const PortfolioTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const Chip = styled.div`
  width: fit-content;
  padding: 4.5px 9.5px;
  background-color: #ffffff;
  color: rgba(130, 149, 149, 1);
  font-size: 12px;
  font-weight: 700;
  border-radius: 999px;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

const PortfolioInfo1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PortfolioInfo2 = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  float: bottom;
  border-top: 1px solid #dadada;
  align-items: center;
`;

const IcArrowRightUp = styled.img`
  width: 10px;
  height: 10px;
`;

export const PortfolioCard = () => {
  return (
    <>
      <Portfolio>
        <Thumbnail />
        <InfoWrapper>
          <PortfolioInfo1>
            <PortfolioTitle>이사.ZIP</PortfolioTitle>
            <Chip>플랫폼</Chip>
            <Description>
              이사, 부동산에 스트레스를 받아하는 사회초년생을 위한 서비스
            </Description>
          </PortfolioInfo1>
          <PortfolioInfo2>
            <Description>UMC 데모데이</Description>
            <Description>2023/10/2</Description>
            <IcArrowRightUp src={icArrowRightUp} />
          </PortfolioInfo2>
        </InfoWrapper>
      </Portfolio>
    </>
  );
};
