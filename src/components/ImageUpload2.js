import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Delete from "../assets/image/delete.svg";
import addfile from "../assets/image/AddFile.svg";

// 스타일 정의
const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.button`
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background: #829595;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 58px;
  padding: 15px 17px 15px 16px;
  margin-top: 22px;
  margin-left: 27px;
`;

const FileInfo = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

const DeleteIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const ImageUpload2 = ({ formData, setFormData, apiEndpoint }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (!["jpeg", "jpg", "png", "gif", "webp"].includes(fileExtension)) {
      alert(
        "Unsupported file type! Only JPEG, JPG, PNG, GIF, and WEBP are allowed."
      );
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

      const response = await axios.post(
        `${apiEndpoint}?fileExtensions=${fileExtension}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server response:", response.data);

      const data = response.data.data;
      if (
        !data ||
        !Array.isArray(data) ||
        data.length === 0 ||
        !data[0].presignedUrl ||
        !data[0].imageUrl
      ) {
        throw new Error(
          "Invalid response from server: Missing presignedUrl or imageUrl"
        );
      }

      const { presignedUrl, imageUrl } = data[0];

      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, imageUrl],
      }));

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
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <Layout>
      {isLoading && <div>업로드 중...</div>}
      <FileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        required
      />
      <FileButton type="button" onClick={handleFileUploadClick}>
        <img src={addfile} alt="파일 추가" style={{ marginRight: 8 }} />
        파일추가
      </FileButton>
      {images.map((file, index) => (
        <FileInfo key={index}>
          {file.name} - {file.size}
          <DeleteIcon
            src={Delete}
            alt="파일 삭제"
            onClick={() => handleDelete(index)}
          />
        </FileInfo>
      ))}
    </Layout>
  );
};

export default ImageUpload2;
