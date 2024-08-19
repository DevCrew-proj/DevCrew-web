import React, { useState } from "react";
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
  flex-direction: row; // 항목을 수평으로 배치
  justify-content: space-between;
`;

const TabItem = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 30px;
  color: ${(props) => (props.active ? "#2E4F4F" : "#B8B8B8")};
  transition: color 0.3s ease-in-out;
  cursor: pointer;
`;

const Listbar4 = ({ title, showTabs, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState("JAVA");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabSelect(tab); 
  };

  const isGroup2Visible = showTabs === "group2";

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
        <TabGroup visible={isGroup2Visible}>
          <TabItem
            active={activeTab === "JAVA"}
            onClick={() => handleTabClick("JAVA")}
          >
            JAVA
          </TabItem>
          <TabItem
            active={activeTab === "JS"}
            onClick={() => handleTabClick("JS")}
          >
            JS
          </TabItem>
          <TabItem
            active={activeTab === "Kotlin"}
            onClick={() => handleTabClick("Kotlin")}
          >
            Kotlin
          </TabItem>
          <TabItem
            active={activeTab === "Python"}
            onClick={() => handleTabClick("Python")}
          >
            Python
          </TabItem>
          <TabItem
            active={activeTab === "Swift"}
            onClick={() => handleTabClick("Swift")}
          >
            Swift
          </TabItem>
          <TabItem
            active={activeTab === "C"}
            onClick={() => handleTabClick("C")}
          >
            C
          </TabItem>
          <TabItem
            active={activeTab === "기타"}
            onClick={() => handleTabClick("기타")}
          >
            기타
          </TabItem>
        </TabGroup>
      </TabMenu>
    </Layout>
  );
};

export default Listbar4;
