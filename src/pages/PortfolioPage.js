import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import { PortfolioCard } from "../components/PorfolioCard";
import { useNavigate } from "react-router-dom";
import Bottombar from "../components/Bottombar";
import vector from "../assets/image/vector.svg";
import vectors from "../assets/image/vector2.svg";
import PortfolioModal from "../components/PortfolioModal";

const Layout = styled.div`
  width: 1920px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 250px;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 143px;
`;

const Profile = styled.div`
  // background: url('');
  background: gray;
  width: 535px;
  height: 658px;
  border-radius: 17px;
`;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-left: 17px;
  background-color: rgba(217, 217, 217, 0.2);
  padding: 38px 60px;
  border-radius: 17px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const InfoWrapper = styled.div``;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #2f4f4f;
  text-decoration: underline;
  margin: 0;
  margin-bottom: 24px;
`;

const Information = styled.p`
  width: 782px;
  margin: 0;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 300;
  line-height: 23.87px;
  text-align: left;
`;

const ProfileWriteBtn = styled.button`
  position: absolute;
  top: 48px;
  right: 61px;
  background-color: #2f4f4f;
  padding: 13px 24px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border-radius: 999px;
`;

const PortfolioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 80px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-top: 103px;
  gap: 100px;
`;

const Menu = styled.div`
  color: #2e4f4f;
  font-family: AppleSDGothicNeoM00;
  font-size: 30px;
  position: relative;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => (props.active ? "#2E4F4F" : "#B8B8B8")};
  &::before {
    content: "";
    position: absolute;
    top: -21px;
    left: 50%;
    transform: translateX(-50%);
    width: 93px;
    height: 8px;
    background: #2e4f4f;
    box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.12);
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

const PortfolioWrapper = styled.div`
  width: 1363px;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 97px;
`;

const Upload = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 16px 26px;
  border-radius: 999px;
  background: var(--main, #2f4f4f);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
`;

const Vector = styled.img`
  margin-left: 9px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 116px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const PageButton = styled.button`
  width: 34px;
  height: 34px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#2e4f4f" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#2e4f4f")};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #2e4f4f;
    color: #fff;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PortfolioPage = () => {
  const navigate = useNavigate();
  const itemsPerPage = 9; // 한 페이지에 보여줄 아이템 수
  const [selectedTab, setSelectedTab] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const searchData = Array.from({ length: 37 }, (_, index) => ({
    title: "아트페스타",
    type: "플랫폼",
    company: "기관명",
    period: "마감중요일",
  }));

  const filterDataByTab = (tab) => {
    if (tab === "전체") {
      return searchData;
    }
    return searchData.filter((item) => item.type === tab);
  };

  const totalPages = Math.ceil(
    filterDataByTab(selectedTab).length / itemsPerPage
  );
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const handlePrev = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const renderPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => handleClick(i)}
        >
          {i}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  const currentData = filterDataByTab(selectedTab).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

  return (
    <>
      <Layout>
        <Topbar />
        <Container>
          <ProfileContainer>
            <Profile />
            <InfoContainer>
              <InfoWrapper>
                <Subtitle>Contact</Subtitle>
                <Information>전화번호: 010-1234-5678</Information>
                <Information>이메일: abcde123@gmail.com</Information>
                <Information>SNS: ililil1234</Information>
                <Information>직무: PM</Information>
              </InfoWrapper>
              <InfoWrapper>
                <Subtitle>Education</Subtitle>
                <Information>2020.02: 떡잎고등학교 졸업</Information>
                <Information>2024.02: 서울대학교 경영학사</Information>
              </InfoWrapper>
              <InfoWrapper>
                <Subtitle>About me</Subtitle>
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
              <ProfileWriteBtn onClick={() => navigate(`/introduceself`)}>
                자기소개 작성
              </ProfileWriteBtn>
            </InfoContainer>
          </ProfileContainer>
          <PortfolioContainer>
            <MenuContainer>
              <Menu
                active={selectedTab === "전체"}
                onClick={() => setSelectedTab("전체")}
              >
                전체
              </Menu>
              <Menu
                active={selectedTab === "생성형 AI"}
                onClick={() => setSelectedTab("생성형 AI")}
              >
                생성형 AI
              </Menu>
              <Menu
                active={selectedTab === "플랫폼"}
                onClick={() => setSelectedTab("플랫폼")}
              >
                플랫폼
              </Menu>
              <Menu
                active={selectedTab === "데이터 분석"}
                onClick={() => setSelectedTab("데이터 분석")}
              >
                데이터 분석
              </Menu>
              <Menu
                active={selectedTab === "창업"}
                onClick={() => setSelectedTab("창업")}
              >
                창업
              </Menu>
              <Menu
                active={selectedTab === "게임"}
                onClick={() => setSelectedTab("게임")}
              >
                게임
              </Menu>
              <Menu
                active={selectedTab === "기타"}
                onClick={() => setSelectedTab("기타")}
              >
                기타
              </Menu>
            </MenuContainer>

            <PortfolioWrapper>
              {currentData.map((data) => (
                <PortfolioCard onClick={openModal} />
              ))}
            </PortfolioWrapper>

            <Upload onClick={() => navigate(`/portfoilowrite`)}>
              업로드
              <Vector src={vector} alt="화살표" />
            </Upload>
            <PortfolioModal isOpen={isModalOpen} onClose={closeModal} />
            <PaginationContainer>
              <Pagination>
                {renderPageNumbers()}
                <ArrowButton
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  <img src={vectors} alt="Next" />
                </ArrowButton>
              </Pagination>
            </PaginationContainer>
          </PortfolioContainer>
        </Container>
        <Bottombar />
      </Layout>
    </>
  );
};
export default PortfolioPage;
