import styled from "styled-components";

const ListBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto 82px;
`;

const ListContent = styled.span`
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

  &:hover {
    color: #2e4f4f;
    border-top: 8px solid #2e4f4f;
  }
`;

const ListBar2 = () => {
  return (
    <ListBarContainer>
      {/* 현재 페이지일 때는 표시 바꾸기 */}
      <ListContent onClick={() => {}}>전체</ListContent>
      <ListContent onClick={() => {}}>JAVA</ListContent>
      <ListContent onClick={() => {}}>JS</ListContent>
      <ListContent onClick={() => {}}>Kotlin</ListContent>
      <ListContent onClick={() => {}}>Python</ListContent>
      <ListContent onClick={() => {}}>Swift</ListContent>
      <ListContent onClick={() => {}}>C</ListContent>
      <ListContent onClick={() => {}}>기타</ListContent>
    </ListBarContainer>
  );
};

export default ListBar2;
