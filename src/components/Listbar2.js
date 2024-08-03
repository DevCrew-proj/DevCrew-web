import styled from "styled-components";

const List = styled.div`
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
  cursor: pointer;

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

const ListBar2 = ({ category, setCategory }) => {
  return (
    <ListBarContainer>
      <List
        className={`${category === "전체" ? "active" : null}`}
        onClick={() => setCategory("전체")}
      >
        전체
      </List>
      <List
        className={`${category === "JAVA" ? "active" : null}`}
        onClick={() => setCategory("JAVA")}
      >
        JAVA
      </List>
      <List
        className={`${category === "JS" ? "active" : null}`}
        onClick={() => setCategory("JS")}
      >
        JS
      </List>
      <List
        className={`${category === "Kotlin" ? "active" : null}`}
        onClick={() => setCategory("Kotlin")}
      >
        Kotlin
      </List>
      <List
        className={`${category === "Python" ? "active" : null}`}
        onClick={() => setCategory("Python")}
      >
        Python
      </List>
      <List
        className={`${category === "Swift" ? "active" : null}`}
        onClick={() => setCategory("Swift")}
      >
        Swift
      </List>
      <List
        className={`${category === "C" ? "active" : null}`}
        onClick={() => setCategory("C")}
      >
        C
      </List>
      <List
        className={`${category === "기타" ? "active" : null}`}
        onClick={() => setCategory("기타")}
      >
        기타
      </List>
    </ListBarContainer>
  );
};

export default ListBar2;
