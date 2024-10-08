import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import { Link } from "react-router-dom";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";

const Layout = styled.div`
    width: 1920px;
    height: 1243px;
    background: #fff;
`;

const CustomTextField = styled(TextField)`
    width: 786px;
    height: 65px;
    flex-shrink: 0;
    border-radius: 9px;
    background: #fff;

    & .MuiInputBase-root {
        height: 100%;
    }

    & .MuiOutlinedInput-root {
        border-radius: 10px;
    }

    & .MuiInputBase-input::selection {
        background: #fff;
    }

    & .MuiInputBase-input::placeholder {
        color: #aeaeae;
        font-family: AppleSDGothicNeoL00;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    & .MuiOutlinedInput-input {
        padding-left: 30px;
        padding-top: 19px;
    }
`;

const AbleSubmitBtn = styled.button`
    width: 169px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--sub, #5d6c6f);
    border: none;
    margin-top: 127px;
    margin-bottom: 170px;
`;

const DisableSubmitBtn = styled.button`
    width: 169px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #b4b4b4;
    border: none;
    margin-top: 127px;
    margin-bottom: 170px;
`;

const Submit = styled.div`
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SigninContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1114px;
    height: 477px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #d3dada;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TextFieldName = styled.div`
    color: var(--Gray-zip_gray800, #373737);
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const SigninName = styled.div`
    color: #2f4f4f;
    font-family: AppleSDGothicNeoEB00;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const Star = styled.div`
    color: var(--Main-zipblue01, #2faceb);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
`;

const SigninNameContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 79px;
    padding-top: 62px;
`;

const CheckboxContainer79 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 79px;
`;

const CheckboxContainer122 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 122px;
`;

const TextFieldContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 85px;
    padding-right: 70px;
`;

const SigninContainer2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1114px;
    height: 635px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #d3dada;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Spacing63 = styled.div`
    height: 63px;
`;

const Spacing33 = styled.div`
    height: 33px;
`;

const Spacing49 = styled.div`
    height: 49px;
`;

const Spacing20 = styled.div`
    height: 20px;
`;

const Spacing4 = styled.div`
    width: 4px;
`;

const Description = styled.div`
    color: #2f4f4f;
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 171px;
    margin-bottom: 16px;
    margin-left: 800px;
`;

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "#2f4f4f",
    "&.Mui-checked": {
        color: "#2f4f4f",
    },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiTypography-root": {
        fontFamily: "AppleSDGothicNeoB00",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "140%",
        color: "#2f4f4f",
    },
}));

const CustomCheckboxWithLabel = ({ label, checked, onChange }) => (
    <CustomFormControlLabel
        control={<CustomCheckbox checked={checked} onChange={onChange} />}
        label={label}
    />
);

const SigninPage = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedTerms, setCheckedTerms] = useState(false);
    const [checkedPrivacy, setCheckedPrivacy] = useState(false);
    const [checkedMarketingEmail, setCheckedMarketingEmail] = useState(false);
    const [checkedMarketingSms, setCheckedMarketingSms] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

    const handleCheckboxChange = (event, setter) => {
        setter(event.target.checked);
    };

    const handleAllCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setCheckedAll(isChecked);
        setCheckedTerms(isChecked);
        setCheckedPrivacy(isChecked);
        setCheckedMarketingEmail(isChecked);
        setCheckedMarketingSms(isChecked);
    };

    useEffect(() => {
        const allChecked =
            checkedTerms &&
            checkedPrivacy &&
            checkedMarketingEmail &&
            checkedMarketingSms;
        setCheckedAll(allChecked);
    }, [
        checkedTerms,
        checkedPrivacy,
        checkedMarketingEmail,
        checkedMarketingSms,
    ]);

    useEffect(() => {
        const isPasswordValid =
            password.length >= 8 &&
            /[a-zA-Z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*]/.test(password);

        const isPasswordMatch = password === passwordConfirm;

        const isBasicInfoValid =
            username.trim() !== "" && isPasswordValid && isPasswordMatch;

        const isCheckboxValid = checkedTerms && checkedPrivacy;

        setIsFormValid(isBasicInfoValid && isCheckboxValid);
    }, [username, password, passwordConfirm, checkedTerms, checkedPrivacy]);

    return (
        <Layout>
            <Topbar />
            <Container>
                <Description>* 표시는 필수 입력란을 나타냅니다</Description>
                <SigninContainer1>
                    <SigninNameContainer>
                        <SigninName>계정 정보</SigninName>
                        <Spacing4 />
                        <Star>*</Star>
                    </SigninNameContainer>

                    <Spacing49 />

                    <TextFieldContainer>
                        <TextFieldName>아이디</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            placeholder="아이디를 입력해주세요"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>비밀번호</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            placeholder="영문, 숫자, 특수문자를 사용하여 8자 이상으로 기입해주세요"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>비밀번호 확인</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            placeholder="다시 한번 입력해주세요"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </TextFieldContainer>
                </SigninContainer1>

                <Spacing63 />

                <SigninContainer1>
                    <SigninNameContainer>
                        <SigninName>약관 동의</SigninName>
                        <Spacing4 />
                        <Star>*</Star>
                    </SigninNameContainer>

                    <Spacing33 />

                    <CheckboxContainer79>
                        <CustomCheckboxWithLabel
                            label="전체 동의"
                            checked={checkedAll}
                            onChange={handleAllCheckboxChange}
                        />
                    </CheckboxContainer79>

                    <Spacing33 />

                    <CheckboxContainer122>
                        <CustomCheckboxWithLabel
                            label="기업회원 이용약관에 동의"
                            checked={checkedTerms}
                            onChange={(event) =>
                                handleCheckboxChange(event, setCheckedTerms)
                            }
                        />
                    </CheckboxContainer122>

                    <Spacing20 />

                    <CheckboxContainer122>
                        <CustomCheckboxWithLabel
                            label="개인정보 수집 및 이용에 동의"
                            checked={checkedPrivacy}
                            onChange={(event) =>
                                handleCheckboxChange(event, setCheckedPrivacy)
                            }
                        />
                    </CheckboxContainer122>

                    <Spacing20 />

                    <CheckboxContainer122>
                        <CustomCheckboxWithLabel
                            label="마케팅 정보 수신 동의ㆍ이메일 (선택)"
                            checked={checkedMarketingEmail}
                            onChange={(event) =>
                                handleCheckboxChange(
                                    event,
                                    setCheckedMarketingEmail
                                )
                            }
                        />
                    </CheckboxContainer122>

                    <Spacing20 />

                    <CheckboxContainer122>
                        <CustomCheckboxWithLabel
                            label="마케팅 정보 수신 동의ㆍSMS / MMS (선택)"
                            checked={checkedMarketingSms}
                            onChange={(event) =>
                                handleCheckboxChange(
                                    event,
                                    setCheckedMarketingSms
                                )
                            }
                        />
                    </CheckboxContainer122>
                </SigninContainer1>

                <Spacing20 />

                {isFormValid ? (
                    <AbleSubmitBtn>
                        <Submit>가입신청 완료</Submit>
                    </AbleSubmitBtn>
                ) : (
                    <DisableSubmitBtn>
                        <Submit>가입신청 완료</Submit>
                    </DisableSubmitBtn>
                )}
            </Container>
            <Bottombar />
        </Layout>
    );
};

export default SigninPage;
