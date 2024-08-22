import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; 
import contestimage from '../assets/image/contestimage.svg';
import axios from 'axios';

const Container = styled.div`
  //margin: 100px 30.3px 36px 0;
  display: flex;
  flex-direction: column;
  width: 1101.63px;
  box-sizing: border-box;
`;

const Countdown = styled.div`
  border-radius: 5px;
  background-color: #2F4F4F;
  position: relative;
  //margin: 0 1212.7px 35px 0;
  display: flex;
  align-self: start;
  //padding: 12px 0 14px 1px;
  width: 175px;
  height : 38.5px;
  box-sizing: border-box;
  align-items: center; 
  justify-content: center;
`;

const CountdownText = styled.span`
  word-break: break-word;
  font-family: AppleSDGothicNeoEB00;
  font-weight: normal;
  font-size: 17.5px;
  color: #FFFFFF;
`;

const Title = styled.div`
  //margin: 0 0 56px 0;
  margin-top :30.63px;
  display: inline-block;
  align-self: start;
  word-break: break-word;
  font-family: AppleSDGothicNeoEB00;
  font-size: 37.625px;
  color: #2F4F4F;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //height : 61px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  margin: 0 93px 0 0;
  width: 235.375px;
  height: 332.5px;
  background: ${({ imageUrl }) => `url(${imageUrl})`} 50% 50% / cover no-repeat;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15.75px;
  color: #333333;
  line-height: 1.5;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
 

`;

const InfoTitle = styled.div`
  margin: 0 0 20px 0;
  display: inline-block;
  align-self: start;
  word-break: break-word;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 21.875px;
  color: #000000;
`;

const InfoItem = styled.div`
  display: flex;
  //justify-content: flex-start;
  margin-right: 20px;
  

`;

const InfoLabel = styled.div`
  //margin-right: 20px;
  width : 100px;
  
`;

const InfoValue = styled.div`
  margin-left: -20px;
  display : flex;
  width : 160px;
  justify-content : flex-start;
  //align-items: center;
  word-break: break-all; /* This will force the text to break at any character */
  overflow-wrap: break-word; /* This allows breaking within words if necessary */
`;

const InfoValues = styled.div`
margin-left: -20px;
  display : flex;
  width : 160px;
  justify-content : flex-start;
  //align-items: center;
  text-decoration : none;
  word-break: break-all; /* This will force the text to break at any character */
  overflow-wrap: break-word; /* This allows breaking within words if necessary */
  a {
    color: black; /* 기본 링크 색상 */
    text-decoration: none; /* 링크 밑줄 */
    &:hover {
      color: #551A8B; /* 링크에 마우스를 올렸을 때 색상 */
    }
  }
`

const Button = styled.div`
  width: 169px;
  height: 50px;
  border-radius: 5px;
  background-color: var(--sub, #5D6C6F);
  margin: 30px 4.5px 0 4.5px;
  display: flex;
  align-self: start;
  padding: 13.5px 15.5px 13.5px 15.5px;
  box-sizing: border-box;
  align-items: center; 
  justify-content: center;
`;

const ButtonText = styled.span`
  word-break: break-word;
  color: #FFF;
text-align: center;
font-family: AppleSDGothicNeoB00;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Tag = styled.div`
  border-radius: 5px;
  border: 1px solid var(--sub, #5D6C6F);
  display: flex;
  width: 41px;
  height : 20px;
  
 // padding: 4px 10.8px 3.2px 11.8px;
  box-sizing: border-box;
  align-items: center; 
  justify-content: center;
`;

const TagText = styled.span`
  word-break: break-word;
  color: #5D6C6F;
text-align: center;
font-family: AppleSDGothicNeoM00;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const ContestInfo = ({ contestId }) => {
  // const { contestId } = useParams(); // URL에서 contestId 가져오기
  const [contestData, setContestData] = useState(null); // 공모전 데이터를 위한 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 위한 상태
  const [error, setError] = useState(null); // 오류 상태를 위한 상태

  useEffect(() => {
    console.log("Fetching data for contestId:", contestId); // 이 라인을 추가하여 contestId를 확인합니다.
    const fetchContestData = async () => {
      try {
        const response = await axios.get(`https://devcrew.kr/api/v1/contests/${contestId}`);
        setContestData(response.data.data);
        setLoading(false);
        console.log('API 응답:', response.data); // API 응답 데이터를 콘솔에 출력

      } catch (err) {
        console.error('Error fetching contest data:', err.response ? err.response.data : err.message);
        setError(err);
        setLoading(false);
      }
    };
  
    fetchContestData();
  }, [contestId]);


  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시
  }

  if (error) {
    return <div>Error: {error.message}</div>; // 오류 발생 시 표시
  }

  if (!contestData) {
    return <div>No contest data found.</div>; // 공모전 데이터가 없을 때 표시
  }



  return (
    <Container>
      <Countdown>
         <CountdownText>D-{contestData.remainingPeriod}</CountdownText>
      </Countdown>
      <Title>
      {contestData.title}<br />
        <br />
      </Title>
      <ContentContainer>


        <ImageContainer imageUrl={contestData.poster}/>
        <InfoContainer>
        <InfoTitle>{contestData.organization}</InfoTitle>
          <InfoGrid>
            <InfoItem><InfoLabel>주최기관</InfoLabel><InfoValue>{contestData.organization}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>참여대상</InfoLabel><InfoValue>{contestData.participantTarget}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>담당자 정보</InfoLabel></InfoItem>
            <InfoItem><InfoLabel>시상규모</InfoLabel><InfoValue>{contestData.award}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>접수기간</InfoLabel><InfoValue>{contestData.acceptancePeriod}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>담당자</InfoLabel><InfoValue>{contestData.ceoName}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>홈페이지</InfoLabel><InfoValues><a href={contestData.homepageUrl} target="_blank" rel="noopener noreferrer">{contestData.homepageUrl}</a></InfoValues></InfoItem>
            <InfoItem><InfoLabel>활동혜택</InfoLabel><InfoValue>{contestData.benefits}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>연락처</InfoLabel><InfoValue>{contestData.ceoPhoneNum}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>공모분야</InfoLabel><InfoValue><Tag><TagText>{contestData.sector}</TagText></Tag></InfoValue></InfoItem>
            <InfoItem><InfoLabel></InfoLabel><InfoValue></InfoValue></InfoItem>
            <InfoItem><InfoLabel>이메일</InfoLabel><InfoValue>{contestData.ceoEmail}</InfoValue></InfoItem>
            <InfoItem><InfoLabel>추가혜택</InfoLabel><InfoValue>{contestData.plusBenefits || '-'}</InfoValue></InfoItem>
          </InfoGrid>
          {/* <Button>
            <ButtonText>홈페이지 지원</ButtonText>
          </Button> */}
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default ContestInfo;