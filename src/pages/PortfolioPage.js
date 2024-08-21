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
import axios from "axios";
import Pagination from "../components/Pagination";

const Layout = styled.div`
  width: 1680px;
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
  margin-top: 108.5px;
`;

const Profile = styled.img`
  object-fit: cover;
  width: 468.13px;
  height: 575.75px;
  border-radius: 17px;
`;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 684.25px;
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
  margin-bottom: 87px;
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

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    id: "",
    imageUrl: "",
    name: "",
    phoneNumber: "",
    userEmail: "",
    introduction: "",
    highSchool: "",
    college: "",
    gender: "MALE",
    highSchoolStatus: "ENROLLMENT",
    collegeStatus: "ENROLLMENT",
  });
  const [projectData, setProjectData] = useState({
    memberId: 0,
    projectList: [
      {
        id: 0,
        projectName: "",
        images: [],
        tag: "STARTUP",
        summary: "",
        teamName: "",
        duration: "",
      },
    ],
    totalElements: 0,
    totalPages: 0,
  });
  const [modalData, setModalData] = useState({
    id: "",
    projectName: "",
    images: "",
    teamName: "",
    duration: "",
    tag: "STARTUP",
    summary: "",
    roles: "",
  });
  const [projectTag, setProjectTag] = useState("전체"); // 프로젝트 태그
  const [page, setPage] = useState(1); // 프로젝트 카드 페이지
  const [totalpage, setTotalpage] = useState(1); // 프로젝트 카드 총 페이지
  const [isModalOpen, setModalOpen] = useState(false);

  //status mapping
  const mapStatus = (status) => {
    const statusMapping = {
      ENROLLMENT: "재학",
      GRADUATION: "졸업",
      ON_LEAVE: "휴학",
    };
    return statusMapping[status] || "";
  };

  //tags mapping
  const mapTags = (tag) => {
    const tagsMapping = {
      STARTUP: "창업",
      GENERATIVE_AI: "생성형 AI",
      PLATFORM: "플랫폼",
      GAME: "게임",
      OTHERS: "기타",
    };
    return tagsMapping[tag] || "";
  };

  //임시 액세스 토큰
  const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcyNDM0MjczOCwiZW1haWwiOiJkdWppMTIzNEBkYXVtLm5ldCJ9.bhWigDdqkIpOoq3Ixrg0GGvB2pAYBjyqbplc53EEdHtcL9tFjQ8BT6SsNO5chI4gC8JUdxcR65450EfBZfb2Bw`;

  const getProfileData = async () => {
    try {
      const response = await axios.get(`https://devcrew.kr/api/v1/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data.data;
      data.highSchoolStatus = mapStatus(data.highSchoolStatus);
      data.collegeStatus = mapStatus(data.collegeStatus);

      setProfileData(data);
    } catch (error) {
      console.error(error);
    }
  };

  //전체 프로젝트 데이터 받아오기
  const getProjectDataAll = async () => {
    try {
      const response = await axios.get(
        `https://devcrew.kr/api/v1/projects/all?page=${page}&size=9`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data.data.projectList;
      data.map((data) => (data.tag = mapTags(data.tag)));

      setProjectData(data);
      setTotalpage(response.data.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  //태그별 프로젝트 데이터 받아오기
  const getProjectDataByTag = async () => {
    try {
      const response = await axios.get(
        `https://devcrew.kr/api/v1/projects?page=${page}&size=9&projectTag=${projectTag}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data.data.projectList;
      data.map((data) => (data.tag = mapTags(data.tag)));

      setProjectData(data);
      setTotalpage(response.data.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  //개별 프로젝트 데이터 받아오기
  const getModalData = async (projectId) => {
    try {
      const response = await axios.get(
        `https://devcrew.kr/api/v1/projects/${projectId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = response.data.data;

      setModalData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (projectId) => {
    getModalData(projectId);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleMenuClick = (tag) => {
    setProjectTag(tag);
    setPage(1);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    if (projectTag === "전체") {
      getProjectDataAll();
    } else {
      getProjectDataByTag(projectTag);
    }
  }, [projectTag, page]);

  return (
    <>
      <Layout>
        <Topbar />
        <Container>
          <ProfileContainer>
            <Profile src={profileData.imageUrl} />
            <InfoContainer>
              <InfoWrapper>
                <Subtitle>Contact</Subtitle>
                <Information>전화번호: {profileData.phoneNumber}</Information>
                <Information>이메일: {profileData.userEmail}</Information>
                {/* <Information>직무: PM</Information> */}
              </InfoWrapper>
              <InfoWrapper>
                <Subtitle>Education</Subtitle>
                <Information>
                  {/* 2020.02:  */}
                  {profileData.highSchool} {profileData.highSchoolStatus}
                </Information>
                <Information>
                  {/* 2024.02:  */}
                  {profileData.college} {profileData.collegeStatus}
                </Information>
              </InfoWrapper>
              <InfoWrapper>
                <Subtitle>About me</Subtitle>
                <Information>안녕하세요 {profileData.name}입니다.</Information>
                <Information>{profileData.introduction}</Information>
              </InfoWrapper>
              <ProfileWriteBtn onClick={() => navigate(`/introduceself`)}>
                자기소개 작성
              </ProfileWriteBtn>
            </InfoContainer>
          </ProfileContainer>
          <PortfolioContainer>
            <MenuContainer>
              <Menu
                active={projectTag === "전체"}
                onClick={() => handleMenuClick("전체")}
              >
                전체
              </Menu>
              <Menu
                active={projectTag === "STARTUP"}
                onClick={() => handleMenuClick("STARTUP")}
              >
                창업
              </Menu>
              <Menu
                active={projectTag === "GENERATIVE_AI"}
                onClick={() => handleMenuClick("GENERATIVE_AI")}
              >
                생성형 AI
              </Menu>
              <Menu
                active={projectTag === "PLATFORM"}
                onClick={() => handleMenuClick("PLATFORM")}
              >
                플랫폼
              </Menu>
              <Menu
                active={projectTag === "GAME"}
                onClick={() => handleMenuClick("GAME")}
              >
                게임
              </Menu>
              <Menu
                active={projectTag === "OTHERS"}
                onClick={() => handleMenuClick("OTHERS")}
              >
                기타
              </Menu>
            </MenuContainer>

            <PortfolioWrapper>
              {Array.isArray(projectData) && projectData.length > 0 ? (
                projectData.map((item) => (
                  <PortfolioCard
                    key={item.id}
                    onClick={() => openModal(item.id)}
                    data={item}
                  />
                ))
              ) : (
                <></>
              )}
            </PortfolioWrapper>

            <Upload onClick={() => navigate(`/projectWrite`)}>
              업로드
              <Vector src={vector} alt="화살표" />
            </Upload>
            <PortfolioModal
              isOpen={isModalOpen}
              onClose={closeModal}
              data={modalData}
            />
            <Pagination
              page={page}
              totalPages={totalpage}
              setPage={setPage}
              category={projectTag}
            />
          </PortfolioContainer>
        </Container>
        <Bottombar />
      </Layout>
    </>
  );
};
export default PortfolioPage;
