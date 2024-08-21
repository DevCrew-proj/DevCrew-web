import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ContestInfo from '../components/ContestInfo'
import Topbar from '../components/Topbar'
import {Link ,useParams} from 'react-router-dom'
import Bottombar from '../components/Bottombar'

const Layout = styled.div`
width : 1920px;
display : flex;
flex-direction : column;
/* justify-content:center;
align-items : center; */
`

const ContestInfoWrapper = styled.div`
  margin-top: 63px;
  margin-bottom: 86px;
  margin-left : 338px;
`
const Divider = styled.div`
width: 1620px;
height: 4px;
flex-shrink: 0;
background: rgba(47, 79, 79, 0.30);
margin-left : 150px;
`
const TitleContainer = styled.div`
  margin-top: 130px;
  margin-left: 342px;
  position: relative;  /* UnderLine의 위치를 Title과 맞추기 위해 부모 컨테이너에 relative 설정 */
  display: inline-block;  /* Title의 크기를 텍스트 내용에 맞추기 위해 inline-block 설정 */
`;

const Title = styled.div`
display : inline-block; /* 내용에 맞춰서 너비가 조정되도록 설정 */
width: fit-content;
height: 61px;
flex-shrink: 0;
color: #2F4F4F;
font-family: AppleSDGothicNeoEB00;
font-size: 43px;
font-style: normal;
font-weight: 400;
line-height: normal;
position : relative;
z-index: 1;  /* Title을 앞쪽에 배치 */
`
const UnderLine=styled.div`
width: 120%;
height: 44px;
flex-shrink: 0;
position : absolute;
background: rgba(186, 203, 206, 0.40);
left: 0;  /* 왼쪽 정렬 */
bottom: -5px;  /* Title의 하단에 위치하도록 조정 */
z-index: -1;


`
const ContentLayout = styled.div`
margin-left : 338px;
margin-top : 43px;
margin-bottom : 94px;
`


const MatchingTitle=styled.div`
color: var(--kakao-logo, #000);
//text-align: center;
font-family: AppleSDGothicNeoR00;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left : 342px;
margin-top : 95px;
`
// 테이블 스타일링
const Table = styled.table`
  width: 1237px;
  border-collapse: collapse;
  margin-left : 342px;
  margin-top : 55px;
`;

const TableRow = styled.tr`
  border: 1px solid rgba(51, 51, 51, 0.20);
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
background: #FAFAFA;
height : 71px;
text-align :center;
color: #4A4A4A;
text-align: center;
border: 1px solid rgba(51, 51, 51, 0.20);

/* body/medium */
font-family: AppleSDGothicNeoR00;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
`;
const InputText = styled.input.attrs({ type: 'text' })`
  
flex-shrink: 0;
  padding: 8px;
  box-sizing: border-box;
  border : none;
  outline:none;
  color: #4A4A4A;
text-align: center;
font-family: AppleSDGothicNeoUL00;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 47px;
  height: 47px;
  cursor: pointer;
  &:hover {
    background-color :  #2F4F4F;
  }
`;
// 링크 스타일링
const StyledLink = styled.a`
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


// 버튼 스타일링
const ButtonGroup = styled.div`
  margin-top: 53px;
  margin-left: 784px;
  margin-bottom : 157px;
`;

const Button1 = styled.button`
  width: 169px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
background: var(--sub, #5D6C6F);
color: #FFF;
text-align: center;
font-family: AppleSDGothicNeoB00;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;


`;

const Button2=styled.button`
width: 169px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #5D6C6F;
color: #5D6C6F;
text-align: center;
font-family: AppleSDGothicNeoB00;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 13px;
`

const ButtonLink1 = styled(Link)`
text-decoration : none;
color : white;
`
const ButtonLink2 = styled(Link)`
text-decoration : none;
color: #5D6C6F;

`

const TeamMatching = () => {
  const [contestData, setContestData] = useState(null); // 공모전 데이터를 위한 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 위한 상태
  const [error, setError] = useState(null); // 오류 상태를 위한 상태
  const [teamData, setTeamData] = useState([]);

  const { contestId } = useParams();  // contestId 가져오기

  useEffect(() => {
    console.log("Fetching data for contestId:", contestId); // 이 라인을 추가하여 contestId를 확인합니다.
    const fetchContestData = async () => {
      try {
        const response = await axios.get(`https://devcrew.kr/api/v1/contests/${contestId}`);
        setContestData(response.data.data);
        setLoading(false);
        console.log("Contest Data:", response.data); // 콘테스트 데이터 출력
      } catch (err) {
        console.error('Error fetching contest data:', err.response ? err.response.data : err.message);
        setError(err);
        setLoading(false);
      }
    };

    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`https://devcrew.kr/api/v1/contests/${contestId}/teams`);
        setTeamData(response.data.data.teamInfoList);
        console.log("Team Data:", response.data.data.teamInfoList);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching team data:', err.response ? err.response.data : err.message);
        setError(err);
        setLoading(false);
      }
    };
  
    fetchContestData();
    fetchTeamData();
  }, [contestId]);


  // const [teamData, setTeamData] = useState([
  //   { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
  //   { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
  //   { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
  // ]);

  const handleInputChange = (index, field, value) => {
    const newTeamData = [...teamData];
    newTeamData[index][field] = value;
    setTeamData(newTeamData);
  };

  const handleBlur = (index) => {
    const newTeamData = [...teamData];
    newTeamData[index].isEditing = false;
    setTeamData(newTeamData);
  };

  const handleEditClick = (index) => {
    const newTeamData = [...teamData];
    newTeamData[index].isEditing = true;
    setTeamData(newTeamData);
  };

  return (
    <Layout>
    <Topbar />
    {contestData ? (
      <>
    <ContestInfoWrapper>
        <ContestInfo contestId={contestId} />
      </ContestInfoWrapper>
    <Divider />
    <TitleContainer>
  <Title>
    {contestData.title}
    <UnderLine />
  </Title>
 
</TitleContainer>
    
    <ContentLayout> {contestData.description}
    </ContentLayout>
    <Divider />
    <MatchingTitle>프로젝트팀 매칭</MatchingTitle>
    <Table>
        <thead>
          <TableRow>
            <TableHeader>팀명</TableHeader>
            <TableHeader>세부 기획안</TableHeader>
            <TableHeader>문의 이메일</TableHeader>
            <TableHeader>신청하기</TableHeader>
          </TableRow>
        </thead>
        <tbody>
              {teamData.map((team, index) => (
                <TableRow key={team.teamId}>
                  <TableCell>{team.teamName}</TableCell>
                  <TableCell>
                    <StyledLink href={team.planUrl} target="_blank">
                      {team.planUrl}
                    </StyledLink>
                  </TableCell>
                  <TableCell>{team.teamEmail}</TableCell>
                  <TableCell>
                    <InputCheckbox />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
        {/* <tbody>
          {teamData.map((team, index) => (
            <TableRow key={team.teamId}>
              <TableCell>
                <InputText
                  value={team.teamName}
                  onChange={(e) =>
                    handleInputChange(index, 'teamName', e.target.value)
                  }
                
                />
              </TableCell>
              <TableCell>
                {team.planLink ? (
                  <StyledLink href={team.planLink} target="_blank">
                    {team.planLink}
                  </StyledLink>
                ) : (
                  <InputText
                    value={team.planLink}
                    onChange={(e) =>
                      handleInputChange(index, 'planLink', e.target.value)
                    }
                  
                  />
                )}
              </TableCell>
              <TableCell>
                <InputText
                  value={team.email}
                  onChange={(e) =>
                    handleInputChange(index, 'email', e.target.value)
                  }
                
                />
              </TableCell>
              <TableCell>
                <InputCheckbox
                  checked={team.apply}
                  onChange={(e) =>
                    handleInputChange(index, 'apply', e.target.checked)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody> */}
      </Table>
      <ButtonGroup>

        <Button1>
        <ButtonLink1 to={`/teamComposition/${contestId}`}>팀 구성하기</ButtonLink1>
        </Button1>
        <Button2>
        <ButtonLink2 to={`/teamApplication/${contestId}`}>팀 신청하기</ButtonLink2>
        </Button2>
      </ButtonGroup>
      <Bottombar />
      </>
    ) : (
      <div>Loading...</div>
    )}
    </Layout>
  );
}

export default TeamMatching;