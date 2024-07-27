import React from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logowhite.svg'
import {Link} from 'react-router-dom'
import ArrowIcon from '../assets/image/arrow2.svg'

const Layout = styled.div`
width : 1920px;
height : 116px;
display: flex;
flex-direction : row;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #7F7F7F;
`

const Logocontainer = styled.div`
width : 197px;
height : 59px;
margin-left: 59px;
margin-top : 46px;
margin-right : 25px;
`

const Logoimg = styled.img`

`

const MenuContainer=styled.div`
display : flex;
flex-direction : row;
`

const MenuItem = styled(Link)`
text-decoration : none;
margin-top : 70px;
margin-left : 58px;
color: white;
font-family: AppleSDGothicNeoB00;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
height: 28px;
`


const Dropdown = styled.div`
  position: relative;
  margin-top : 70px;
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
      border-radius: 11px;
    background: rgba(130, 149, 149, 0.59);
   // width: 102px;
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
width: 101px;
height: 38px;
margin-top : 51px;
border-radius: 5px;
background: #FFF;
text-align : center;
justify-content : center;
align-items : center;
color: #2F4F4F;
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;


`;

const Topbar3 = () => {
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
        <Auth>신짱구 님
      </Auth>
        </MenuContainer>

    </Layout>
  )
}

export default Topbar3;