import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import { useState } from "react";
import icChevronDown from "../assets/image/icChevronDown.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImageUpload2 from "../components/ImageUpload2";

const Layout = styled.div`
  width: 1680px;
`;

const Title = styled.div`
  color: var(--Gray-zip_gray800, #373737);
  font-family: AppleSDGothicNeoB00;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 148.75px;
  margin-left: 255.5px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 246.75px;
  margin-top: 78px;
  width: 50%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #97a7a7;
  width: 1191.75px;
  &:last-child {
    border: 1px solid #97a7a7;
  }
`;

const Label = styled.label`
  width: 243px;
  height: 62px;
  flex-shrink: 0;
  background: #f1f1f1;
  color: var(--Gray-zip_gray800, #373737);
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-top: 37px;
  padding-left: 39px;
`;

const Input = styled.input`
  padding: 0 16px;
  font-size: 16px;
  border-radius: 11px;
  border: 1px solid #829595;
  width: 168px;
  height: 52px;
  flex-shrink: 0;
  margin-top: 23px;
  margin-left: 33px;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 1191.75px;
  height: 315px;
  padding: 40px 0 0 49px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #f7f7f7;
  color: #8f8f8f;
  font-family: AppleSDGothicNeoL00;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 41.25px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 245px;
  height: 54px;
  margin-top: 23px;
  margin-left: 33px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 54px;
  padding: 20px 16px;
  font-size: 18px;
  color: #000;
  border: 1px solid #829595;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  &:hover {
    border-color: #bbb;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 9px;
  padding: 19px 10px;
  margin-top: 7px;
`;

const DropdownItem = styled.div`
  color: #2f4f4f;
  font-family: AppleSDGothicNeoL00;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 208px;
  height: 55px;
  padding-left: 22px;
  &:hover {
    border-radius: 11px;
    background: rgba(211, 218, 218, 1);
    text-decoration: none;
  }
`;

const IcChevronDown = styled.img`
  width: 12px;
`;

const Button = styled.button`
  width: 140.49px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--sub, #5d6c6f);
  color: #fff;
  text-align: center;
  font-family: AppleSDGothicNeoB00;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 111px;
  margin-left: 470px;
  margin-bottom: 117px;
  cursor: pointer;
`;

const Button2 = styled.button`
  width: 140.49px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #5d6c6f;
  background: #fff;
  color: #5d6c6f;
  text-align: center;
  font-family: AppleSDGothicNeoB00;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 31.44px;
  cursor: pointer;
`;

const AddTitle = styled.div`
  color: #000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 62.13px;
`;

const ProjectWritePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    images: [],
    teamName: "",
    duration: "",
    projectTag: "창업",
    summary: "",
    roles: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 공통 매핑 함수 (양방향)
  const mapTags = (mapping, tag, defaultValue) => {
    if (mapping[tag]) return mapping[tag]; // 영어 -> 한글
    return (
      Object.keys(mapping).find((key) => mapping[key] === tag) || defaultValue
    ); // 한글 -> 영어
  };

  // 매핑 테이블 정의
  const tagsMapping = {
    STARTUP: "창업",
    GENERATIVE_AI: "생성형 AI",
    PLATFORM: "플랫폼",
    GAME: "게임",
    OTHERS: "기타",
  };

  const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcyNDM0MjczOCwiZW1haWwiOiJkdWppMTIzNEBkYXVtLm5ldCJ9.bhWigDdqkIpOoq3Ixrg0GGvB2pAYBjyqbplc53EEdHtcL9tFjQ8BT6SsNO5chI4gC8JUdxcR65450EfBZfb2Bw`;

  //프로젝트 데이터 보내기
  const postProjectData = async () => {
    try {
      const mappedFormData = {
        ...formData,
        projectTag: mapTags(tagsMapping, formData.projectTag, "창업"),
      };

      console.log("Sending data:", mappedFormData);

      const response = await axios.post(
        `https://devcrew.kr/api/v1/projects`,
        mappedFormData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (value) => {
    setFormData({ ...formData, projectTag: value });
    setDropdownOpen(false);
  };

  //폼 제출 함수
  const handleSubmit = (e) => {
    // e.preventDefault();
    setFormData(formData);
    postProjectData();
    navigate(`/portfolio`);
  };

  return (
    <Layout>
      <Topbar />
      <Title>참여 프로젝트 작성</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>프로젝트명 *</Label>
            <Input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>프로젝트 이미지 *</Label>
            <ImageUpload2
              formData={formData}
              setFormData={setFormData}
              apiEndpoint="https://devcrew.kr/api/images/project"
            />
          </FormField>
          <FormField>
            <Label>팀명 *</Label>
            <Input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>기간 *</Label>
            <Input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>분야 *</Label>
            <DropdownContainer>
              <DropdownButton onClick={handleDropdownClick}>
                {formData.projectTag}
                <IcChevronDown src={icChevronDown} />
              </DropdownButton>
              <DropdownContent isOpen={dropdownOpen}>
                <DropdownItem onClick={() => handleItemClick("창업")}>
                  창업
                </DropdownItem>
                <DropdownItem onClick={() => handleItemClick("생성형 AI")}>
                  생성형 AI
                </DropdownItem>
                <DropdownItem onClick={() => handleItemClick("플랫폼")}>
                  플랫폼
                </DropdownItem>
                <DropdownItem onClick={() => handleItemClick("게임")}>
                  게임
                </DropdownItem>
                <DropdownItem onClick={() => handleItemClick("기타")}>
                  기타
                </DropdownItem>
              </DropdownContent>
            </DropdownContainer>
          </FormField>
          <AddTitle>프로젝트 요약</AddTitle>
          <TextArea
            name="summary"
            placeholder="프로젝트 내용을 요약하여 입력해 주세요"
            value={formData.summary}
            onChange={handleChange}
          />
          <AddTitle>역할</AddTitle>
          <TextArea
            name="roles"
            placeholder="본인의 역할을 입력해 주세요"
            value={formData.roles}
            onChange={handleChange}
          />
          <Button type="submit">등록하기</Button>
          <Button2 type="reset" onClick={() => navigate(`/portfolio`)}>
            등록취소
          </Button2>
        </form>
      </FormContainer>
      <Bottombar />
    </Layout>
  );
};

export default ProjectWritePage;
