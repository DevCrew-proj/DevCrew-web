import React from 'react';
import styled from 'styled-components';

// 전체 Layout을 위한 컴포넌트
const Layout = styled.div`
  width : 1920px;
  height : 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Footer 컴포넌트: 바닥글 영역을 정의
const Footer = styled.footer`
  background-color: #F7F7F7;
  width: 83%;
  padding: 46px 0 49px 0; /* 패딩 조정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; /* Footer를 페이지 하단에 위치하도록 설정 */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 46px 150px 49px 150px; /* 패딩 조정 */
  }
`;

// FooterText 컴포넌트: 바닥글 텍스트 스타일을 정의
const FooterText = styled.span`
  color: #2F4F4F;
  font-size: 13px;
  font-family: 'AppleSDGothicNeoL00', 'Roboto_Condensed';
  margin: 10px;
  @media (max-width: 767px) {
    font-size: 11px; /* 작은 화면에서 폰트 크기 조정 */
  }
`;

// FooterSection 컴포넌트: 바닥글 섹션을 정의
const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px; /* 최대 너비 조정 */
  margin: 10px 0;
  @media (min-width: 768px) {
    width: 250px; /* 필요에 따라 조정 가능 */
    margin: 0;
  }
`;

// CommunicationFooter 컴포넌트: 전체 바닥글 컴포넌트 정의
const CommunicationFooter = () => {
  return (
    <Layout>
      <Footer>
        <FooterSection>
          <FooterText>개인정보처리방침</FooterText>
          <FooterText>이용약관</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterText>About Us</FooterText>
          <FooterText>Terms & Condition</FooterText>
        </FooterSection>
      </Footer>
    </Layout>
  );
}

export default CommunicationFooter;
