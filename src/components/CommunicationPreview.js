import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 20px;
  height: 950px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const PreviewRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PreviewItem = styled.div`
  border: 1px solid #829595;
  background: #D9D9D9;
  position: relative;
  flex: 1;
  padding: 10px;
  width: ${props => (props.square ? '202px' : '202px')};
  height: ${props => (props.square ? '202px' : '176px')};
  margin-right: ${props => (props.right ? '0' : '15px')};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const RepresentativeLabel = styled.div`
  background: #829595;
  position: absolute;
  left: 1px;
  top: 1px;
  width: 84px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 70px;
    height: 40px;
  }
`;

const LabelText = styled.span`
  font-size: 1.5rem;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CommunicationPreview = () => {
  return (
    <Sidebar>
      <PreviewContainer>
        <PreviewRow>
          <PreviewItem>
            <RepresentativeLabel>
              <LabelText>대표</LabelText>
            </RepresentativeLabel>
          </PreviewItem>
          <PreviewItem right />
        </PreviewRow>
        <PreviewRow>
          <PreviewItem square />
          <PreviewItem square style={{ marginRight: 0 }} />
        </PreviewRow>
      </PreviewContainer>
    </Sidebar>
  );
}

export default CommunicationPreview;
