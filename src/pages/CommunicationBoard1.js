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

const Communication1 = () => {
  return (
    <Layout>
      <Topbar />
      <Listbar3 title='현직자 조언' showTabs='group1' />
      <FormBoard />
      <Bottombar />
    </Layout>
  );
};

export default Communication1;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
