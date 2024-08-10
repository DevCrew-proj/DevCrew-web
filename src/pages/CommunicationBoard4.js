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

const Communication3 = () => {
  return (
    <Layout>
      <Topbar />
      <Listbar3 title='디자인 피드백' showTabs='none' />
      <FormBoard />
      <Bottombar />
    </Layout>
  );
};

export default Communication3;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
