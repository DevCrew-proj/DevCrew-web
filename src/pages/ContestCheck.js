import React, {useState} from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import logo from '../assets/image/logowhite.svg'
import {Link } from 'react-router-dom'

const Layout = styled.div`
width : 1920px;
height : 1243px;
`
const Title = styled.div`
width : 184px;
height : 60px;
color: #2E4F4F;
font-family: AppleSDGothicNeoH00;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : 147px;
margin-left : 279px;
`
const MenuContainer=styled.div`
display: flex;
flex-direction : row;
cursor : pointer;
margin-top : 103px;
margin-left : 180px;

`

const Menu=styled.div`
margin-left : 128px;
color: #2E4F4F;
font-family: AppleSDGothicNeoM00;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${(props) => (props.active ? '#2E4F4F' : '#B8B8B8')};
  border-top: ${(props) => (props.active ? '8px solid #2E4F4F' : 'none')};
  /* &:hover {
    color: #2E8B57;
  } */
`
const Content = styled.div`
  margin-left: 279px;
  margin-top: 20px;
  padding: 20px;
  background-color: #e9ecef;
  border-radius: 5px;
  width: calc(100% - 558px);
`;

 const ContestCheck = () =>{
  const [selectedTab, setSelectedTab] = useState('전체');

  return (
    <Layout>
    <Topbar />
    <Title>기업 공모전</Title>
    <MenuContainer>
        <Menu active={selectedTab === '전체'} onClick={() => setSelectedTab('전체')}>전체</Menu>
        <Menu active={selectedTab === '생성형 AI'} onClick={() => setSelectedTab('생성형 AI')}>생성형 AI</Menu>
        <Menu active={selectedTab === '플랫폼'} onClick={() => setSelectedTab('플랫폼')}>플랫폼</Menu>
        <Menu active={selectedTab === '데이터 분석'} onClick={() => setSelectedTab('데이터 분석')}>데이터 분석</Menu>
        <Menu active={selectedTab === '창업'} onClick={() => setSelectedTab('창업')}>창업</Menu>
        <Menu active={selectedTab === '게임'} onClick={() => setSelectedTab('게임')}>게임</Menu>
        <Menu active={selectedTab === '기타'} onClick={() => setSelectedTab('기타')}>기타</Menu>
      </MenuContainer>
      <Content>
        {selectedTab === '전체' && <div>전체 내용</div>}
        {selectedTab === '생성형 AI' && <div>생성형 AI 내용</div>}
        {selectedTab === '플랫폼' && <div>플랫폼 내용</div>}
        {selectedTab === '데이터 분석' && <div>데이터 분석 내용</div>}
        {selectedTab === '창업' && <div>창업 내용</div>}
        {selectedTab === '게임' && <div>게임 내용</div>}
        {selectedTab === '기타' && <div>기타 내용</div>}
      </Content>
    
    </Layout>
  )
}
export default ContestCheck;