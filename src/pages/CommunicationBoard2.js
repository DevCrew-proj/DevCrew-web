import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Listbar3 from "../components/Listbar3";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
  width: 1920px;
  height: 1842px;
`;

const CommunicationBoard2 = () => {
  return (
    <Layout>
      <Topbar />
      <Listbar3 title='기획 피드백' showTabs='none' />
      <FormBoard
        apiEndpoint="https://devcrew.kr/api/v1/feedback/plan/create"
        fileUploadApiEndpoint="https://devcrew.kr/api/images/plan"
        imageUploadApiEndpoint="https://devcrew.kr/api/images/plan"
      />
      <Bottombar />
    </Layout>
  );
};

export default CommunicationBoard2;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
