import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Listbar3 from "../components/Listbar3";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
  width: 1920px;
  height: 1842px;
`;

const CommunicationBoard1 = () => {
  const [selectedTag, setSelectedTag] = useState("기획");

  return (
    <Layout>
      <Topbar />
      <Listbar3
        title="현직자 조언" showTabs="group1" onTabSelect={(tab) => {setSelectedTag(tab);}}
      />
      <FormBoard
        apiEndpoint="https://devcrew.kr/api/v1/feedback/advice/create"
        feedbackTag={selectedTag}
        fileUploadApiEndpoint="https://devcrew.kr/api/images/advice"
        imageUploadApiEndpoint="https://devcrew.kr/api/images/advice"
      />
      <Bottombar />
    </Layout>
  );
};

export default CommunicationBoard1;
