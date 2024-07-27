import React from "react";
import styled from "styled-components";
import icChevronDown from "../assets/image/icChevronDown.svg";
import { useState } from "react";
import { InputLabel } from "./InputLabel";

const Container = styled.div`
  flex: 1 1 calc(50% - 67px);
  box-sizing: border-box;
  margin-bottom: 67px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 19px 18px;
  font-size: 18px;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  &:hover {
    border-color: #bbb;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 10px 10px;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const IcChevronDown = styled.img``;

export const GenderDropdownInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("성별 선택");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <InputLabel labelText="성별" />
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {selectedItem}
          <IcChevronDown src={icChevronDown} />
        </DropdownButton>
        <DropdownContent isOpen={isOpen}>
          <DropdownItem onClick={() => handleItemClick("남")}>남</DropdownItem>
          <DropdownItem onClick={() => handleItemClick("여")}>여</DropdownItem>
          <DropdownItem onClick={() => handleItemClick("해당 없음")}>
            해당 없음
          </DropdownItem>
        </DropdownContent>
      </DropdownContainer>
    </Container>
  );
};
