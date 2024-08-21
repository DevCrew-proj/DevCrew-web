import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Topbar from '../components/Topbar'
import vector from '../assets/image/vector.svg'
import logo from '../assets/image/logowhite.svg'
import {Link } from 'react-router-dom'
import vectors from '../assets/image/vector2.svg'
import vector3 from '../assets/image/vector3.svg'
import Bottombar from '../components/Bottombar'
// import Pagination from '../components/Pagination';

const Layout = styled.div`
width : 1680px;
//height : 2236px;
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
margin-top : 128.62px;
margin-left : 244.13px;
`
const MenuContainer=styled.div`
display: flex;
flex-direction : row;
cursor : pointer;
margin-top : 103px;
margin-left : 140px;

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

const ResultItem = styled(Link)`
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
text-decoration : none;
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
const Image= styled.img`
width : 164px;
height : 164px;
border-radius: 20px;
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

const Upload=styled.button`
width: 145px;
height: 61px;
flex-shrink: 0;
border-radius: 38px;
background: var(--main, #2F4F4F);
/* color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal; */
display : flex;
justify-content : center;
align-items:center;
margin-top : 40px;
margin-left : 1476px;

`
const UploadLink = styled(Link)`
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
color : white;
text-decoration : none;
`

 const Vector = styled.img`
 margin-left: 9px;
 
 `
 const Pagination = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 5px;



// `;

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
  margin-top: 2px;
  margin-bottom:306px;

`;




 const itemsPerPage = 12; // 한 페이지에 보여줄 아이템 수
 const ContestCheck = () =>{
  const [selectedTab, setSelectedTab] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [sector, setSector] = useState(''); // 기본값은 공백, '전체' 탭이 선택된 경우
  // const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수 상태
  const sectorMapping = {
    '전체': '',
    '창업': 'STARTUP',
    '생성형 AI': 'AI',
    '플랫폼': 'PLATFORM',
    '데이터 분석': 'DATAALALYSIS',
    '게임': 'GAME',
    '기타': 'OTHER'
};

const fetchContests = async () => {
  try {
    const sector = sectorMapping[selectedTab]; // 선택된 탭에 따라 sector 값을 설정
      const response = await axios.get('https://devcrew.kr/api/v1/contests/', {
          params: {
              sector: sector || '', // 선택된 탭에 따라 sector 값 설정, 기본값은 빈 문자열
              page: currentPage-1 , // 페이지 번호는 0부터 시작할 수도 있음
              size: itemsPerPage,
              sort: 'createdAt',
              order: 'desc',
          },
      });
      console.log('API 응답:', response.data); // API 응답 데이터를 콘솔에 출력

      setSearchData(response.data.data.contests || []); // 데이터가 없을 때 빈 배열 설정
      // setTotalPages(Math.ceil(response.data.totalResult / itemsPerPage)); // 전체 페이지 수 계산
  } catch (error) {
      console.error('Error fetching contests:', error);
      if (error.response && error.response.status === 400) {
          alert('해당 분야의 공모전이 더 이상 존재하지 않습니다.');
      } else if (error.response && error.response.status === 404) {
          alert('요청한 페이지를 찾을 수 없습니다.');
      } else {
          alert('An error occurred while fetching the contests.');
      }
  }
};
// const handleTabClick = (tab) => {
//   console.log('Selected Tab:', tab);
//   console.log('Mapped Sector:', sectorMapping[tab]);
//   setSelectedTab(tab);
//   setSector(sectorMapping[tab]);
// };
    // 사용자가 탭을 클릭했을 때 호출되는 함수
    const handleTabClick = (tab) => {
      setSelectedTab(tab); // 선택된 탭을 설정
      setCurrentPage(1); // 페이지를 초기화
  };
  const handlePageChange = (page) => {
    setCurrentPage(page); // 페이지 변경 시 currentPage 상태를 업데이트
};
// sector 값이 변경될 때마다 API를 호출
useEffect(() => {
    fetchContests();
}, [sector]); // sector 값이 바뀔 때마다 fetchContests 실행

  useEffect(() => {
    fetchContests();
  }, [selectedTab, currentPage]);

  // const handleTabClick = (tabName) => {
  //   setSelectedTab(tabName);
  //   setCurrentPage(1); // Change page to 1 when tab changes
  // };

 // const totalPages = Math.ceil(searchData.length / itemsPerPage);
  // const renderPagination = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //       pageNumbers.push(
  //           <PageButton
  //               key={i}
  //               active={i === currentPage}
  //               onClick={() => handlePageChange(i)}
  //           >
  //               {i}
  //           </PageButton>
  //       );
  //   }
  //   return (
  //     <PaginationContainer>
  //       {/* <ArrowButton
  //         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  //       >
  //         <img src={vector3} alt="Previous Page" />
  //       </ArrowButton> */}
  //       <Pagination>{pageNumbers}</Pagination>
  //       <ArrowButton
  //                   onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
  //                   disabled={currentPage === totalPages}
  //               >
  //                   <img src={vectors} alt="Next Page" />
  //               </ArrowButton>
  //     </PaginationContainer>
  //   );
  // };
  

  return (
    <Layout>
    <Topbar />

    <Title>기업 공모전</Title>
    <MenuContainer>
    {['전체', '생성형 AI', '플랫폼', '데이터 분석', '창업', '게임', '기타'].map((tab) => (
          <Menu
            key={tab}
            active={selectedTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Menu>
        ))}
      </MenuContainer>
{/*       
        <Menu active={selectedTab === '전체'} onClick={() => setSelectedTab('전체')}>전체</Menu>
        <Menu active={selectedTab === '생성형 AI'} onClick={() => setSelectedTab('생성형 AI')}>생성형 AI</Menu>
        <Menu active={selectedTab === '플랫폼'} onClick={() => setSelectedTab('플랫폼')}>플랫폼</Menu>
        <Menu active={selectedTab === '데이터 분석'} onClick={() => setSelectedTab('데이터 분석')}>데이터 분석</Menu>
        <Menu active={selectedTab === '창업'} onClick={() => setSelectedTab('창업')}>창업</Menu>
        <Menu active={selectedTab === '게임'} onClick={() => setSelectedTab('게임')}>게임</Menu>
        <Menu active={selectedTab === '기타'} onClick={() => setSelectedTab('기타')}>기타</Menu>
      </MenuContainer> */}
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
      <SearchResultCount>검색결과 {searchData.length}건</SearchResultCount>
        <Order>최신순</Order>
        <Vectors src={vector3} alt="화살표" />
        </SearchInfo>
        <SearchResults>
    {searchData.map((contest) => {
        // 현재 날짜와 endDate를 비교하여 D-Day 계산
        const endDate = new Date(contest.endDate);
        const today = new Date();
        
        // 밀리초 단위로 계산한 날짜 차이를 일 단위로 변환
        const timeDifference = endDate.getTime() - today.getTime();
        const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // 밀리초를 일로 변환

        return (
          <ResultItem to={`/teammatching/${contest.id}`} key={contest.id}>
                <Picture>
                    <Image src={contest.posterUrl} alt={contest.title} />
                </Picture>
                <Contents>
                    <ContestName>{contest.title}</ContestName>
                    <ContestTag>{contest.sector}</ContestTag>
                    <ContestCompany>{contest.organization}</ContestCompany>
                    <ContestDday>D-{dayDifference >= 0 ? dayDifference : 0}</ContestDday> {/* D-Day 표시 */}
                </Contents>
            </ResultItem>
        );
    })}
</SearchResults>

      <Upload>
      <UploadLink to="/contestupload">업로드</UploadLink>
        <Vector src = {vector} alt='화살표' />
         </Upload>
         <PaginationContainer>
         <Pagination>
         {/* page={currentPage}
        totalPages={totalPages} */}
        {/* setPage={handlePageChange} */}
          {/* <ArrowButton onClick={handlePrev} disabled={currentPage === 1}>
            <img src={vectors} alt="Previous" style={{ transform: 'rotate(180deg)' }} />
          </ArrowButton> */}
          {/* {renderPagination()} */}
          {/* <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
            <img src={vectors} alt="Next" /> 
          </ArrowButton> */}
        </Pagination>
        </PaginationContainer>
        <Bottombar />
     
    </Layout>
  )
}
export default ContestCheck;