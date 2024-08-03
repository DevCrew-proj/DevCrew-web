import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import CommunicationHeader from "../components/CommunicationHeader";
import CommunicationBoard from "../components/CommunicationBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
  width: 1290px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Communication3 = () => {
  return (
    <Layout>
      <Topbar />
      <CommunicationHeader title='디자인 피드백' showTabs='none' />
      <CommunicationBoard />
      <Bottombar />
    </Layout>
  );
};

export default Communication3;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
