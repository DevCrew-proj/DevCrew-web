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
  margin: 0 auto 74px;
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
        className={`${category === "PLAN" ? "active" : null}`}
        onClick={() => setCategory("PLAN")}
      >
        기획
      </List>
      <List
        className={`${category === "DESIGN" ? "active" : null}`}
        onClick={() => setCategory("DESIGN")}
      >
        디자인
      </List>
      <List
        className={`${category === "FRONTEND" ? "active" : null}`}
        onClick={() => setCategory("FRONTEND")}
      >
        Front-end
      </List>
      <List
        className={`${category === "BACKEND" ? "active" : null}`}
        onClick={() => setCategory("BACKEND")}
      >
        Back-end
      </List>
      <List
        className={`${category === "OTHER" ? "active" : null}`}
        onClick={() => setCategory("OTHER")}
      >
        기타
      </List>
    </ListBarContainer>
  );
};

export default ListBar;
