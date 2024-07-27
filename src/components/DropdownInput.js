import React from "react";
import styled from "styled-components";
import icChevronDown from "../assets/image/icChevronDown.svg";
import { useState } from "react";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 240px;
  margin-top: 33px;
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

export const DropdownInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("상태");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedItem}
        <IcChevronDown src={icChevronDown} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick("옵션 1")}>
          옵션 1
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("옵션 2")}>
          옵션 2
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("옵션 3")}>
          옵션 3
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};
