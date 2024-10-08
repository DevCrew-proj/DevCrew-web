import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import Listbar3 from "../components/Listbar3";
import FormBoard from "../components/FormBoard";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
    width: 1920px;
    height: 1680px;
`;

const CommunicationBoard2 = () => {
    const navigate = useNavigate(); 

    const accessToken = sessionStorage.getItem("auth_token");

    const handleSuccess = () => {
        navigate("/communication2");
    };

    return (
        <Layout>
            {accessToken ? <Topbar3 /> : <Topbar />}
            <Listbar3 title="기획 피드백" showTabs="none" />
            <FormBoard
                apiEndpoint="https://devcrew.kr/api/v1/feedback/plan/create"
                fileUploadApiEndpoint="https://devcrew.kr/api/images/plan"
                imageUploadApiEndpoint="https://devcrew.kr/api/images/plan"
                onSuccess={handleSuccess} 
            />
            <Bottombar />
        </Layout>
    );
};

export default CommunicationBoard2;
