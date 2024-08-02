import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import peopleImg from "../assets/image/people_outline.svg";
import noteImg from "../assets/image/sticky_note_2.svg";
import feedbackImg from "../assets/image/feedback.svg";

const Layout = styled.div`
    width: 1920px;
    height: 3244px;
    background: #fff;
`;

const Spacing63 = styled.div`
    height: 63px;
`;

const Spacing33 = styled.div`
    height: 33px;
`;

const Spacing49 = styled.div`
    height: 49px;
`;

const Spacing20 = styled.div`
    height: 20px;
`;

const Spacing4 = styled.div`
    width: 4px;
`;

const IntroContainer = styled.div`
    width: 1447px;
    height: 1655px;
    flex-shrink: 0;
    border-radius: 98px;
    background: #f7f7f7;
    margin-top: 125px;
    margin-left: 250px;
`;

const Title = styled.div`
    color: #2e4f4f;
    font-family: AppleSDGothicNeoH00;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 145px;
    margin-left: 279px;
`;

const SubTitle1 = styled.div`
    color: #000;
    font-family: AppleSDGothicNeoB00;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 132px;
    padding-left: 279px;
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
    padding-left: 279px;
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

            <IntroContainer></IntroContainer>

            <Bottombar />
        </Layout>
    );
};

export default DevcrewIntroPage;
