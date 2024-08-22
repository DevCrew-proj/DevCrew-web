import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import peopleImg from "../assets/image/people_outline.svg";
import noteImg from "../assets/image/sticky_note_2.svg";
import feedbackImg from "../assets/image/feedback.svg";

const Layout = styled.div`
    width: 1680px;
    height: 3244px;
    background: #fff;
`;

const Spacing111 = styled.div`
    height: 111px;
`;

const Spacing268 = styled.div`
    height: 268px;
`;

const IntroContainer = styled.div`
    width: 1447px;
    height: 1655px;
    flex-shrink: 0;
    border-radius: 98px;
    background: #f7f7f7;
    margin-top: 125px;
    margin-left: 150px;
    margin-bottom: 250px;
`;

const Title = styled.div`
    color: #2e4f4f;
    font-family: AppleSDGothicNeoH00;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 145px;
    margin-left: 150px;
`;

const SubTitle1 = styled.div`
    color: #000;
    font-family: AppleSDGothicNeoB00;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 132px;
    padding-left: 150px;
`;

const Highlight = styled.span`
    position: relative;
    display: inline-block;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        background: rgba(186, 203, 206, 0.4);
    }
`;

const SubTitle2 = styled.div`
    color: #000;
    font-family: AppleSDGothicNeoL00;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 77px;
    padding-left: 150px;
`;

const SubTitle3 = styled.div`
    color: #829595;
    font-family: AppleSDGothicNeoB00;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubTitle4 = styled.div`
    color: #2f4f4f;
    font-family: AppleSDGothicNeoL00;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Logocontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Logoimg = styled.img`
    width: 200px;
    height: 200px;
`;

const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 1132px;
    margin-left: 157px;
    justify-content: space-between;
`;

const DevcrewIntroPage = () => {
    return (
        <Layout>
            <Topbar />
            <Title>데브 크루 소개</Title>
            <SubTitle1>
                <Highlight>IT 계열로 준비하는 여러분들,</Highlight> <br />
                <Highlight>우리들을 위한 소통공간</Highlight>
            </SubTitle1>
            <SubTitle2>
                저희는 IT계열로 창업과 취업을 꿈꾸며 기획하고, 디자인하고,
                개발하는 여러분들을 위해 <br />
                이 공간을 마련했습니다. 각자의 자리에서 열심히 노력하고 있지만,
                서로 소통할 공간이 <br />
                부족하다는 것을 느꼈습니다. 그래서 이제는 데브크루에서 함께
                준비할 수 있게 되었습니다. <br />
                <br />
                이곳에서는 IT 프로젝트를 위한 기획, 팀 매칭, 소통, 프로젝트
                관리까지 한 곳에서 끝낼 수 <br />
                있습니다. 각자의 자리에서 힘쓰는 여러분이 모두 소통하고 편리하게
                프로젝트를 준비할 수 <br />
                있도록 도와드리겠습니다.
            </SubTitle2>

            <IntroContainer>
                <Spacing111 />
                <FeatureContainer>
                    <Logocontainer>
                        <Logoimg src={peopleImg} alt="peopleImg" />
                        <SubTitle3>팀 매칭</SubTitle3>
                    </Logocontainer>
                    <SubTitle4>
                        IT 프로젝트를 위한 팀을 찾고, 프로젝트 공고에서 <br />
                        간편하게 본인 팀을 찾아보세요.
                    </SubTitle4>
                </FeatureContainer>

                <Spacing268 />

                <FeatureContainer>
                    <SubTitle4>
                        양식에 따라 작성한 본인의 포트폴리오를 관리하고, <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        프로젝트를 체계적으로 운영해보세요.
                    </SubTitle4>
                    <Logocontainer>
                        <Logoimg src={noteImg} alt="noteImg" />
                        <SubTitle3>
                            &nbsp;&nbsp;&nbsp;프로젝트 및 <br />
                            포트폴리오 관리
                        </SubTitle3>
                    </Logocontainer>
                </FeatureContainer>

                <Spacing268 />

                <FeatureContainer>
                    <Logocontainer>
                        <Logoimg src={feedbackImg} alt="feedbackImg" />
                        <SubTitle3>피드백과 조언</SubTitle3>
                    </Logocontainer>
                    <SubTitle4>
                        기획, 디자인, 코드 리뷰 및 피드백과 현직자의 조언을
                        <br />
                        받아보세요. 개발의 어려움을 겪거나 고민이 있을
                        <br />때 서로 도우며 해결해 나갈 수 있습니다.
                    </SubTitle4>
                </FeatureContainer>
            </IntroContainer>

            <Bottombar />
        </Layout>
    );
};

export default DevcrewIntroPage;
