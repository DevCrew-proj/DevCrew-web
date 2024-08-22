import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import Listbar3 from "../components/Listbar3";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
    width: 1680px;
    min-height: 1815px;
`;

const CommunicationBoard4 = () => {
    const navigate = useNavigate(); 

    const accessToken = sessionStorage.getItem("auth_token");

    const handleSuccess = () => {
        navigate("/communication4");
    };

    return (
        <Layout>
            {accessToken ? <Topbar3 /> : <Topbar />}
            <Listbar3 title="디자인 피드백" showTabs="none" />
            <FormBoard
                apiEndpoint="https://devcrew.kr/api/v1/feedback/design/create"
                fileUploadApiEndpoint="https://devcrew.kr/api/images/design"
                imageUploadApiEndpoint="https://devcrew.kr/api/images/design"
                onSuccess={handleSuccess} 
            />
            <Bottombar />
        </Layout>
    );
};

export default CommunicationBoard4;
