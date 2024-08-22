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
  color: #000;
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
  min-width: 91%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 9px;
  padding: 19px 10px;
  margin-top: 7px;
`;

const DropdownItem = styled.div`
  color: #aeaeae;
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 55px;
  padding-left: 22px;
  &:hover {
    border-radius: 11px;
    background: rgba(211, 218, 218, 1);
    text-decoration: none;
  }
`;

const IcChevronDown = styled.img``;

export const DropdownInput = ({ value, onChange, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {value}
        <IcChevronDown src={icChevronDown} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem key={option} onClick={() => handleItemClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};
