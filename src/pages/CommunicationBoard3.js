import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import Listbar4 from "../components/Listbar4";
import FormBoard2 from "../components/FormBoard2";
import Bottombar from "../components/Bottombar";

const Layout = styled.div`
    width: 1920px;
    height: 1680px;
`;

const CommunicationBoard3 = () => {
    const [selectedTag, setSelectedTag] = useState("JAVA");
    const navigate = useNavigate(); 

    const accessToken = sessionStorage.getItem("auth_token");

    const handleSuccess = () => {
        navigate("/communication3");
    };

    return (
        <Layout>
            {accessToken ? <Topbar3 /> : <Topbar />}
            <Listbar4
                title="코드 리뷰"
                showTabs="group2"
                onTabSelect={(tab) => {
                    setSelectedTag(tab);
                }}
            />
            <FormBoard2
                apiEndpoint="https://devcrew.kr/api/v1/feedback/code/create"
                language={selectedTag}
                fileUploadApiEndpoint="https://devcrew.kr/api/images/codeReview"
                imageUploadApiEndpoint="https://devcrew.kr/api/images/codeReview"
                onSuccess={handleSuccess} 
            />
            <Bottombar />
        </Layout>
    );
};

export default CommunicationBoard3;
