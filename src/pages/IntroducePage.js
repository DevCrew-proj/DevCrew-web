import React from "react";
import styled from "styled-components";
import Topbar2 from "../components/Topbar3";
import icPermIdentity from "../assets/image/icPermIdentity.svg";
import icWriteNote from "../assets/image/icWriteNote.svg";
import { IntroduceInput } from "../components/IntroduceInput";
import { DropdownInput } from "../components/DropdownInput";
import { InputLabel } from "../components/InputLabel";
import { GenderDropdownInput } from "../components/GenderDropdownInput";
import { useForm } from "react-hook-form";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1335px;
  margin-top: 150px;
  margin-bottom: 185px;
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
  width: 275px;
  height: 288px;
  margin: 0px 50px;
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
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const IntroducePage = () => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  return (
    <>
      <Layout>
        <Topbar2 />
        <Container>
          <TitleContainer>
            <IcPermIdentity src={icPermIdentity} />
            <Title>기본 정보</Title>
          </TitleContainer>
          {/* 입력 폼 시작 */}
          <FormContainer onSubmit={alert("작성완료")}>
            <ProfileContainer>
              <ProfileWrapper>
                <LabelContainer>
                  <InputLabel labelText="사진" />
                  <IcProfile />
                </LabelContainer>
                <InputContainer>
                  <IntroduceInput type="text" labelText="이름" />
                  <GenderDropdownInput />
                  <IntroduceInput
                    labelText="전화번호"
                    placeholder="010-1234-5678"
                  />
                  <IntroduceInput
                    {...register("email", {
                      required: "이메일은 필수 입력입니다",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                        message: "이메일 형식이 올바르지 않습니다",
                      },
                    })}
                    type="email"
                    labelText="이메일"
                  />
                </InputContainer>
              </ProfileWrapper>
              <InputContainer>
                <DropDownContainer>
                  <IntroduceInput type="text" labelText="고등학교" />
                  <DropdownInput />
                </DropDownContainer>
                <DropDownContainer>
                  <IntroduceInput type="text" labelText="대학교" />
                  <DropdownInput />
                </DropDownContainer>
              </InputContainer>
            </ProfileContainer>
            <NoteContainer>
              <TitleContainer>
                <IcPermIdentity src={icWriteNote} />
                <Title>자기소개 작성</Title>
              </TitleContainer>
              <NoteInput type="text" placeholder="자기소개를 입력해 주세요." />
            </NoteContainer>
            <InfoRegisterBtn type="submit" value="정보 등록" />
          </FormContainer>
        </Container>
      </Layout>
    </>
  );
};

export default IntroducePage;
