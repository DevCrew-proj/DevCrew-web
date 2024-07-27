import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';

const PickerContainer = styled.div`
  position: absolute;
  bottom: -300px; 
  right: 0;
  z-index: 1000;
`;

const EmojiPickerComponent = ({ onEmojiSelect, showPicker, togglePicker }) => {
  const handleEmojiClick = (emojiObject) => {
    onEmojiSelect(emojiObject.emoji);
    togglePicker(); 
  };

  return (
    <PickerContainer>
      {showPicker && (
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          emojiStyle="twitter" 
        />
      )}
    </PickerContainer>
  );
};

export default EmojiPickerComponent;
