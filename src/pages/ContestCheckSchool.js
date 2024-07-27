import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import vector from '../assets/image/vector.svg'
import logo from '../assets/image/logowhite.svg'
import {Link } from 'react-router-dom'
import vectors from '../assets/image/vector2.svg'
import vector3 from '../assets/image/vector3.svg'
import Bottombar from '../components/Bottombar'

const Layout = styled.div`
width : 1920px;
height : 2236px;
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
position : relative;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${(props) => (props.active ? '#2E4F4F' : '#B8B8B8')};
  //border-top: ${(props) => (props.active ? '8px solid #2E4F4F' : 'none')};
  /* &:hover {
    color: #2E8B57;
  } */
    &::before {
    content: '';
    position: absolute;
    top: -21px;
    left: 50%;
    transform: translateX(-50%);
    width: 93px;
    height: 8px;
    background: #2E4F4F;
    box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.12);
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`
const Content = styled.div`
  margin-left: 279px;
  margin-top: 20px;
  padding: 20px;
  background-color: #e9ecef;
  border-radius: 5px;
  width: calc(100% - 558px);
`;

const SearchResultCount = styled.div`
margin-top : 74px;
margin-left : 304px;
  color: #000;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;


const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-left : 292px;
  margin-top : 61px;
  margin-right : 291px;
  
`;

const ResultItem = styled.div`
  width: 425px;
  height: 216px;
  //padding: 26px 146px 26px 21px;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0px solid #97A7A7;
  background: rgba(47, 79, 79, 0.60);
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  color: #FFF;
  font-family: Pretendard;
  font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
flex-direction : row;
`;

const Order = styled.div`
margin-top : 82px;
color: #000;
text-align: right;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 1115px;
`
const Vectors = styled.img`
margin-top : 82px;
margin-left: 13px;
`
const SearchInfo = styled.div`
display : flex;
flex-direction : row;
`

const Picture = styled.div`
display: flex;
height: 164px;
width : 164px;
margin-left : 21px;
margin-top : 26px;
//padding: 119px 42px 21px 55px;
justify-content: flex-end;
align-items: center;
border-radius: 20px;
background: #FFF;
`

const Contents = styled.div`
display : flex;
flex-direction : column;
`

const ContestName=styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top : 53px;
margin-left : 16px;
`

const ContestTag = styled.div`
display: flex;
width: 51px;
height: 23px;
padding: 0px 6px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 21px;
background: #FFF;
color: #829595;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top : 11px;
margin-left : 16px;
`

const ContestCompany=styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top : 11px;
margin-left : 16px;

`

const ContestDday = styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top : 11px;
margin-left : 16px;
`

 const Vector = styled.img`
 margin-left: 9px;
 
 `
 const Pagination = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 5px;



`;

const PageButton = styled.button`
  width: 34px;
  height: 34px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#2e4f4f' : 'none')};
  color: ${(props) => (props.active ? '#fff' : '#2e4f4f')};
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #2e4f4f;
    color: #fff;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PaginationContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 101px;
  margin-bottom:306px;


`;




 const itemsPerPage = 12; // 한 페이지에 보여줄 아이템 수
 const ContestCheckSchool = () =>{
  const [selectedTab, setSelectedTab] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);

  const searchData = Array.from({ length: 37 }, (_, index) => ({
    title: '아트페스타',
    type: '플랫폼',
    company: '기관명',
    period: '마감중요일'
  }));

  const filterDataByTab = (tab) => {
    if (tab === '전체') {
        return searchData;
    }
    return searchData.filter(item => item.type === tab);
};

const totalPages = Math.ceil(filterDataByTab(selectedTab).length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton key={i} active={currentPage === i} onClick={() => handleClick(i)}>
          {i}
        </PageButton>
      );
    }
    return pageNumbers;
  };

  const currentData = filterDataByTab(selectedTab).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  useEffect(() => {
    setCurrentPage(1);
}, [selectedTab]);


  return (
    <Layout>
    <Topbar />

    <Title>교내 공모전</Title>
    <MenuContainer>
        <Menu active={selectedTab === '전체'} onClick={() => setSelectedTab('전체')}>전체</Menu>
        <Menu active={selectedTab === '생성형 AI'} onClick={() => setSelectedTab('생성형 AI')}>생성형 AI</Menu>
        <Menu active={selectedTab === '플랫폼'} onClick={() => setSelectedTab('플랫폼')}>플랫폼</Menu>
        <Menu active={selectedTab === '데이터 분석'} onClick={() => setSelectedTab('데이터 분석')}>데이터 분석</Menu>
        <Menu active={selectedTab === '창업'} onClick={() => setSelectedTab('창업')}>창업</Menu>
        <Menu active={selectedTab === '게임'} onClick={() => setSelectedTab('게임')}>게임</Menu>
        <Menu active={selectedTab === '기타'} onClick={() => setSelectedTab('기타')}>기타</Menu>
      </MenuContainer>
      {/* <Content>
        {selectedTab === '전체' && <div>전체 내용</div>}
        {selectedTab === '생성형 AI' && <div>생성형 AI 내용</div>}
        {selectedTab === '플랫폼' && <div>플랫폼 내용</div>}
        {selectedTab === '데이터 분석' && <div>데이터 분석 내용</div>}
        {selectedTab === '창업' && <div>창업 내용</div>}
        {selectedTab === '게임' && <div>게임 내용</div>}
        {selectedTab === '기타' && <div>기타 내용</div>}
      </Content> */}
      <SearchInfo>
      <SearchResultCount>검색결과 {filterDataByTab(selectedTab).length}건</SearchResultCount>
        <Order>최신순</Order>
        <Vectors src={vector3} alt="화살표" />
        </SearchInfo>
      <SearchResults>
        {currentData.map((item, index) => (
          <ResultItem key={index}>
            <Picture> </Picture>
            <Contents>
              <ContestName>{item.title}</ContestName>
              <ContestTag>{item.type}</ContestTag>
              <ContestCompany>{item.company}</ContestCompany>
              <ContestDday>{item.period}</ContestDday>
            </Contents>
          </ResultItem>
        ))}
      </SearchResults>

         <PaginationContainer>
         <Pagination>
          {/* <ArrowButton onClick={handlePrev} disabled={currentPage === 1}>
            <img src={vectors} alt="Previous" style={{ transform: 'rotate(180deg)' }} />
          </ArrowButton> */}
          {renderPageNumbers()}
          <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
            <img src={vectors} alt="Next" />
          </ArrowButton>
        </Pagination>
        </PaginationContainer>
        <Bottombar />
     
    </Layout>
  )
}
export default ContestCheckSchool;