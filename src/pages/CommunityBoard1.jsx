import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import CommunicationHeader from '../components/CommunicationHeader';
import CommunicationBoard from '../components/CommunicationBoard';
import CommunicationFooter from '../components/CommunicationFooter';

const Layout = styled.div`
  width: 1290px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;


const Communication1 = () => {
  return (
    <Layout>
      <Topbar />
      <CommunicationHeader title="현직자 조언" showTabs="group1" />  
      <CommunicationBoard />
      <CommunicationFooter />
    </Layout>
  );
}

export default Communication1;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */