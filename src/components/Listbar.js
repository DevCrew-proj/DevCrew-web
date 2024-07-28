import styled from "styled-components";

const List = styled.div`
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

const ListBar = ({ category, setCategory }) => {
  return (
    <ListBarContainer>
      <List
        className={`${category === "전체" ? "active" : null}`}
        onClick={() => setCategory("전체")}
      >
        전체
      </List>
      <List
        className={`${category === "기획" ? "active" : null}`}
        onClick={() => setCategory("기획")}
      >
        기획
      </List>
      <List
        className={`${category === "디자인" ? "active" : null}`}
        onClick={() => setCategory("디자인")}
      >
        디자인
      </List>
      <List
        className={`${category === "Front-end" ? "active" : null}`}
        onClick={() => setCategory("Front-end")}
      >
        Front-end
      </List>
      <List
        className={`${category === "Back-end" ? "active" : null}`}
        onClick={() => setCategory("Back-end")}
      >
        Back-end
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

export default ListBar;
