import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../assets/image/arrow.svg";

const Layout = styled.div`
    width: 1920px;
    height: 116px;
    display: flex;
    flex-direction: row;
    background: #f7f7f7;
`;

const Logocontainer = styled.div`
    width: 180px;
    height: 54px;
    margin-left: 55px;
    margin-top: 31px;
    margin-right: 64px;
`;

const Logoimg = styled.img``;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MenuItem = styled(Link)`
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? "black" : "#B8B8B8;")};
    margin-top: 56px;
    margin-right: 56px;
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 28px;
    //border-bottom: ${({ isActive }) => (isActive ? "8px solid #2E4F4F" : "none")};
    &::after {
        content: "";
        display: ${({ isActive }) => (isActive ? "block" : "none")};
        position: absolute;
        width: 93px;
        height: 8px;
       
        
        background-color: #2E4F4F;
        //top: 100%; /* 부모 요소의 아래에 위치하도록 설정 */
        margin-top: 24px; /* 원하는 margin-top 값을 설정 */
    }
`;

const Dropdown = styled.div`
    position: relative;
    //margin-top: 56px;
    display: inline-block;
    &:hover .dropdown-content {
        display: block;
    }
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #fff;
    width: 118px;
    margin-top: 17px;
    border: 1px solid #829595;
    z-index: 1;
    left: 60%;
    transform: translateX(-85%);
    text-align: center;
    border-radius: 8px;
    color: #2f4f4f;
    font-family: AppleSDGothicNeoM00;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    & a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        &:hover {
            background-color: #f1f1f1;
            border-radius: 11px;
            text-decoration: none;
        }
    }
`;

const Arrow = styled.img`
    margin-left: 5px;
    width: 19px;
    height: 19px;
`;

const DropdownItem = styled(Link)``;

const Auth = styled.div`
    display: flex;
    margin-left: 750px;
`;

const Company = styled(Link)`
    width: 101px;
    height: 38px;
    border-radius: 5px;
    background: #fff;
    margin-top: 51px;
    color: #2f4f4f;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Individual = styled(Link)`
    width: 101px;
    height: 38px;
    border-radius: 5px;
    background: #fff;
    margin-right: 55px;
    margin-left: 11px;
    margin-top: 51px;
    color: #2f4f4f;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Topbar = () => {
    const location = useLocation();

    return (
        <Layout>
            <Logocontainer>
                <Link to="/">
                    <Logoimg src={logo} alt="logo" />
                </Link>
            </Logocontainer>
            <MenuContainer>
                <MenuItem to="/devcrewintro" isActive={location.pathname === "/devcrewintro"}>
                    데브크루 소개
                </MenuItem>
                <MenuItem to="/portfolio" isActive={location.pathname === "/portfolio"}>
                    포트폴리오
                </MenuItem>
                <MenuItem to="/team1" isActive={location.pathname === "/team1"}>
                    팀 매칭
                </MenuItem>
                <Dropdown>
                    <MenuItem as="div" isActive={location.pathname.startsWith("/communication")}>
                        소통
                        <Arrow src={ArrowIcon} alt="dropdown arrow" />
                    </MenuItem>
                    <DropdownContent className="dropdown-content">
                        <DropdownItem to="/communication1">현직자 조언</DropdownItem>
                        <DropdownItem to="/communication2">기획 리뷰</DropdownItem>
                        <DropdownItem to="/communication3">코드 리뷰</DropdownItem>
                        <DropdownItem to="/communication4">디자인 리뷰</DropdownItem>
                    </DropdownContent>
                </Dropdown>
                <Auth>
                    <Company to="/signinbusiness">기업 로그인</Company>
                    <Individual to="/login">개인 회원</Individual>
                </Auth>
            </MenuContainer>
        </Layout>
    );
};

export default Topbar;

