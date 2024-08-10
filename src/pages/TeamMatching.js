import {React, useState} from 'react'
import styled from 'styled-components'
import ContestInfo from '../components/ContestInfo'
import Topbar from '../components/Topbar'
import {Link } from 'react-router-dom'
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
const Title = styled.div`
width: 732px;
height: 61px;
flex-shrink: 0;
color: #2F4F4F;
font-family: AppleSDGothicNeoEB00;
font-size: 43px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : 130px;
margin-left: 342px;
`
const UnderLine=styled.div`
width: 760px;
height: 44px;
flex-shrink: 0;
background: rgba(186, 203, 206, 0.40);
margin-left: 342px;
margin-top : -37px;

`
const ContentLayout = styled.div`
margin-left : 338px;
margin-top : 43px;
margin-bottom : 94px;
`
const Introduce = styled.p`
  white-space: pre-line;
  color: #4A4A4A;
font-family: AppleSDGothicNeoM00;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom : 75px;
`

const Content = styled.div`
white-space: pre-line;
color: #4A4A4A;
font-family: AppleSDGothicNeoM00;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom : 20px;

`

const ContentTitle=styled.div`
color: #4A4A4A;
font-family: AppleSDGothicNeoB00;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom : 20px;
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
  const [teamData, setTeamData] = useState([
    { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
    { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
    { teamName: '', planLink: '', email: '', apply: false, isEditing: false },
  ]);

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
    <ContestInfoWrapper>
        <ContestInfo />
      </ContestInfoWrapper>
    <Divider />
    <Title>[아트페스타 제주 2024] 아트링커 5기 모집</Title>
    <UnderLine />
    <ContentLayout>
    <Introduce>
      공공인재스쿨은 팀별 프로젝트를 통해 공공마인드와 문제해결력을 갖춘 미래 리더를 양성합니다. <br />
      공공인재스쿨 2기는 외국인과 함께 지방 관광지를 탐방 및 분석하며 외국인의 관점에서 관광지를 개선하는 프로젝트에 참여합니다.
    </Introduce>
    <ContentTitle>1. 선발 인원 및 지원 자격</ContentTitle>
    <Content>
      - 선발 인원: 70명 (한국인 학생 56명, 외국인 학생 14명) <br />
      지원 자격: 전국 4년제 대학교 재휴학생 (2025년 2월 졸업예정자 포함)
    </Content>
    <ContentTitle>※ 우대 조건</ContentTitle>
    <Content>
      * 외국인 유학생 함께 지원 시, 서류 자동 합격 및 면접 기회 제공<br />
      * 외국어 소통 가능자(영어, 중국어 등)<br />
      * 유사 프로그램 경험자<br />
      * 국민기초생활보장 수급자, 한부모가족, 차상위계층
    </Content>
    <ContentTitle>2. 지원 일정</ContentTitle>
    <Content>
      - 서류 지원: 2024.7.14(일), 23시 59분까지<br />
      - 서류 결과발표 : 7.15(월), 14시 이후<br />
      - 면접(오프라인) : 7.16(화) ~ 7.17(수)<br />
      - 최종합격자 발표 : 7.18(목), 10시 이후<br />
      * 상세한 일정은 포스터를 참고해 주시기 바랍니다
      </Content>
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
            <TableRow key={index}>
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
        </tbody>
      </Table>
      <ButtonGroup>
    
        <Button1>
          <ButtonLink1 to ="/teamComposition">팀 구성하기</ButtonLink1>
        </Button1>
        <Button2>
          <ButtonLink2 to ="/teamApplication">팀 신청하기</ButtonLink2>
        </Button2>
      </ButtonGroup>
      <Bottombar />
    </Layout>
  );
}

export default TeamMatching;