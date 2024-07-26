import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  min-width: 128px;
  color: #b8b8b8;
  font-family: AppleSDGothicNeoM00;
  font-size: 30px;
  line-height: 1.2;
  padding-top: 30px;
  text-align: center;
  box-sizing: border-box;
  border-top: 8px solid #fff;
  transition: border-top 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #2e4f4f;
    border-top: 8px solid #2e4f4f;
  }

  &.active {
    color: #2e4f4f;
    border-top: 8px solid #2e4f4f;
  }
`;

const ListBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto 82px;
`;

const ListBar = () => {
  const location = useLocation();
  return (
    <ListBarContainer>
      {/* 현재 페이지일 때는 표시 바꾸기 */}
      <StyledLink
        to='/communication1'
        className={`${
          location.pathname === "/communication1" ? "active" : null
        }`}
      >
        전체
      </StyledLink>
      <StyledLink
        to='/communication1/plan'
        className={`${
          location.pathname === "/communication1/plan" ? "active" : null
        }`}
      >
        기획
      </StyledLink>
      <StyledLink
        to='/communication1/design'
        className={`${
          location.pathname === "/communication1/design" ? "active" : null
        }`}
      >
        디자인
      </StyledLink>
      <StyledLink
        to='/communication1/frontend'
        className={`${
          location.pathname === "/communication1/frontend" ? "active" : null
        }`}
      >
        Front-end
      </StyledLink>
      <StyledLink
        to='/communication1/backend'
        className={`${
          location.pathname === "/communication1/backend" ? "active" : null
        }`}
      >
        Back-end
      </StyledLink>
      <StyledLink
        to='/communication1/etc'
        className={`${
          location.pathname === "/communication1/etc" ? "active" : null
        }`}
      >
        기타
      </StyledLink>
    </ListBarContainer>
  );
};

export default ListBar;
