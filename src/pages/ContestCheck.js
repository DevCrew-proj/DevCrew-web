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
import Pagination from '../components/Pagination';

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
margin-top : 90px;
margin-left : 156px;

`

const Menu=styled.div`
/* margin-left : 112px;
color: #2E4F4F;
font-family: AppleSDGothicNeoM00;
font-size: 26.25px;
position : relative;
font-style: normal;
font-weight: 400;
line-height: normal;

color: ${(props) => (props.active ? '#2E4F4F' : '#B8B8B8')};
  //border-top: ${(props) => (props.active ? '8px solid #2E4F4F' : 'none')};
  /* &:hover {
    color: #2E8B57;
  } */
    /* &::before {
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
  } */
    margin-left : 112px;
    //min-width: 128px;
  color: #b8b8b8;
  font-family: AppleSDGothicNeoM00;
  font-size: 26.25px;
  line-height: 1.2;
  top : -21px;
  padding-top: 15px;
  text-align: center;
  box-sizing: border-box;
  border-top: 8px solid #fff;
  transition: border-top 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #2e4f4f;
    border-top: 8px solid #2e4f4f;
  }

  &.active {
    color: #2e4f4f;
    border-top: 8px solid #2e4f4f;
  }
  
`


const SearchResultCount = styled.div`
margin-top : 64.87px;
margin-left : 266px;
  color: #000;
font-family: Pretendard;
font-size: 17.5px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;


const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27.12px;
  margin-left : 266px;
  margin-top : 53.38px;
 margin-right : 254px;
  
`;
const Order = styled.div`
margin-top : 82px;
color: #000;
text-align: right;
font-family: Pretendard;
font-size: 17.5px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 975.63px;
`

const ResultItem = styled(Link)`
  width: 371.875px;
  height: 189px;
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
height: 143.5px;
width : 143.5px;
margin-left : 18.38px;
margin-top : 22.75px;
//padding: 119px 42px 21px 55px;
justify-content: flex-end;
align-items: center;
border-radius: 17.5px;
background: #FFF;

`
const Image= styled.img`
width : 143.5px;
height : 143.5px;
border-radius: 20px;
`

const Contents = styled.div`
display : flex;
flex-direction : column;
justify-content: center;

`

const ContestName=styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 15.75px;
font-style: normal;
font-weight: 700;
line-height: normal;
//margin-top : 53px;
margin-left : 14px;
width : 150px;
`

const ContestTag = styled.div`
display: flex;
width: 60px;
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
font-size: 10.5px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top : 9.62px;
margin-left : 14px;
text-align : center;
`

const ContestCompany=styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 12.25px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top : 9.62px;
margin-left : 14px;
width : 150px;

`

const ContestDday = styled.div`
align-self: stretch;
color: #FFF;
font-family: Pretendard;
font-size: 12.25px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top : 9.62px;
margin-left : 14px;
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
margin-left : 1291.5px;

`
const Submit = styled.div`
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
color : white;
text-decoration : none;
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
//  const Pagination = styled.div`
//  display: flex;
//  justify-content: center;
//  margin-top: 5px;



// // `;

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

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #000;
  font-family: Pretendard;
  display: flex;
  align-items: center;
`;

const DropdownContent = styled.select`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: block;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  font-size: 18px;
  font-family: Pretendard;
`;


 
 const ContestCheck = () =>{
  const [selectedTab, setSelectedTab] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [sector, setSector] = useState(''); // 기본값은 공백, '전체' 탭이 선택된 경우
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수 상태
  const [totalResult, setTotalResult] = useState(0); // 전체 검색 결과 개수를 위한 상태
  const itemsPerPage = 12; // 한 페이지에 보여줄 아이템 수
  const [role, setRole] = useState(null); // 역할 상태 추가
  const sectorMapping = {
    '전체': '',
    '창업': 'STARTUP',
    '생성형 AI': 'AI',
    '플랫폼': 'PLATFORM',
    '데이터 분석': 'DATAALALYSIS',
    '게임': 'GAME',
    '기타': 'OTHER'
};


useEffect(() => {
  const fetchRole = async () => {
    try {
      const response = await axios.get('https://devcrew.kr/api/role', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`,
        },
      });
      setRole(response.data.data.role);
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
  }; 

  fetchRole();
}, []);
const fetchContests = async () => {
  try {
    const sector = sectorMapping[selectedTab]; // 선택된 탭에 따라 sector 값을 설정
       // axios 요청 전에 URL을 콘솔에 출력
    console.log('Fetching contests with URL:', `https://devcrew.kr/api/v1/contests/?sector=${sector}&page=${currentPage-1}&size=${itemsPerPage}&sort=createdAt&order=desc`);
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

      setTotalResult(response.data.data.totalResult); // 전체 검색 결과 개수를 상태로 저장
      //console.log('Total Pages:', response.data.data.totalPages);
      console.log('Total Results:', response.data.data.totalResult);

      console.log('Total Pages:', response.data.data.totalPages); // 이 값이 제대로 나오나 확인
      setTotalPages(response.data.data.totalPages); 
      console.log('After setting Total Pages:', response.data.data.totalPages);
      
  
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
  console.log('Selected Sector:', sector);
  console.log('Current Page:', currentPage);
    fetchContests();
}, [sector,currentPage]); // sector 값이 바뀔 때마다 fetchContests 실행

  useEffect(() => {
    fetchContests();
  }, [selectedTab]);

  const handleUploadClick = () => {
    if (role !== 'COMPANY_USER') {
      alert('기업회원만 공모전을 업로드할 수 있습니다.');
    }
  };

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
      <SearchInfo>
      <SearchResultCount>검색결과 {totalResult}건</SearchResultCount>
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

{role === 'COMPANY_USER' ? (
        <Upload>
          <UploadLink to="/contestupload">업로드</UploadLink>
          <Vector src={vector} alt='화살표' />
        </Upload>
      ) : (
        <Upload onClick={handleUploadClick}>
         <Submit>업로드</Submit>
         <Vector src={vector} alt='화살표' />
        </Upload>
      )}
      
         <PaginationContainer>
         <Pagination 
           page={currentPage}
           totalPages={totalPages}
           setPage={handlePageChange}
           category={selectedTab}>
       
        </Pagination>
        </PaginationContainer>
        <Bottombar />
     
    </Layout>
  )
}
export default ContestCheck;