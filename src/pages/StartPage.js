import React from 'react'
import styled from 'styled-components'
import Topbar2 from '../components/Topbar2'
import logo from '../assets/logowhite.svg'
import {Link } from 'react-router-dom'

const Layout = styled.div`
width : 1920px;
height : 1243px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #7F7F7F;
`
const Title=styled.div`
color: #FFF;
font-family: AppleSDGothicNeoEB00;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top:366px;
display : flex;
justify-content : center;
align-items : center;
`
const Logocontainer=styled.div`
display : flex;
justify-content : center;
align-items : center;
margin-top : 34px;
`
const Logoimg = styled.img`
width: 437px;
height: 131px;

`
const LoginBtn = styled.button`
width: 206px;
height: 60px;
flex-shrink: 0;
border-radius: 30px;
border: 1px solid #2F4F4F;
background: #FFF;
margin-top : 56px;

`

const Login=styled(Link)`
text-decoration : none;
color: #2F4F4F;
font-family: AppleSDGothicNeoB00;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;`

const Container = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;


`
 const StartPage = () =>{
  return (
    <Layout>
    <Topbar2 />
    <Container>
    <Title>IT 프로젝트를 준비하는 우리를 위한 공간</Title>
    <Logocontainer>
    <Logoimg src={logo} alt="logo" />
    </Logocontainer>
    <LoginBtn>
      <Login to ="/login">로그인 하러가기</Login>
    </LoginBtn>
    </Container>
    </Layout>
  )
}
export default StartPage;