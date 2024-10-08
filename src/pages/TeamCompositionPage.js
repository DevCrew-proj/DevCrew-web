import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import Topbar3 from "../components/Topbar3";
import ContestInfo from "../components/ContestInfo";
import TeamApplicationForm from "../components/TeamApplicationForm";
import Bottombar from "../components/Bottombar";

const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    width: 1920px;
    box-sizing: border-box;
`;

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1680px;
    height: fit-content;
    box-sizing: border-box;
`;

const Divider = styled.div`
    background-color: #e9e9e9;
    margin: 0 0.4px 69px 0;
    width: 1920px;
    height: 2px;
`;

const TeamCompositionPage = () => {
    const { contestId } = useParams();
    const accessToken = sessionStorage.getItem("auth_token");

    return (
        <Container>
            <InnerContainer>
                {accessToken ? <Topbar3 /> : <Topbar />}
                <ContestInfo contestId={contestId} />
                <Divider />
                <TeamApplicationForm contestId={contestId} />
                <Bottombar />
            </InnerContainer>
        </Container>
    );
};

export default TeamCompositionPage;
