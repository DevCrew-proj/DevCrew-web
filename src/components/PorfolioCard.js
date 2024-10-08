import React from "react";
import styled from "styled-components";
import icArrowRightUp from "../assets/image/icArrowRightUp.svg";

const Portfolio = styled.div`
  width: fit-content;
  display: flex;
  gap: 27.13px;
  padding: 22.75px 18.38px;
  background-color: rgba(47, 79, 79, 0.6);
  border: 1px solid #dadada;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
`;

const Thumbnail = styled.img`
  width: 143.5px;
  height: 143.5px;
  background: #ffffff;
  border-radius: 20px;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 175px;
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
  margin-bottom: 6px;
`;

const PortfolioInfo1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PortfolioInfo2 = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  padding-top: 6px;
  float: bottom;
  border-top: 1px solid #dadada;
  align-items: flex-start;
`;

const IcArrowRightUp = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 4px;
`;

export const PortfolioCard = ({ onClick, data }) => {
  return (
    <>
      <Portfolio onClick={onClick}>
        <Thumbnail src={data.images[0]} />
        <InfoWrapper>
          <PortfolioInfo1>
            <PortfolioTitle>{data.projectName}</PortfolioTitle>
            <Chip>{data.tag}</Chip>
            <Description>{data.oneLineSummary}</Description>
          </PortfolioInfo1>
          <PortfolioInfo2>
            <Description>{data.teamName}</Description>
            <Description>{data.duration}</Description>
            <IcArrowRightUp src={icArrowRightUp} />
          </PortfolioInfo2>
        </InfoWrapper>
      </Portfolio>
    </>
  );
};
