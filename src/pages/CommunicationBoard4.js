import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import Listbar3 from "../components/Listbar3";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
    width: 1920px;
    height: 1842px;
`;

const Communication4 = () => {
    const accessToken = sessionStorage.getItem("auth_token");

    return (
        <Layout>
            {accessToken ? <Topbar3 /> : <Topbar />}
            <Listbar3 title="디자인 피드백" showTabs="none" />
            <FormBoard
                apiEndpoint="https://devcrew.kr/api/v1/feedback/design/create"
                fileUploadApiEndpoint="https://devcrew.kr/api/images/design"
                imageUploadApiEndpoint="https://devcrew.kr/api/images/design"
            />
            <Bottombar />
        </Layout>
    );
};

export default Communication4;
/* <TabBar title="현직자 조언" showTabs={false} /> 탭 아이템이 숨겨짐 */
