import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Topbar3 from "../components/Topbar3";
import logo from "../assets/image/logowhite.svg";
import { Link, useNavigate } from "react-router-dom";

const Layout = styled.div`
    width: 1920px;
    height: 1243px;
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        #7f7f7f;
`;
const Title = styled.div`
    color: #fff;
    font-family: AppleSDGothicNeoEB00;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 366px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Logocontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 34px;
`;
const Logoimg = styled.img`
    width: 437px;
    height: 131px;
`;
const TeamMatching = styled.button`
    width: 234px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid #2f4f4f;
    background: #fff;
    margin-top: 56px;
`;

const Business = styled(Link)`
    text-decoration: none;
    color: #2f4f4f;
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const MainPage = () => {
    // const [authToken, setAuthToken] = useState("");

    // useEffect(() => {
    //     const token = sessionStorage.getItem("auth_token");
    //     setAuthToken(token);
    // }, []);

    const navigate = useNavigate();

    useEffect(() => {
        const authToken = sessionStorage.getItem("auth_token");

        console.log("sessionStorage에 저장된 엑세스토큰입니다: " + authToken);

        if (!authToken) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <Layout>
            <Topbar3 />
            <Container>
                <Title>IT 프로젝트를 준비하는 우리를 위한 공간</Title>
                <Logocontainer>
                    <Logoimg src={logo} alt="logo" />
                </Logocontainer>
                <TeamMatching>
                    <Business to="/signinbusiness">
                        기업회원 정보 입력하기
                    </Business>
                </TeamMatching>
            </Container>
        </Layout>
    );
};
export default MainPage;
