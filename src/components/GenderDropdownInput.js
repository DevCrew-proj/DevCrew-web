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
  min-width: 100%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 9px;
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

export const GenderDropdownInput = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <Container>
      <InputLabel labelText="성별" />
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {value}
          <IcChevronDown src={icChevronDown} />
        </DropdownButton>
        <DropdownContent isOpen={isOpen}>
          <DropdownItem onClick={() => handleItemClick("남성")}>
            남성
          </DropdownItem>
          <DropdownItem onClick={() => handleItemClick("여성")}>
            여성
          </DropdownItem>
        </DropdownContent>
      </DropdownContainer>
    </Container>
  );
};
