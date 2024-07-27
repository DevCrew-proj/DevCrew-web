import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
width: 1920px;
height: 210px;
flex-shrink: 0;
background: #F7F7F7;
`
const Line = styled.div`
width: 1920px;
height: 6px;
flex-shrink: 0;
background: #829595;
`
const Info = styled.div`
display : flex;
flex-direction : row;
margin-top : 46px;
`
const Text1 = styled.div`
color: #2F4F4F;
text-align: center;
font-family: AppleSDGothicNeoL00;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 103px;
`
const Text2 = styled.div`
color: #2F4F4F;
text-align: center;
font-family: AppleSDGothicNeoL00;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 32px;
`
const Text3 = styled.div`
color: #2F4F4F;
text-align: center;
font-family: AppleSDGothicNeoL00;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 1363px;
`
const Text4 = styled.div`
color: #2F4F4F;
text-align: center;
font-family: AppleSDGothicNeoL00;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left : 33px;
`
const Bottombar = () =>{
  return (
    <Layout>
        <Line />
        <Info>
            <Text1>개인정보처리방침</Text1>
            <Text2>이용약관</Text2>
            <Text3>About Us</Text3>
            <Text4>Terms & Condition</Text4>

        </Info>

    </Layout>
  )
}
export default Bottombar;