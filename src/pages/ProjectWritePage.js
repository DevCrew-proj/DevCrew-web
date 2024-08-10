import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import { useState, useRef } from "react";
import addfile from "../assets/image/AddFile.svg";
import icChevronDown from "../assets/image/icChevronDown.svg";

const Layout = styled.div`
  width: 1920px;
`;

const Title = styled.div`
  color: var(--Gray-zip_gray800, #373737);
  font-family: AppleSDGothicNeoB00;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 170px;
  margin-left: 292px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 282px;
  margin-top: 78px;
  width: 60%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #97a7a7;
  width: 1356px;
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
  width: 1313px;
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
  margin-top: 23px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 280px;
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
  min-width: 100%;
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
  width: 160.562px;
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
  margin-left: 505px;
  margin-bottom: 117px;
  cursor: pointer;
`;

const Button2 = styled.button`
  width: 160.562px;
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

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.button`
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background: #829595;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 58px;
  padding: 15px 17px 15px 16px;
  margin-top: 22px;
  margin-left: 27px;
`;

const AddTitle = styled.div`
  color: #000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 101px;
  //margin-left : 293px;
`;

const ProjectWritePage = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectImage: null,
    teamName: "",
    period: "",
    projectField: "창업",
    projects: "",
    roles: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "projectImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (value) => {
    setFormData({ ...formData, projectField: value });
    setDropdownOpen(false);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
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
              name="projectTitle"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>프로젝트 이미지 *</Label>
            <FileInput
              type="file"
              name="projectImage"
              ref={fileInputRef}
              onChange={handleChange}
              required
            />
            <FileButton type="button" onClick={handleFileClick}>
              <img src={addfile} alt="파일 추가" style={{ marginRight: 8 }} />
              파일추가
            </FileButton>
          </FormField>
          <FormField>
            <Label>팀명 *</Label>
            <Input
              type="text"
              name="teamName"
              value={formData.contestName}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>기간 *</Label>
            <Input
              type="text"
              name="period"
              value={formData.organizingBody}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>분야 *</Label>
            <DropdownContainer>
              <DropdownButton onClick={handleDropdownClick}>
                {formData.projectField}
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
                <DropdownItem onClick={() => handleItemClick("데이터분석")}>
                  데이터분석
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
            name="projects"
            placeholder="프로젝트 내용을 요약하여 입력해 주세요"
            value={formData.projects}
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
          <Button2 type="reset">등록취소</Button2>
        </form>
      </FormContainer>
      <Bottombar />
    </Layout>
  );
};

export default ProjectWritePage;
