import styled from "styled-components";
import Arrow from "../assets/image/arrow3.svg";
import { useEffect } from "react";

const PaginationContainer = styled.div`
  width: 100%;
  height: 26px;
`;

const PagingBox = styled.ol`
  width: 164px;
  height: 28px;
  margin: 0 auto;
  text-align: center;
  padding: 0;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;

const PageList = styled.li`
  width: 28px;
  color: #2f4f4f;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid #fff;
  border-radius: 14px;
  box-sizing: border-box;
  line-height: 1.3;
  cursor: pointer;
  display: block;
  float: left;
  margin: 0 2px;

  &.Arrow {
    margin-top: 5px;
    background-color: transparent;
    padding: 0;
  }

  ${(props) => props.active && `background-color: #2f4f4f; color: #fff;`}

  &.Number:hover {
    color: #fff;
    border: 1px solid #2f4f4f;
    border-radius: 14px;
    background-color: #2f4f4f;
  }
`;

const ArrowImg = styled.img`
  width: 22px;
  height: 18px;
  transform: ${(props) => props.rotate};
  // transition: transform 0.3s ease-in-out;
  display: block;
`;

const Pagination = ({ page, totalPages, setPage, category }) => {
  // 카테고리 변경 시 페이지 초기화

  useEffect(() => {
    setPage(1);
  }, [category]);

  /** Pagination
   * 어떤 한 페이지 그룹의 첫번째 페이지 번호 = ((페이지 그룹 - 1) * 한 화면에 보여질 페이지 개수) + 1
   * 어떤 한 페이지 그룹의 마지막 페이지 번호 = 페이지 그룹 * 한 화면에 보여질 페이지 개수
   * (단, 페이지 그룹 * 한 화면에 보여질 페이지 개수의 값이 전체 페이지보다 크다면 전체 페이지가 마지막 페이지 번호가 됩니다)
   * 첫번째 페이지 번호 = ((2 - 1) * 5) + 1 = 6
   * 마지막 페이지 번호 = 2 * 5 = 10
   */

  // 총 페이지 수 = Math.ceil(전체 컨텐츠 개수 / 한 페이지에 보여주고자 하는 컨텐츠의 개수)

  let pageGroupNum = Math.ceil(page / 3);
  // 한 화면에 보여질 페이지 그룹 번호 = Math.ceil(8 / 5) = 2

  let lastPageNum = pageGroupNum * 3;
  // 마지막 페이지

  let firstPageNum = lastPageNum - (3 - 1) <= 0 ? 1 : lastPageNum - (3 - 1);
  // 첫 페이지


  const handlePageSub = () => {
    for (let i = 0; i < 9999; i++) {
      if (page === 3 * i + 1) setPage(page - 1);
      else if (page === 3 * i + 2) setPage(page - 2);
      else if (page === 3 * i + 3) setPage(page - 3);
    }
  };

  const handlePageAdd = () => {
    for (let i = 0; i < 9999; i++) {
      if (page === 3 * i + 1) setPage(page + 3);
      else if (page === 3 * i + 2) setPage(page + 2);
      else if (page === 3 * i + 3) setPage(page + 1);
    }
  };

  const handleAfterArrow = () => {
    // 페이지가 3페이지 이하일 때
    if (totalPages <= 3) return false;

    // 페이지가 4페이지 이상일 때
    if (page === firstPageNum && page + 3 <= totalPages) return true;
    if (page === firstPageNum + 1 && page + 2 <= totalPages) return true;
    if (page === firstPageNum + 2 && page + 1 <= totalPages) return true;

    return false;
  };

  return (
    <PaginationContainer>
      <PagingBox>
        <PageList
          className='Before Arrow'
          as='button'
          onClick={() => handlePageSub()}
        >
          {page <= 3 ? null : (
            <ArrowImg src={Arrow} alt='Arrow' rotate='rotate(180deg)' />
          )}
        </PageList>
        <PageList
          className='Page Number'
          onClick={() => {
            setPage(firstPageNum);
          }}
          active={page === firstPageNum}
        >
          {firstPageNum}
        </PageList>
        {firstPageNum + 1 > totalPages ? null : (
          <PageList
            className='Page Number'
            onClick={() => {
              if (firstPageNum + 1 > totalPages) setPage(totalPages);
              else setPage(firstPageNum + 1);
            }}
            active={page === firstPageNum + 1}
          >
            {firstPageNum + 1}
          </PageList>
        )}
        {lastPageNum > totalPages ? null : (
          <PageList
            className='Page Number'
            onClick={() => {
              if (lastPageNum > totalPages) setPage(totalPages);
              else setPage(lastPageNum);
            }}
            active={page === lastPageNum}
          >
            {lastPageNum}
          </PageList>
        )}
        <PageList
          className='After Arrow'
          as='button'
          onClick={() => handlePageAdd()}
        >
          {handleAfterArrow() ? (
            <ArrowImg src={Arrow} alt='Arrow' rotate='rotate(0deg)' />
          ) : null}
        </PageList>
      </PagingBox>
    </PaginationContainer>
  );
};

export default Pagination;
