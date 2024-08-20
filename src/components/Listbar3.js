import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 1007px;
  padding: 0 481px 0 215px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "103px")};
  margin-bottom: ${(props) =>
    props.marginButton ? props.marginButton : "33px"};
  background-color: #fff;
`;

const MainTitle = styled.div`
  text-align: left;
  font-family: Pretendard;
  font-weight: bold;
  font-size: 40px;
  color: #2e4f4f;
  margin-bottom: 44px;
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 1001px;
`;

const TabGroup = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
`;

const TabItem = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 30px;
  color: ${(props) => (props.active ? "#2E4F4F" : "#B8B8B8")};
  transition: color 0.3s ease-in-out;
  cursor: pointer;
`;

const Listbar3 = ({ title, showTabs, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState("기획");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabSelect(tab); 
  };

  const isGroup1Visible = showTabs === "group1";
  const isNoneVisible = showTabs === "none";

  return (
    <Layout
      paddingTop={
        title === "기획 피드백" || title === "디자인 피드백" ? "128px" : null
      }
      marginButton={
        title === "기획 피드백" || title === "디자인 피드백" ? "47px" : null
      }
    >
      <MainTitle>{title}</MainTitle>
      <TabMenu>
        <TabGroup visible={isGroup1Visible}>
          <TabItem
            active={activeTab === "기획"}
            onClick={() => handleTabClick("기획")}
          >
            기획
          </TabItem>
          <TabItem
            active={activeTab === "디자인"}
            onClick={() => handleTabClick("디자인")}
          >
            디자인
          </TabItem>
          <TabItem
            active={activeTab === "Front-end"}
            onClick={() => handleTabClick("Front-end")}
          >
            Front-end
          </TabItem>
          <TabItem
            active={activeTab === "Back-end"}
            onClick={() => handleTabClick("Back-end")}
          >
            Back-end
          </TabItem>
          <TabItem
            active={activeTab === "기타"}
            onClick={() => handleTabClick("기타")}
          >
            기타
          </TabItem>
        </TabGroup>
        <TabGroup visible={isNoneVisible}></TabGroup>
      </TabMenu>
    </Layout>
  );
};

export default Listbar3;
