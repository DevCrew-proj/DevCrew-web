import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 10%;
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

const ListBar2 = () => {
  const location = useLocation();
  // const { id } = useParams();
  return (
    <ListBarContainer>
      {/* 현재 페이지일 때는 표시 바꾸기 */}
      <StyledLink
        to='/communication4'
        className={`${
          location.pathname === "/communication4" ? "active" : null
        }`}
      >
        전체
      </StyledLink>
      <StyledLink
        to='/communication4/java'
        className={`${
          location.pathname === "/communication4/java" ? "active" : null
        }`}
      >
        JAVA
      </StyledLink>
      <StyledLink
        to='/communication4/js'
        className={`${
          location.pathname === "/communication4/js" ? "active" : null
        }`}
      >
        JS
      </StyledLink>
      <StyledLink
        to='/communication4/koilin'
        className={`${
          location.pathname === "/communication4/kotlin" ? "active" : null
        }`}
      >
        Kotlin
      </StyledLink>
      <StyledLink
        to='/communication4/python'
        className={`${
          location.pathname === "/communication4/python" ? "active" : null
        }`}
      >
        Python
      </StyledLink>
      <StyledLink
        to='/communication4/swift'
        className={`${
          location.pathname === "/communication4/swift" ? "active" : null
        }`}
      >
        Swift
      </StyledLink>
      <StyledLink
        to='/communication4/c'
        className={`${
          location.pathname === "/communication4/c" ? "active" : null
        }`}
      >
        C
      </StyledLink>
      <StyledLink
        to='/communication4/etc'
        className={`${
          location.pathname === "/communication4/etc" ? "active" : null
        }`}
      >
        기타
      </StyledLink>
    </ListBarContainer>
  );
};

export default ListBar2;
