import React from 'react';
import styled from 'styled-components';
import contestimage from '../assets/image/contestimage.svg';

const Container = styled.div`
  margin: 100px 30.3px 36px 0;
  display: flex;
  flex-direction: column;
  width: fit-content;
  box-sizing: border-box;
`;

const Countdown = styled.div`
  border-radius: 5px;
  background-color: #2F4F4F;
  position: relative;
  margin: 0 1212.7px 23px 0;
  display: flex;
  align-self: start;
  padding: 12px 0 14px 1px;
  width: 200px;
  box-sizing: border-box;
  align-items: center; 
  justify-content: center;
`;

const CountdownText = styled.span`
  word-break: break-word;
  font-family: 'AppleSDGothicNeoEB00', 'Roboto_Condensed';
  font-weight: normal;
  font-size: 20px;
  color: #FFFFFF;
`;

const Title = styled.div`
  margin: 0 0 17px 0;
  display: inline-block;
  align-self: start;
  word-break: break-word;
  font-family: 'AppleSDGothicNeoEB00', 'Roboto_Condensed';
  font-weight: normal;
  font-size: 43px;
  color: #2F4F4F;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  margin: 0 90.5px 0 0;
  width: 269px;
  height: 380px;
  background: url(${contestimage}) 50% 50% / cover no-repeat;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
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
  font-family: 'AppleSDGothicNeoB00', 'Roboto_Condensed';
  font-weight: normal;
  font-size: 25px;
  color: #000000;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
`;

const InfoLabel = styled.div`
  margin-right: 20px;
`;

const InfoValue = styled.div`
  margin-left: 20px;
`;

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
  font-weight: normal;
  font-size: 24px;
  color: #FFFFFF;
`;

const Tag = styled.div`
  border-radius: 5px;
  border: 1px solid #5D6C6F;
  display: flex;
  padding: 4px 10.8px 3.2px 11.8px;
  box-sizing: border-box;
  align-items: center; 
  justify-content: center;
`;

const TagText = styled.span`
  word-break: break-word;
  font-weight: normal;
  font-size: 10px;
  color: #5D6C6F;
`;

const ContestInfo = () => {
  return (
    <Container>
      <Countdown>
        <CountdownText>D-30</CountdownText>
      </Countdown>
      <Title>
        [아트페스타 제주 2024] 아트링커 5기 모집<br />
        <br />
      </Title>
      <ContentContainer>
        <ImageContainer />
        <InfoContainer>
          <InfoTitle>떡잎회사</InfoTitle>
          <InfoGrid>
            <InfoItem><InfoLabel>주최기관</InfoLabel><InfoValue>중소기업</InfoValue></InfoItem>
            <InfoItem><InfoLabel>참여대상</InfoLabel><InfoValue>대상 제한 없음</InfoValue></InfoItem>
            <InfoItem><InfoLabel>담당자 정보</InfoLabel></InfoItem>
            <InfoItem><InfoLabel>시상규모</InfoLabel><InfoValue>3000 만원</InfoValue></InfoItem>
            <InfoItem><InfoLabel>접수기간</InfoLabel><InfoValue>24.6.5 ~ 24.6.23</InfoValue></InfoItem>
            <InfoItem><InfoLabel>담당자</InfoLabel><InfoValue>신형만</InfoValue></InfoItem>
            <InfoItem><InfoLabel>홈페이지</InfoLabel><InfoValue>www.asd.asd</InfoValue></InfoItem>
            <InfoItem><InfoLabel>활동혜택</InfoLabel><InfoValue>기타, 상장 수여</InfoValue></InfoItem>
            <InfoItem><InfoLabel>연락처</InfoLabel><InfoValue>010-1234-5678</InfoValue></InfoItem>
            <InfoItem><InfoLabel>공모분야</InfoLabel><InfoValue><Tag><TagText>창업</TagText></Tag></InfoValue></InfoItem>
            <InfoItem><InfoLabel></InfoLabel><InfoValue></InfoValue></InfoItem>
            <InfoItem><InfoLabel>이메일</InfoLabel><InfoValue>qwer@naver.com</InfoValue></InfoItem>
            <InfoItem><InfoLabel>추가혜택</InfoLabel><InfoValue>-</InfoValue></InfoItem>
          </InfoGrid>
          <Button>
            <ButtonText>홈페이지 지원</ButtonText>
          </Button>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default ContestInfo;
