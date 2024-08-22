import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../assets/image/arrow.svg";
import axios from "axios";

const Layout = styled.div`
    width: 1584px; // padding 값까지 포함하여 1680px
    display: flex;
    flex-direction: row;
    background: #f7f7f7;
    padding: 26px 48px 20px;
`;

const Logocontainer = styled.div`
    width: 158px;
    height: 48px;
    margin-right: 56px;
`;

const Logoimg = styled.img`
    width: 100%;
    display: block;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;

    & > a:first-child {
        margin-right: 46px;
    }

    & > a:nth-child(2) {
        margin-right: 24px;
    }

    & > a:last-of-type {
        margin-right: 12px;
    }
`;

const MenuItem = styled(Link)`
    width: 100px;
    text-align: center;
    text-decoration: none;
    color: ${({ isActive }) => (isActive ? "black" : "#B8B8B8;")};
    font-family: AppleSDGothicNeoB00;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 26px;
    height: 28px;
    //border-bottom: ${({ isActive }) =>
        isActive ? "8px solid #2E4F4F" : "none"};
    &::after {
        content: "";
        display: ${({ isActive }) => (isActive ? "block" : "none")};
        position: absolute;
        width: 100px;
        height: 8px;

        background-color: #2e4f4f;
        //top: 100%; /* 부모 요소의 아래에 위치하도록 설정 */
        margin-top: 14px; /* 원하는 margin-top 값을 설정 */
    }
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover .dropdown-content {
        display: block;
    }
`;

const Dropbtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 16px;
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #fff;
    width: 118px;
    border: 1px solid #829595;
    z-index: 1;
    left: 90%;
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
    margin-top: 21px;
    margin-left: 700px;
    width: 158px;
    height: 33px;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #2f4f4f;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Topbar3 = () => {
    const accessToken = sessionStorage.getItem("auth_token");
    console.log(
        "Topbar3의 sessionStorage에 저장된 엑세스토큰입니다: " + accessToken
    );
    console.log("hihi");

    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://devcrew.kr/api/name",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: "*/*",
                        },
                    }
                );
                console.log("hihiin useeffect");

                console.log("API Response:", response);
                console.log("Data:", response.data);
                console.log("Name:", response.data.data.name);

                if (response.data && response.data.data) {
                    setUsername(response.data.data.name);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setUsername("신짱구");
            }
        };

        fetchData();
    }, []);

    // const navigate = useNavigate();

    // const handleAuthClick = () => {
    //     navigate("/signinbusiness");
    // };
    const location = useLocation();

    return (
        <Layout>
            <Logocontainer>
                <Link to="/">
                    <Logoimg src={logo} alt="logo" />
                </Link>
            </Logocontainer>
            <MenuContainer>
                <MenuItem
                    to="/devcrewintro"
                    isActive={location.pathname === "/devcrewintro"}
                >
                    데브크루 소개
                </MenuItem>
                <MenuItem
                    to="/portfolio"
                    isActive={location.pathname === "/portfolio"}
                >
                    포트폴리오
                </MenuItem>
                <MenuItem to="/team1" isActive={location.pathname === "/team1"}>
                    팀 매칭
                </MenuItem>
                <Dropdown>
                    <MenuItem
                        as="div"
                        isActive={location.pathname.startsWith(
                            "/communication"
                        )}
                    >
                        소통
                        <Arrow src={ArrowIcon} alt="dropdown arrow" />
                    </MenuItem>
                    <DropdownContent className="dropdown-content">
                        <DropdownItem to="/communication1">
                            현직자 조언
                        </DropdownItem>
                        <DropdownItem to="/communication2">
                            기획 리뷰
                        </DropdownItem>
                        <DropdownItem to="/communication3">
                            코드 리뷰
                        </DropdownItem>
                        <DropdownItem to="/communication4">
                            디자인 리뷰
                        </DropdownItem>
                    </DropdownContent>
                </Dropdown>
                <Auth>{username} 님</Auth>
            </MenuContainer>
        </Layout>
    );
};

export default Topbar3;
