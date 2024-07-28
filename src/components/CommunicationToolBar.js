import React, { useState } from "react";
import styled from "styled-components";
import Bold from "../assets/image/bold.svg";
import Slide from "../assets/image/slide.svg";
import Underline from "../assets/image/underline.svg";
import Line from "../assets/image/line.svg";
import Emoji from "../assets/image/emoji.svg";
import Sort from "../assets/image/sort.svg";
import BulletNum from "../assets/image/bulletnum.svg";
import BulletPoint from "../assets/image/bulletpoint.svg";
import Image from "../assets/image/image.svg";
import Link from "../assets/image/link.svg";
import Page from "../assets/image/page.svg";
import Back from "../assets/image/back.svg";
import Forward from "../assets/image/forward.svg";
import Paragraph from "../assets/image/paragraph.svg";
import EmojiPickerComponent from "./EmojiPickerComponent"; //npm install emoji-picker-react

const Layout = styled.div`
  width: 1290px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Toolbar = styled.div`
  margin: 3px 0 2px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ToolbarItem = styled.div`
  margin: 2px 0 3px 0;
  display: flex;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative; /* Added for positioning child elements */

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;

    img {
      width: 18px;
      height: 18px;
    }
  }

  &.active {
    border: 2px solid #007bff;
    border-radius: 4px;
  }
`;

const ToolbarImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const SortOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  z-index: 10; /* Ensure it's above other elements */
  width: 120px; /* Adjust width as needed */
`;

const SortOption = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const CommunicationToolBar = ({ onToolChange, onEmojiClick }) => {
  const [activeTool, setActiveTool] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleClick = (tool) => {
    const newTool = tool === activeTool ? null : tool;
    setActiveTool(newTool);
    if (tool === "sort") {
      setShowSortOptions(!showSortOptions);
    } else {
      setShowSortOptions(false);
      if (onToolChange) {
        onToolChange(newTool);
      }
    }
  };

  const handleSort = (alignment) => {
    if (onToolChange) {
      onToolChange("sort", alignment);
    }
    setShowSortOptions(false);
  };

  const handleEmojiSelect = (emoji) => {
    if (onEmojiClick) {
      onEmojiClick(emoji);
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <Layout>
      <Toolbar>
        <ToolbarItem
          className={activeTool === "bold" ? "active" : ""}
          onClick={() => handleClick("bold")}
        >
          <ToolbarImg src={Bold} alt='Bold' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "slide" ? "active" : ""}
          onClick={() => handleClick("slide")}
        >
          <ToolbarImg src={Slide} alt='Slide' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "underline" ? "active" : ""}
          onClick={() => handleClick("underline")}
        >
          <ToolbarImg src={Underline} alt='Underline' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "line" ? "active" : ""}
          onClick={() => handleClick("line")}
        >
          <ToolbarImg src={Line} alt='Line' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "icon" ? "active" : ""}
          onClick={togglePicker}
        >
          <ToolbarImg src={Emoji} alt='Emoji' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "sort" ? "active" : ""}
          onClick={() => handleClick("sort")}
        >
          <ToolbarImg src={Sort} alt='Sort' />
          <SortOptions show={showSortOptions}>
            <SortOption onClick={() => handleSort("left")}>
              Left Align
            </SortOption>
            <SortOption onClick={() => handleSort("center")}>
              Center Align
            </SortOption>
            <SortOption onClick={() => handleSort("right")}>
              Right Align
            </SortOption>
          </SortOptions>
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "bulletnum" ? "active" : ""}
          onClick={() => handleClick("bulletnum")}
        >
          <ToolbarImg src={BulletNum} alt='BulletNum' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "bulletpoint" ? "active" : ""}
          onClick={() => handleClick("bulletpoint")}
        >
          <ToolbarImg src={BulletPoint} alt='BulletPoint' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "paragraph" ? "active" : ""}
          onClick={() => handleClick("paragraph")}
        >
          <ToolbarImg src={Paragraph} alt='Paragraph' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "image" ? "active" : ""}
          onClick={() => handleClick("image")}
        >
          <ToolbarImg src={Image} alt='Image' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "link" ? "active" : ""}
          onClick={() => handleClick("link")}
        >
          <ToolbarImg src={Link} alt='Link' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "page" ? "active" : ""}
          onClick={() => handleClick("page")}
        >
          <ToolbarImg src={Page} alt='Page' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "back" ? "active" : ""}
          onClick={() => handleClick("back")}
        >
          <ToolbarImg src={Back} alt='Back' />
        </ToolbarItem>
        <ToolbarItem
          className={activeTool === "forward" ? "active" : ""}
          onClick={() => handleClick("forward")}
        >
          <ToolbarImg src={Forward} alt='Forward' />
        </ToolbarItem>
        <EmojiPickerComponent
          onEmojiSelect={handleEmojiSelect}
          showPicker={showPicker}
          togglePicker={togglePicker}
        />
      </Toolbar>
    </Layout>
  );
};

export default CommunicationToolBar;
