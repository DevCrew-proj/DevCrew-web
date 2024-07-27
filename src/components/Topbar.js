import React from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.svg'
import {Link} from 'react-router-dom'
import ArrowIcon from '../assets/image/arrow.svg'

const Layout = styled.div`
width : 1920px;
height : 116px;
display: flex;
flex-direction : row;
background: #F7F7F7;
`

const Logocontainer = styled.div`
width : 180px;
height : 54px;
margin-left: 55px;
margin-top : 31px;
margin-right : 8px;
`

const Logoimg = styled.img`

`

const MenuContainer=styled.div`
display : flex;
flex-direction : row;
`

const MenuItem = styled(Link)`
text-decoration : none;
color : black;
margin-top : 56px;
margin-left : 56px;
color: #000;
font-family: AppleSDGothicNeoB00;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
height: 28px;
`


const Dropdown = styled.div`
  position: relative;
  margin-top : 56px;
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
  width : 118px;
  margin-top : 17px;
  border: 1px solid #829595;
  z-index: 1;
  left: 60%;
  transform: translateX(-50%); /* 중앙 정렬 */
  text-align : center;
  border-radius: 8px;
  color: #2F4F4F;
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
      background-color: #f1f1f1;
      border-radius: 11px;
      text-decoration : none;
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
const DropdownItem = styled(Link)`
`
const Auth = styled.div`
display : flex;
margin-left : 750px;



`;
const Company=styled(Link)`
width : 101px;
height : 38px;
border-radius: 5px;
background: #FFF;
margin-top : 51px;
color: #2F4F4F;
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration : none;
display : flex;
justify-content : center;
align-items : center;
`

const Individual = styled(Link)`
width : 101px;
height : 38px;
border-radius: 5px;
background: #FFF;
margin-right : 55px;
margin-left: 11px;
margin-top : 51px;
color: #2F4F4F;
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration : none;
display : flex;
justify-content : center;
align-items : center;

`
const Topbar = () => {
  return (
    <Layout>
        <Logocontainer>
            <Logoimg src={logo} alt="logo" />
        </Logocontainer>
        <MenuContainer>
        <MenuItem to="/introduce">데브크루 소개</MenuItem>
        <MenuItem to="/portfolio">포트폴리오</MenuItem>
        <Dropdown>
        <MenuItem>
            팀 매칭
            <Arrow src={ArrowIcon} alt="dropdown arrow" />
          </MenuItem>
          <DropdownContent className="dropdown-content">
            <DropdownItem to="/team1">공모전 매칭</DropdownItem>
            <DropdownItem to="/team2">교내 매칭</DropdownItem>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <MenuItem>
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
        <Company to ="/login1">기업 로그인</Company>
        <Individual to ="/login2">개인 회원</Individual>
      </Auth>
        </MenuContainer>

    </Layout>
  )
}

export default Topbar;