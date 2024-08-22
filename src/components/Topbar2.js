import React from "react";
import styled from "styled-components";
import logo from "../assets/image/logowhite.svg";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/image/arrow2.svg";

const Layout = styled.div`
  width: 1584px; // padding 값까지 포함하여 1680px
  display: flex;
  flex-direction: row;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    7f7f7f;
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

  & > * {
    margin-top: 26px;
  }

  & > a:first-child {
    margin-right: 57px;
  }

  & > a:nth-child(2) {
    margin-right: 37px;
  }

  & > a:last-of-type {
    margin-right: 12px;
  }
`;

const MenuItem = styled(Link)`
  width: 100px;
  text-decoration: none;
  color: white;
  font-family: AppleSDGothicNeoB00;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 28px;
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
  left: 110%;
  transform: translateX(-85%); /* 중앙 정렬 */
  text-align: center;
  border-radius: 8px;
  color: #2f4f4f;
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      border-radius: 11px;
      background: rgba(130, 149, 149, 0.59);
      text-decoration: none;
      //width: 102px;
      //height: 37px;
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
  margin-top: 68px;
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
  margin-top: 68px;
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
const Topbar2 = () => {
  return (
    <Layout>
      <Logocontainer>
        <Link to='/'>
          <Logoimg src={logo} alt='logo' />
        </Link>
      </Logocontainer>
      <MenuContainer>
        <MenuItem to='/devcrewintro'>데브크루 소개</MenuItem>
        <MenuItem to='/portfolio'>포트폴리오</MenuItem>
        <MenuItem to='/team1'>팀 매칭</MenuItem>
        {/* <Dropdown>
                    <MenuItem>
                        팀 매칭
                        <Arrow src={ArrowIcon} alt="dropdown arrow" />
                    </MenuItem>
                    <DropdownContent className="dropdown-content">
                        <DropdownItem to="/team1">공모전 매칭</DropdownItem>
                        <DropdownItem to="/team2">교내 매칭</DropdownItem>
                    </DropdownContent>
                </Dropdown> */}
        <Dropdown>
          <MenuItem>
            소통
            <Arrow src={ArrowIcon} alt='dropdown arrow' />
          </MenuItem>
          <DropdownContent className='dropdown-content'>
            <DropdownItem to='/communication1'>현직자 조언</DropdownItem>
            <DropdownItem to='/communication2'>기획 피드백</DropdownItem>
            <DropdownItem to='/communication3'>코드 리뷰</DropdownItem>
            <DropdownItem to='/communication4'>디자인 피드백</DropdownItem>
          </DropdownContent>
        </Dropdown>
        {/* <Auth>
                    <Company to="/signinbusiness">기업 로그인</Company>
                    <Individual to="/login">개인 회원</Individual>
                </Auth> */}
      </MenuContainer>
    </Layout>
  );
};

export default Topbar2;
