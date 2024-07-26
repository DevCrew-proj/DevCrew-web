import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import logo from "../assets/image/logowhite.svg";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Layout = styled.div`
    width: 1920px;
    height: 1243px;
    background: #778181;
`;

const Logocontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 122px;
    margin-bottom: 30px;
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

const KakaoLoginBtn = styled.button`
    width: 327px;
    height: 47px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #ffe810;
    margin-top: 18px;
    border: none;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: AppleSDGothicNeoB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

const Signin = styled(Link)`
    color: #e0e0e0;
    text-align: center;
    font-family: AppleSDGothicNeoEB00;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-top: 15px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    margin-top: 94px;
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

const KakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
    const REDIRECT_URI = "http://localhost:8080/api/login/oauth2/code/kakao";
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <KakaoLoginBtn onClick={loginHandler}>
            카카오톡으로 로그인
        </KakaoLoginBtn>
    );
};

const LoginPage = () => {
    return (
        <Layout>
            <Topbar />
            <Container>
                <LoginContainer>
                    <Logocontainer>
                        <Logoimg src={logo} alt="logo" />
                    </Logocontainer>
                    <CustomTextField variant="outlined" placeholder="아이디" />
                    <Spacing></Spacing>
                    <CustomTextField
                        variant="outlined"
                        placeholder="비밀번호"
                    />
                    <LoginBtn>
                        <Login to="/login">LOGIN</Login>
                    </LoginBtn>
                    <HorizonLine text="또는" />
                    <KakaoLogin></KakaoLogin>
                    <Signin to="/signin">Dev:Crew 회원가입</Signin>
                </LoginContainer>
            </Container>
        </Layout>
    );
};
export default LoginPage;
