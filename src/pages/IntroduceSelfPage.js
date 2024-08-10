import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import icPermIdentity from "../assets/image/icPermIdentity.svg";
import icWriteNote from "../assets/image/icWriteNote.svg";
import { DropdownInput } from "../components/DropdownInput";
import { InputLabel } from "../components/InputLabel";
import { GenderDropdownInput } from "../components/GenderDropdownInput";
import Bottombar from "../components/Bottombar";
import { useState, useRef } from "react";
import icProfileUpload from "../assets/image/icProfileUpload.svg";

const Layout = styled.div`
  width: 1920px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 185px;
`;

const Container2 = styled.div`
  width: 1453px;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 38px;
  margin-bottom: 22px;
  color: #2f4f4f;
`;

const FormContainer = styled.form``;

const ProfileContainer = styled.div`
  padding-bottom: 49px;
  border-bottom: 1px solid #e9e9e9;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 29px;
`;

const IcPermIdentity = styled.img`
  width: 45px;
  height: 45px;
`;

const LabelContainer = styled.div``;

const IcProfile = styled.img`
  width: 250px;
  height: 250px;
  margin: 0px 80px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 62px;
  background-color: #d3dada;
  padding: 72px 63px 20px;
  border-radius: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InputField = styled.div`
  flex: 1 1 calc(50% - 67px);
  box-sizing: border-box;
  margin-bottom: 67px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 19px 18px;
  border-radius: 9px;
  border: none;
  font-size: 20px;
`;

const DropDownContainer = styled.div`
  display: flex;
  gap: 11px;
  flex: 1 1;
`;

const NoteContainer = styled.div`
  margin-top: 106px;
`;

const NoteInput = styled.textarea`
  width: 100%;
  height: 638px;
  box-sizing: border-box;
  padding: 40px 49px;
  background-color: #f7f7f7;
  border-radius: 20px;
  border: none;
  margin-bottom: 57px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: AppleSDGothicNeoL00;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.9px;
  text-align: left;
`;

const InfoRegisterBtn = styled.input`
  position: relative;
  padding: 8px 36px;
  background-color: #5d6c6f;
  color: #ffffff;
  font-size: 25px;
  border-radius: 5px;
  border: none;
  left: 45%;
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

const DropdownField = styled.div`
  position: relative;
  display: inline-block;
  width: 240px;
  margin-top: 33px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 19px 18px;
  font-size: 18px;
  color: #000;
  border: 1px solid #ccc;
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
  margin-top: 7px;
`;

const DropdownItem = styled.div`
  color: #aeaeae;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
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

const IntroduceSelfPage = () => {
  const [formData, setFormData] = useState({
    profileImage: null,
    name: "",
    gender: "성별 선택",
    phoneNumber: "",
    email: "",
    highschool: "",
    highschoolState: "상태",
    university: "",
    universityState: "상태",
    introduceself: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDropdownChange = (dropdown, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [dropdown]: value,
    }));
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
    <>
      <Layout>
        <Topbar />
        <Container>
          <Container2>
            <TitleContainer>
              <IcPermIdentity src={icPermIdentity} />
              <Title>기본 정보</Title>
            </TitleContainer>
            {/* 입력 폼 시작 */}
            <FormContainer onSubmit={handleSubmit}>
              <ProfileContainer>
                <ProfileWrapper>
                  <LabelContainer>
                    <FileInput
                      type="file"
                      name="profileImage"
                      ref={fileInputRef}
                      onChange={handleChange}
                    />
                    <InputLabel labelText="사진" />
                    <IcProfile
                      src={icProfileUpload}
                      alt="프로필 사진 업로드"
                      onClick={handleFileClick}
                      onChange={handleChange}
                    />
                  </LabelContainer>
                  <InputContainer>
                    <InputField>
                      <InputLabel labelText="이름"></InputLabel>
                      <Input
                        type="text"
                        name="name"
                        labelText="이름"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InputField>
                    <GenderDropdownInput
                      name="gender"
                      value={formData.gender}
                      onChange={(value) =>
                        handleDropdownChange("gender", value)
                      }
                    />
                    <InputField>
                      <InputLabel labelText="전화번호"></InputLabel>
                      <Input
                        name="phoneNumber"
                        placeholder="010-1234-5678"
                        onChange={handleChange}
                      />
                    </InputField>
                    <InputField>
                      <InputLabel labelText="이메일"></InputLabel>
                      <Input
                        type="email"
                        name="email"
                        labelText="이메일"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </InputField>
                  </InputContainer>
                </ProfileWrapper>
                <InputContainer>
                  <DropDownContainer>
                    <InputField>
                      <InputLabel labelText="고등학교"></InputLabel>
                      <Input
                        type="text"
                        name="highschool"
                        labelText="고등학교"
                        value={formData.highschool}
                        onChange={handleChange}
                      />
                    </InputField>
                    <DropdownInput
                      name="highschoolState"
                      value={formData.highschoolState}
                      onChange={(value) =>
                        handleDropdownChange("highschoolState", value)
                      }
                    />
                  </DropDownContainer>
                  <DropDownContainer>
                    <InputField>
                      <InputLabel labelText="대학교"></InputLabel>
                      <Input
                        type="text"
                        name="university"
                        labelText="대학교"
                        value={formData.university}
                        onChange={handleChange}
                      />
                    </InputField>
                    <DropdownInput
                      name="universityState"
                      value={formData.universityState}
                      onChange={(value) =>
                        handleDropdownChange("universityState", value)
                      }
                    />
                  </DropDownContainer>
                </InputContainer>
              </ProfileContainer>
              <NoteContainer>
                <TitleContainer>
                  <IcPermIdentity src={icWriteNote} />
                  <Title>자기소개 작성</Title>
                </TitleContainer>
                <NoteInput
                  type="text"
                  name="introduceself"
                  placeholder="자기소개를 입력해 주세요."
                  value={formData.introduceself}
                  onChange={handleChange}
                />
              </NoteContainer>
              <InfoRegisterBtn type="submit" value="정보 등록" />
            </FormContainer>
          </Container2>
        </Container>
        <Bottombar />
      </Layout>
    </>
  );
};

export default IntroduceSelfPage;
