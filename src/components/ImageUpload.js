import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageUploadButton from "../assets/image/ImageUploadBtn.svg";
import DeleteIconSrc from "../assets/image/delete.svg";

const Sidebar = styled.div`
  width: 100%;
  height: 100%;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 96px 5.5%;
  border: 1px solid #829595;
  border-radius: 17px;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: none;
`;

const PreviewItem = styled.div`
  border: 1px solid #829595;
  box-sizing: border-box;
  background: #d9d9d9;
  position: relative;
  width: calc(50% - 15px);
  height: 176px;
  margin-bottom: 16px;
  margin-left: 5px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2n + 1) {
    margin-right: 15px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &:hover div {
    opacity: 1;
  }
`;

const ImageUploadImg = styled.img`
  width: 40px;
  height: 40px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  background-image: url(${DeleteIconSrc});
  background-size: cover;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const LoadingIndicator = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #555;
`;

const ImageUpload = ({ setImageUrls, apiEndpoint }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!["jpeg", "jpg", "png", "gif", "webp"].includes(fileExtension)) {
        alert("Unsupported file type! Only JPEG, JPG, PNG, GIF, and WEBP are allowed.");
        return;
    }

    if (file.size > 5 * 1024 * 1024) { 
        alert("File size exceeds 5MB!");
        return;
    }

    setIsLoading(true);

    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileExtension", fileExtension);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const response = await axios.post(`${apiEndpoint}?fileExtensions=${fileExtension}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        console.log("Server response:", response.data);

        const data = response.data.data;
        if (!data || !Array.isArray(data) || data.length === 0 || !data[0].presignedUrl || !data[0].imageUrl) {
            throw new Error("Invalid response from server: Missing presignedUrl or imageUrl");
        }

        const { presignedUrl, imageUrl } = data[0];

        await axios.put(presignedUrl, file, {
            headers: {
                "Content-Type": file.type,
            },
        });

        setImageUrls((prevUrls) => [...prevUrls, imageUrl]);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImages((prevImages) => [...prevImages, reader.result]);
            setIsLoading(false);
        };
        reader.readAsDataURL(file);

    } catch (error) {
        console.error("Error processing file upload:", error);
        setIsLoading(false);

        if (error.response) {
            console.log("Server error response:", error.response.data);
            alert(`File upload failed: ${error.response.data}`);
        } else {
            alert(`File upload failed: ${error.message}`);
        }
    }
};


  const handleDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <Sidebar>
      {isLoading && <LoadingIndicator>Uploading...</LoadingIndicator>}
      <PreviewContainer>
        <PreviewItem className="ImageUploadBox" onClick={handleFileUploadClick}>
          <ImageUploadImg src={ImageUploadButton} alt="이미지 업로드" />
        </PreviewItem>
        <HiddenFileInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {images.map((image, index) => (
          <PreviewItem key={index}>
            <img src={image} alt={`Preview ${index + 1}`} />
            <DeleteIcon onClick={() => handleDelete(index)} />
          </PreviewItem>
        ))}
      </PreviewContainer>
    </Sidebar>
  );
};

export default ImageUpload;