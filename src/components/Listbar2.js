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
      <StyledLink
        to='/communication3'
        className={`${
          location.pathname === "/communication3" ? "active" : null
        }`}
      >
        전체
      </StyledLink>
      <StyledLink
        to='/communication3/java'
        className={`${
          location.pathname === "/communication3/java" ? "active" : null
        }`}
      >
        JAVA
      </StyledLink>
      <StyledLink
        to='/communication3/js'
        className={`${
          location.pathname === "/communication3/js" ? "active" : null
        }`}
      >
        JS
      </StyledLink>
      <StyledLink
        to='/communication3/koilin'
        className={`${
          location.pathname === "/communication3/kotlin" ? "active" : null
        }`}
      >
        Kotlin
      </StyledLink>
      <StyledLink
        to='/communication3/python'
        className={`${
          location.pathname === "/communication3/python" ? "active" : null
        }`}
      >
        Python
      </StyledLink>
      <StyledLink
        to='/communication3/swift'
        className={`${
          location.pathname === "/communication3/swift" ? "active" : null
        }`}
      >
        Swift
      </StyledLink>
      <StyledLink
        to='/communication3/c'
        className={`${
          location.pathname === "/communication3/c" ? "active" : null
        }`}
      >
        C
      </StyledLink>
      <StyledLink
        to='/communication3/etc'
        className={`${
          location.pathname === "/communication3/etc" ? "active" : null
        }`}
      >
        기타
      </StyledLink>
    </ListBarContainer>
  );
};

export default ListBar2;
