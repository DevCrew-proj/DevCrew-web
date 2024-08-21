import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; 
import Topbar from '../components/Topbar'; 
import ContestInfo from '../components/ContestInfo';
import TeamApplicationForm from '../components/TeamApplicationForm';

const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  width: 1920px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 1920.4px;
  height: fit-content;
  box-sizing: border-box;
`;

const Divider = styled.div`
  background-color: #E9E9E9;
  margin: 0 0.4px 69px 0;
  width: 1920px;
  height: 2px;
`;

const TeamCompositionPage = () => {
  const { contestId } = useParams(); 

  return (
    <Container>
      <InnerContainer>
        <Topbar />
        <ContestInfo contestId={contestId} />
        <Divider />
        <TeamApplicationForm contestId={contestId} />
      </InnerContainer>
    </Container>
  );
}

export default TeamCompositionPage;
