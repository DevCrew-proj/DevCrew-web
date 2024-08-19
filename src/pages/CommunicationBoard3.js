import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Listbar4 from "../components/Listbar4";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
  width: 1920px;
  height: 1842px;
`;

const Communication3 = () => {
  const [selectedTag, setSelectedTag] = useState("JAVA");

  return (
    <Layout>
      <Topbar />
      <Listbar4 title='코드 리뷰' showTabs='group2' onTabSelect={(tab) => {setSelectedTag(tab);}}/>
      <FormBoard 
        apiEndpoint="https://devcrew.kr/api/v1/feedback/code/create" 
        feedbackTag={selectedTag}
        fileUploadApiEndpoint="https://devcrew.kr/api/images/codeReview"
        imageUploadApiEndpoint="https://devcrew.kr/api/images/codeReview"
      />
      <Bottombar />
    </Layout>
  );
};

export default Communication3;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
