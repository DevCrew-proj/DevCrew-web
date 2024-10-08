import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import DropdownArrow from "../assets/image/DropdownArrow.svg";
import DropUpArrow from "../assets/image/DropUpArrow.svg";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 1920px;
  margin-left: 100px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920.4px;
  height: fit-content;
  box-sizing: border-box;
`;

const FormTitle = styled.div`
  margin: 0 1312.7px 23px 0;
  display: inline-block;
  word-break: break-word;
  font-family: "AppleSDGothicNeoEB00", "Roboto Condensed";
  font-size: 25px;
  line-height: 1.4;
  color: var(--grayzip-gray-800, #373737);
`;

const FormDivider = styled.div`
  background-color: #97a7a7;
  width: 1356px;
  height: 1px;
  margin-left: -90px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 1356px;
  box-sizing: border-box;
  align-items: center;
`;

const FormLabelContainer = styled.div`
  background-color: #f1f1f1;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 32px 0 35px 0;
  width: 280px;
  box-sizing: border-box;
  margin-left: -45px;
  align-items: center;
  justify-content: left;
`;

const FormLabel = styled.div`
  margin: 5px 5.4px 1px 0;
  display: inline-block;
  word-break: break-word;
  font-family: "AppleSDGothicNeoM00", "Roboto Condensed";
  font-size: 20px;
  line-height: 1.4;
  color: var(--grayzip-gray-800, #373737);
  margin-left: 40px;
`;

const RequiredMark = styled.span`
  word-break: break-word;
  font-family: "Pretendard", "Roboto Condensed";
  font-weight: bold;
  font-size: 24px;
  line-height: 1.4;
  color: #2f4f4f;
`;

const FormInput = styled.input`
  border-radius: 11px;
  border: 1px solid #829595;
  width: 201px;
  height: 52px;
  margin-left: 40px;
  margin-top: 10px;
  padding: 0 10px;
  font-family: "AppleSDGothicNeoM00", "Roboto Condensed";
  font-size: 20px;
  color: var(--grayzip-gray-800, #373737);
`;

const HelperText = styled.span`
  font-family: "AppleSDGothicNeoL00", "Roboto Condensed";
  font-weight: 400;
  font-size: 15px;
  line-height: 19.14px;
  color: #777777;
  margin-left: 20px;
  margin-top: 30px;
`;

const SubmitButtonContainer = styled.div`
  border-radius: 5px;
  margin: 51px 1.4px 135px 0;
  display: flex;
  flex-direction: row;
  width: 351px;
  box-sizing: border-box;
`;

const SubmitButton = styled.div`
  border-radius: 5px;
  background-color: #5d6c6f;
  position: relative;
  margin-right: 13px;
  display: flex;
  padding: 8px 0 13px 0;
  width: 169px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SubmitButtonText = styled.span`
  word-break: break-word;
  font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
  font-weight: var(--headingh-2, 400);
  font-size: 25px;
  color: #ffffff;
`;

const CancelButton = styled.div`
  border-radius: 5px;
  border: 1px solid #5d6c6f;
  position: relative;
  display: flex;
  padding: 8px 0 13px 0;
  width: 169px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CancelButtonText = styled.span`
  word-break: break-word;
  font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
  font-weight: var(--headingh-2, 400);
  font-size: 25px;
  color: #5d6c6f;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  margin-left: 40px;
`;

const DropdownButton = styled.div`
  border: 1px solid #829595;
  border-radius: 8px;
  background-color: var(--graywhite, #ffffff);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 19px;
  box-sizing: border-box;
  cursor: pointer;
`;

const DropdownText = styled.span`
  margin: 0 11px 0 0;
  width: 80px;
  word-break: break-word;
  font-family: "AppleSDGothicNeoM00", "Roboto Condensed";
  font-weight: var(--bodyregular-5-font-weight, 400);
  font-size: 16px;
  line-height: var(--bodyregular-5-line-height, 1.4);
  color: var(--grayzip-gray-800, #373737);
`;

const DropdownIcon = styled.img`
  margin: 8px 0;
  width: 12px;
  height: 6px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #829595;
  border-radius: 8px;
  background-color: var(--graywhite, #ffffff);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
`;

const DropdownListItem = styled.li`
  padding: 15px 15px;
  cursor: pointer;

  &:hover {
    background-color: #c0c0c0; 
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #5d6c6f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
  font-size: 20px;
  margin-top: 20px;
`;

const ErrorModalContent = styled(ModalContent)`
  background-color: #ffebeb;
  border: 1px solid #ff0000;
`;

const ApplicationForm = ({ contestId }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    teamName: "",
    teamPassword: "",
    name: "",
    portfolioUrl: "",
    objective: "PM",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = sessionStorage.getItem("auth_token");
    if (accessToken) {
      setToken(accessToken);
    } else {
      alert("Token not found in session storage!");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      objective: option,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async () => {
    console.log("Submitting form data:", {
      contestId: contestId,
      ...formData,
    });

    try {
      const response = await axios.post("https://devcrew.kr/api/v1/teams/apply", {
        contestId: contestId,
        ...formData,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`   
        }
      });

      if (response.status === 200) {
        setIsModalOpen(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setIsErrorModalOpen(true);
      } else {
        console.error("There was an error submitting the form:", error);
      }
    }
  };

  const handleCancel = () => {
    navigate(`/teammatching/${contestId}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/teammatching/${contestId}`);
  };

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <Container>
      <InnerContainer>
        <FormTitle>팀모집 신청서</FormTitle>
        <FormDivider />
        <FormRow>
          <FormLabelContainer>
            <FormLabel>신청자 정보</FormLabel>
            <RequiredMark>*</RequiredMark>
          </FormLabelContainer>
          <FormInput
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormDivider />
        <FormRow>
          <FormLabelContainer>
            <FormLabel>팀 명</FormLabel>
            <RequiredMark>*</RequiredMark>
          </FormLabelContainer>
          <FormInput
            name="teamName"
            value={formData.teamName}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormDivider />
        <FormRow>
          <FormLabelContainer>
            <FormLabel>팀 패스워드</FormLabel>
            <RequiredMark>*</RequiredMark>
          </FormLabelContainer>
          <FormInput
            name="teamPassword"
            value={formData.teamPassword}
            onChange={handleInputChange}
          />
          <HelperText>
            팀으로 가입하기 위해 팀원이 입력해야 하는 비밀번호(4자리 이상의 숫자)를 입력하세요.
          </HelperText>
        </FormRow>
        <FormDivider />
        <FormRow>
          <FormLabelContainer>
            <FormLabel>포트폴리오 링크</FormLabel>
            <RequiredMark>*</RequiredMark>
          </FormLabelContainer>
          <FormInput
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormDivider />
        <FormRow>
          <FormLabelContainer>
            <FormLabel>지원 분야</FormLabel>
            <RequiredMark>*</RequiredMark>
          </FormLabelContainer>
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              <DropdownText>{formData.objective}</DropdownText>
              <DropdownIcon
                src={isDropdownOpen ? DropUpArrow : DropdownArrow}
                alt="Dropdown Arrow"
              />
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownList>
                <DropdownListItem onClick={() => handleOptionClick("PM")}>
                  PM
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("DESIGN")}>
                  DESIGN
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("FE_IOS")}>
                  FE_IOS
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("FE_AOS")}>
                  FE_AOS
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("FE_WEB")}>
                  FE_WEB
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("BE")}>
                  BE
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("데이터분석")}>
                  데이터분석
                </DropdownListItem>
                <DropdownListItem onClick={() => handleOptionClick("AI")}>
                  AI
                </DropdownListItem>
              </DropdownList>
            )}
          </DropdownContainer>
        </FormRow>
        <FormDivider />
        <SubmitButtonContainer>
          <SubmitButton onClick={handleSubmit}>
            <SubmitButtonText>신청하기</SubmitButtonText>
          </SubmitButton>
          <CancelButton onClick={handleCancel}>
            <CancelButtonText>신청취소</CancelButtonText>
          </CancelButton>
        </SubmitButtonContainer>
      </InnerContainer>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>신청 완료되었습니다!</h2>
            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
      {isErrorModalOpen && (
        <ModalOverlay>
          <ErrorModalContent>
            <h2>팀 패스워드가 일치하지 않습니다!</h2>
            <CloseButton onClick={handleCloseErrorModal}>닫기</CloseButton>
          </ErrorModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default ApplicationForm;
