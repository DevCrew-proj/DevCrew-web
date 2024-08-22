import React, { useState } from "react";
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

const CommunicationBoard1 = () => {
    const [selectedTag, setSelectedTag] = useState("기획");
    const navigate = useNavigate(); 

    const accessToken = sessionStorage.getItem("auth_token");

    const handleSuccess = () => {
        navigate("/communication1");
    };

    return (
        <Layout>
            {accessToken ? <Topbar3 /> : <Topbar />}
            <Listbar3
                title="현직자 조언"
                showTabs="group1"
                onTabSelect={(tab) => {
                    setSelectedTag(tab);
                }}
            />
            <FormBoard
                apiEndpoint="https://devcrew.kr/api/v1/feedback/advice/create"
                feedbackTag={selectedTag}
                fileUploadApiEndpoint="https://devcrew.kr/api/images/advice"
                imageUploadApiEndpoint="https://devcrew.kr/api/images/advice"
                onSuccess={handleSuccess} 
            />
            <Bottombar />
        </Layout>
    );
};

export default CommunicationBoard1;