import React from "react";
import styled from "styled-components";
import Topbar2 from "../components/Topbar3";
import { PortfolioCard } from "../components/PorfolioCard";

const Layout = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 143px;
  padding-bottom: 79px;
  border-bottom: 1px solid #e9e9e9;
`;

const Profile = styled.div`
  // background: url('');
  background: gray;
  width: 535px;
  height: 658px;
`;

const InfoContainer = styled.div`
  margin-left: 82px;
`;

const InfoWrapper = styled.div`
  margin-left: 32px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
`;

const Information = styled.p`
  font-size: 20px;
  width: 782px;
`;

const ProfileWriteBtn = styled.button`
  background: rgba(0, 0, 0, 0.7);
  padding: 13px 24px;
  margin-top: 79px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
`;

const PortfolioContainer = styled.div`
  margin-top: 96px;
  margin-bottom: 80px;
`;

const PortfolioNav = styled.ul``;

const PortfolioWrapper = styled.div`
  width: 1363px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;

const PortfolioPage = () => {
  return (
    <>
      <Layout>
        <Topbar2 />
        <Container>
          <ProfileContainer>
            <Profile />
            <InfoContainer>
              <Subtitle>Contact</Subtitle>
              <InfoWrapper>
                <Information>전화번호: 010-1234-5678</Information>
                <Information>이메일: abcde123@gmail.com</Information>
                <Information>SNS: ililil1234</Information>
                <Information>직무: PM</Information>
              </InfoWrapper>
              <Subtitle>Education</Subtitle>
              <InfoWrapper>
                <Information>2020.02: 떡잎고등학교 졸업</Information>
                <Information>2024.02: 서울대학교 경영학사</Information>
              </InfoWrapper>
              <Subtitle>About me</Subtitle>
              <InfoWrapper>
                <Information>안녕하세요 신짱구입니다.</Information>
                <Information>
                  다양한 사람들과 협업하는 것을 좋아하며, 함께 기획해나가는
                  느낌을 들 수 있게 만들고 싶어하는 PM입니다. 많은 사람들이
                  서비스를 편하게 이용하며 함께 상생하는 것을 목표로 합니다.
                  저와 함께 모두가 상생하는 프로젝트를 만들어가고 싶으신 분들을
                  찾고 싶습니다. 함께 성장해나가는 프로젝트가 될 수 있게
                  노력하겠습니다.
                </Information>
              </InfoWrapper>
              <ProfileWriteBtn>자기소개 작성</ProfileWriteBtn>
            </InfoContainer>
          </ProfileContainer>
          <PortfolioContainer>
            <PortfolioNav></PortfolioNav>
            <PortfolioWrapper>
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
            </PortfolioWrapper>
          </PortfolioContainer>
        </Container>
      </Layout>
    </>
  );
};
export default PortfolioPage;
