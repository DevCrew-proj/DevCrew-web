import React, { useState } from "react";
import styled from "styled-components";
import AddFile from "../assets/image/AddFile.svg";
import DropdownArrow from "../assets/image/DropdownArrow.svg";
import DropUpArrow from "../assets/image/DropUpArrow.svg";

const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 1920px;
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
`;

const CancelButtonText = styled.span`
    word-break: break-word;
    font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
    font-weight: var(--headingh-2, 400);
    font-size: 25px;
    color: #5d6c6f;
`;

const AddFileButton = styled.div`
    border-radius: 8px;
    background-color: #829595;
    margin: 10px 0 0 40px;
    display: flex;
    flex-direction: row;
    padding: 15px 13.4px 15px 16px;
    width: fit-content;
    box-sizing: border-box;
    align-items: center;
`;

const AddFileIcon = styled.div`
    background-image: url(${AddFile});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 1.5px 7px 1.5px 0;
    width: 25px;
    height: 25px;
`;

const AddFileText = styled.span`
    word-break: break-word;
    font-family: "AppleSDGothicNeoB00", "Roboto Condensed";
    font-weight: var(--bodyregular-4-font-weight, 400);
    font-size: 20px;
    line-height: var(--bodyregular-4-line-height, 1.4);
    color: #ffffff;
`;

const DropdownContainer = styled.div`
    position: relative;
    width: 300px; /* Adjusted to make the dropdown wider */
    margin-left: 40px; /* Adjust as necessary */
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
    width: 40px; /* Adjusted to make more space for text */
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
    padding: 15px 19px;
    cursor: pointer;

    &:hover {
        background-color: #c0c0c0; /* Change as needed */
    }
`;

const TeamCompositionPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("iOS");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
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
                    <FormInput />
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>팀명</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>팀 패스워드</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                    <HelperText>
                        팀으로 가입하기 위해 팀원이 입력해야하는 비밀번호(4자리
                        이상의 숫자)를 입력하여 주십시오.
                    </HelperText>
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>팀 인원</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                    <HelperText>
                        팀장을 포함한 팀 최대 인원 수를 입력하여 주십시오. 0
                        입력시 제한없음으로 설정됩니다.
                    </HelperText>
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>전화번호</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>서비스명</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>서비스 기획안</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <AddFileButton>
                        <AddFileIcon />
                        <AddFileText>파일추가</AddFileText>
                    </AddFileButton>
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>소요 장비 및 SW</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <FormInput />
                </FormRow>
                <FormDivider />
                <FormRow>
                    <FormLabelContainer>
                        <FormLabel>사용 OS</FormLabel>
                        <RequiredMark>*</RequiredMark>
                    </FormLabelContainer>
                    <DropdownContainer>
                        <DropdownButton onClick={toggleDropdown}>
                            <DropdownText>{selectedOption}</DropdownText>
                            <DropdownIcon
                                src={
                                    isDropdownOpen ? DropUpArrow : DropdownArrow
                                }
                                alt="Dropdown Arrow"
                            />
                        </DropdownButton>
                        {isDropdownOpen && (
                            <DropdownList>
                                <DropdownListItem
                                    onClick={() => handleOptionClick("iOS")}
                                >
                                    iOS
                                </DropdownListItem>
                                <DropdownListItem
                                    onClick={() => handleOptionClick("AOS")}
                                >
                                    AOS
                                </DropdownListItem>
                            </DropdownList>
                        )}
                    </DropdownContainer>
                </FormRow>
                <FormDivider />
                <SubmitButtonContainer>
                    <SubmitButton>
                        <SubmitButtonText>신청하기</SubmitButtonText>
                    </SubmitButton>
                    <CancelButton>
                        <CancelButtonText>신청취소</CancelButtonText>
                    </CancelButton>
                </SubmitButtonContainer>
            </InnerContainer>
        </Container>
    );
};

export default TeamCompositionPage;
