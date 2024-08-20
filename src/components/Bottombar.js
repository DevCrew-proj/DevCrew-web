import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 1680px;
  height: 184px;
  flex-shrink: 0;
  background: #f7f7f7;
`;

const Line = styled.div`
  width: 1680px;
  height: 5px;
  flex-shrink: 0;
  background: #829595;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const Text1 = styled.div`
  color: #2f4f4f;
  text-align: center;
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 90px;
`;
const Text2 = styled.div`
  color: #2f4f4f;
  text-align: center;
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;
`;
const Text3 = styled.div`
  color: #2f4f4f;
  text-align: center;
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 1192px;
`;
const Text4 = styled.div`
  color: #2f4f4f;
  text-align: center;
  font-family: AppleSDGothicNeoL00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;
`;
const Bottombar = () => {
  return (
    <Layout>
      <Line />
      <Info>
        <Text1>개인정보처리방침</Text1>
        <Text2>이용약관</Text2>
        <Text3>About Us</Text3>
        <Text4>Terms & Condition</Text4>
      </Info>
    </Layout>
  );
};
export default Bottombar;
