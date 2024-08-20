import React, { useEffect } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import logo from "../assets/image/logowhite.svg";
import googleLogo from "../assets/image/google.svg";
import kakaoLogo from "../assets/image/kakao.svg";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
// import axios from "axios";

const Layout = styled.div`
    width: 1920px;
    height: 1243px;
    background: #778181;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Logocontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 161px;
    margin-bottom: 55px;
`;

const Logoimg = styled.img`
    width: 305px;
    height: 91px;
    flex-shrink: 0;
`;

const CustomTextField = styled(TextField)`
    width: 327px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #dcdada;
    background: #fff;

    & .MuiInputBase-root {
        height: 100%;
    }

    & .MuiOutlinedInput-root {
        border-radius: 10px;
    }

    & .MuiInputBase-input::selection {
        background: #dcdada;
    }

    & .MuiInputBase-input::placeholder {
        color: rgba(150, 150, 150, 0.73);
        font-family: AppleSDGothicNeoB00;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    & .MuiOutlinedInput-input {
        padding-left: 17px;
    }
`;

const LoginBtn = styled.button`
    width: 327px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #2e4f4f;
    margin-top: 17px;
    border: none;
`;

const GoogleLoginBtn = styled.button`
    width: 327px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #f7f7f7;

    border: none;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: AppleSDGothicNeoB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    position: absolute;
    left: 20px;
`;

const KakaoLoginBtn = styled.button`
    width: 327px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #ffe810;
    margin-top: 11px;
    border: none;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: AppleSDGothicNeoB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Login = styled(Link)`
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-family: AppleSDGothicNeoEB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const AddBusiness = styled(Link)`
    color: #fff;
    text-align: center;
    font-family: AppleSDGothicNeoEB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-top: 19px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 903px;
    height: 661px;
    flex-shrink: 0;
    border-radius: 24px;
    background: rgba(247, 247, 247, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(13px);
`;

const Spacing = styled.div`
    height: 15px;
`;

const HorizonLine = ({ text }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                width: "327px",
                marginTop: "15px",
            }}
        >
            <div
                style={{
                    flex: 1,
                    borderBottom: "1px solid #DCDADA",
                }}
            />
            <span
                style={{
                    padding: "0 10px",
                    color: "#BEBEBE",
                    fontFamily: "AppleSDGothicNeoB00",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                }}
            >
                {text}
            </span>
            <div
                style={{
                    flex: 1,
                    borderBottom: "1px solid #DCDADA",
                }}
            />
        </div>
    );
};

const GoogleLogin = () => {
    const link = `https://devcrew.kr/api/oauth2/authorization/google`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <GoogleLoginBtn onClick={loginHandler}>
            <Icon src={googleLogo} alt="googleLogo" />
            Google로 로그인
        </GoogleLoginBtn>
    );
};

const KakaoLogin = () => {
    const link = `https://devcrew.kr/api/oauth2/authorization/kakao`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <KakaoLoginBtn onClick={loginHandler}>
            <Icon src={kakaoLogo} alt="kakaoLogo" />
            카카오로 로그인
        </KakaoLoginBtn>
    );
};

// const KakaoLogin = () => {
//     const link = `http://13.124.194.211/api/oauth2/authorization/kakao`;

//     const loginHandler = () => {
//         window.location.href = link;
//     };

//     // useEffect(() => {
//     //     const accessToken = new URL(window.location.href).searchParams.get(
//     //         "code"
//     //     );

//     //     if (accessToken) {
//     //         // access_token을 env 파일의 REACT_APP_G_ACCESS_TOKEN에 저장
//     //         process.env.REACT_APP_G_ACCESS_TOKEN = accessToken;

//     //         console.log("hi");
//     //         // /main 페이지로 이동
//     //         navigate("/main");
//     //     }
//     // }, [navigate]);

//     return (
//         <KakaoLoginBtn onClick={loginHandler}>
//             <Icon src={kakaoLogo} alt="kakaoLogo" />
//             카카오로 로그인
//         </KakaoLoginBtn>
//     );
// };

// const KakaoLogin = () => {
//     const link = `http://13.124.194.211/api/oauth2/authorization/kakao`;
//     const navigate = useNavigate();

//     const loginHandler = () => {
//         window.location.href = link;
//     };

//     const getToken = async () => {
//         const token = new URL(window.location.href).searchParams.get("code");
//         return token;
//     };

//     useEffect(() => {
//         const checkAuth = async () => {
//             const token = await getToken();

//             if (token) {
//                 // access_token을 로컬 스토리지에 저장
//                 localStorage.setItem("access_token", token);

//                 // /main 페이지로 이동
//                 navigate("/main");
//             }
//         };

//         checkAuth();
//     }, [navigate]);

//     return (
//         <KakaoLoginBtn onClick={loginHandler}>
//             <Icon src={kakaoLogo} alt="kakaoLogo" />
//             카카오로 로그인
//         </KakaoLoginBtn>
//     );
// };

const LoginPage = () => {
    return (
        <Layout>
            <Topbar />
            <Container>
                <LoginContainer>
                    <Logocontainer>
                        <Logoimg src={logo} alt="logo" />
                    </Logocontainer>
                    {/* <CustomTextField variant="outlined" placeholder="아이디" />
                    <Spacing></Spacing>
                    <CustomTextField
                        variant="outlined"
                        placeholder="비밀번호"
                        type="password"
                    />
                    <LoginBtn>
                        <Login to="/login">LOGIN</Login>
                    </LoginBtn>
                    <HorizonLine text="또는" /> */}
                    <GoogleLogin></GoogleLogin>
                    <KakaoLogin></KakaoLogin>
                    <AddBusiness to="/signinbusiness">
                        기업 정보 추가하기
                    </AddBusiness>
                </LoginContainer>
            </Container>
            <Bottombar />
        </Layout>
    );
};
export default LoginPage;
