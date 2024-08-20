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

const IcProfile = styled.img`
  width: 250px;
  height: 250px;
  margin: 0px 80px;
  border-radius: 999px;
  object-fit: cover;
`;

const FileInput = styled.input`
  display: none;
`;

const FileButton = styled.button`
  position: absolute;
  top: 180px;
  right: 80px;
  width: 80px;
  height: 80px;
  border-radius: 999px;
  border: none;
  background-color: gray;
`;

const ImageUpload3 = ({ formData, setFormData, apiEndpoint }) => {
  //   const [image, setImage] = useState([]);
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

      const { presignedUrl, imageUrl } = response.data.data;

      if (!presignedUrl || !imageUrl) {
        throw new Error(
          "Invalid response from server: Missing presignedUrl or imageUrl"
        );
      }

      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      const newImageUrl = response.data.data.imageUrl;

      setFormData((prevFormData) => ({
        ...prevFormData,
        imageUrl: newImageUrl,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        // setImage(reader.result);
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

  return (
    <Layout>
      {isLoading ? <IcProfile /> : <IcProfile src={formData.imageUrl} />}
      <FileInput type="file" ref={fileInputRef} onChange={handleFileChange} />
      <FileButton type="button" onClick={handleFileUploadClick}>
        <img src={addfile} alt="프로필 설정" />
      </FileButton>
    </Layout>
  );
};

export default ImageUpload3;
