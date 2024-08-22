import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import { useNavigate } from "react-router-dom";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";

const Layout = styled.div`
    width: 1680px;
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

const TextFieldContainer2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 308px;
    padding-right: 70px;
`;

const SigninContainer2 = styled.div`
    display: flex;
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

const CustomFormControlLabel2 = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiTypography-root": {
        color: "rgba(91, 91, 91, 0.89)",
        fontFamily: "AppleSDGothicNeoB00",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    },
}));

const CustomCheckboxWithLabel = ({ label, checked, onChange }) => (
    <CustomFormControlLabel
        control={<CustomCheckbox checked={checked} onChange={onChange} />}
        label={label}
    />
);

const CustomCheckboxWithLabel2 = ({ label, checked, onChange }) => (
    <CustomFormControlLabel2
        control={<CustomCheckbox checked={checked} onChange={onChange} />}
        label={label}
    />
);

const SigninBusinessPage = () => {
    const navigate = useNavigate();

    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedTerms, setCheckedTerms] = useState(false);
    const [checkedPrivacy, setCheckedPrivacy] = useState(false);
    const [checkedMarketingEmail, setCheckedMarketingEmail] = useState(false);
    const [checkedMarketingSms, setCheckedMarketingSms] = useState(false);

    const [managername, setManagername] = useState("");
    const [managernumber, setManagernumber] = useState("");
    const [manageremail, setManageremail] = useState("");

    const [businessname, setBusinessname] = useState("");
    const [businessnumber, setBusinessnumber] = useState("");
    const [businessmanager, setBusinessmanager] = useState("");

    const [businessType, setBusinessType] = useState("");

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
        const isContactInfoValid =
            managername.trim() !== "" &&
            managernumber.trim() !== "" &&
            manageremail.trim() !== "";

        const isCheckboxValid = checkedTerms && checkedPrivacy;

        setIsFormValid(isContactInfoValid && isCheckboxValid);
    }, [
        checkedTerms,
        checkedPrivacy,
        managername,
        managernumber,
        manageremail,
        businessname,
        businessnumber,
        businessmanager,
        businessType,
    ]);

    const handleSubmit = async () => {
        const accessToken = sessionStorage.getItem("auth_token");

        const requestBody = {
            contactNumber: managernumber,
            responsiblePartyName: managername,
            contactEmail: manageremail,
        };

        const companySize = mapBusinessType(businessType);

        if (businessname.trim() !== "") {
            requestBody.companyName = businessname;
        }
        if (businessnumber.trim() !== "") {
            requestBody.businessRegistrationNumber = businessnumber;
        }
        if (businessmanager.trim() !== "") {
            requestBody.ceoName = businessmanager;
        }
        if (companySize !== "선택안함") {
            requestBody.companySize = companySize;
        }

        try {
            const response = await axios.post(
                "https://devcrew.kr/api/signup-company",
                requestBody,
                {
                    headers: {
                        Accept: "*/*",
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Signup successful:", response.data);
            alert("기업회원 가입신청이 완료 되었습니다.");
            navigate("/main");
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    const mapBusinessType = (type) => {
        const typeMap = {
            대기업: "CONGLOMERATE",
            중소기업: "SMALL_AND_MID_SIZE_COMPANY",
            공공기관공기업: "PUBLIC_ENTERPRISE",
            외국계기업: "FOREIGN_ENTERPRISE",
            비영리단체: "NON_PROFIT_ORGANIZATION",
            스타트업: "START_UP",
            금융권: "FINANCE",
            학교: "SCHOOL",
            기타: "ETC",
        };
        return typeMap[type] || "선택안함";
    };

    return (
        <Layout>
            <Topbar />
            <Container>
                <Description>* 표시는 필수 입력란을 나타냅니다</Description>
                <SigninContainer1>
                    <SigninNameContainer>
                        <SigninName>담당자 정보</SigninName>
                        <Spacing4 />
                        <Star>*</Star>
                    </SigninNameContainer>

                    <Spacing49 />

                    <TextFieldContainer>
                        <TextFieldName>담당자 명</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            value={managername}
                            onChange={(e) => setManagername(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>담당자 번호</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            placeholder="-를 제외하고 입력해주세요"
                            value={managernumber}
                            onChange={(e) => setManagernumber(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>담당자 이메일</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            placeholder="ID@example.com"
                            value={manageremail}
                            onChange={(e) => setManageremail(e.target.value)}
                        />
                    </TextFieldContainer>
                </SigninContainer1>

                <Spacing63 />

                <SigninContainer2>
                    <SigninNameContainer>
                        <SigninName>기업 정보</SigninName>
                    </SigninNameContainer>

                    <Spacing49 />

                    <TextFieldContainer>
                        <TextFieldName>기업명</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            value={businessname}
                            onChange={(e) => setBusinessname(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>사업자 등록번호</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            value={businessnumber}
                            onChange={(e) => setBusinessnumber(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>대표자</TextFieldName>
                        <CustomTextField
                            variant="outlined"
                            value={businessmanager}
                            onChange={(e) => setBusinessmanager(e.target.value)}
                        />
                    </TextFieldContainer>

                    <Spacing33 />

                    <TextFieldContainer>
                        <TextFieldName>기업 구분</TextFieldName>
                        <CustomCheckboxWithLabel2
                            label="대기업"
                            checked={businessType === "대기업"}
                            onChange={() => setBusinessType("대기업")}
                        />
                        <CustomCheckboxWithLabel2
                            label="중소기업"
                            checked={businessType === "중소기업"}
                            onChange={() => setBusinessType("중소기업")}
                        />
                        <CustomCheckboxWithLabel2
                            label="공공기관/공기업"
                            checked={businessType === "공공기관공기업"}
                            onChange={() => setBusinessType("공공기관공기업")}
                        />
                        <CustomCheckboxWithLabel2
                            label="외국계 기업"
                            checked={businessType === "외국계기업"}
                            onChange={() => setBusinessType("외국계기업")}
                        />
                    </TextFieldContainer>
                    <Spacing33 />

                    <TextFieldContainer2>
                        <CustomCheckboxWithLabel2
                            label="비영리단체"
                            checked={businessType === "비영리단체"}
                            onChange={() => setBusinessType("비영리단체")}
                        />
                        <CustomCheckboxWithLabel2
                            label="스타트업"
                            checked={businessType === "스타트업"}
                            onChange={() => setBusinessType("스타트업")}
                        />
                        <CustomCheckboxWithLabel2
                            label="금융권"
                            checked={businessType === "금융권"}
                            onChange={() => setBusinessType("금융권")}
                        />
                        <CustomCheckboxWithLabel2
                            label="학교"
                            checked={businessType === "학교"}
                            onChange={() => setBusinessType("학교")}
                        />
                        <CustomCheckboxWithLabel2
                            label="기타"
                            checked={businessType === "기타"}
                            onChange={() => setBusinessType("기타")}
                        />
                    </TextFieldContainer2>
                </SigninContainer2>

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
                    <AbleSubmitBtn onClick={handleSubmit}>
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

export default SigninBusinessPage;
