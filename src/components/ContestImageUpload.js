import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import addfile from "../assets/image/AddFile.svg";
import IconDelete from "../assets/image/DeleteFile.svg";

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
const FileInput = styled.input`
    display: none;
`;
const FileContainer = styled.div`
display : flex;
flex-direction : row;`

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

const FileItem = styled.div`
 width: 296px;
height: 58px;
flex-shrink: 0;
border-radius: 8px;
background: #829595;
margin-top: 22px;
margin-left: 167px;
display : flex;
`;

const FileName = styled.span`
  color: #FFF;
font-family: AppleSDGothicNeoB00;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
/* margin-top : 15px; */
display : flex;
align-items: center;
margin-left :18px;
`;

const FileDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 21px;

`;



const PresignedImageUpload = ({ setImageUrls, apiEndpoint, accessToken }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]); // 업로드된 파일을 관리

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (!["jpeg", "jpg", "png", "gif", "pdf"].includes(fileExtension)) {
        alert("지원하지 않는 파일 형식입니다. JPEG, JPG, PNG, GIF, PDF만 가능합니다");
        return;
    }

    if (file.size > 5 * 1024 * 1024) { 
        alert("파일 크기가 5MB를 초과합니다.");
        return;
    }

    setIsLoading(true);

    try {
        const url = `${apiEndpoint}?fileExtensions=${fileExtension}`;
        console.log("API 요청 URL:", url);
        
        // 1. Get the presigned URL and image URL from the API
        const presignResponse = await axios.post(url, null, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
             
            },
        });

        console.log("서버 응답 데이터:", presignResponse.data);
        const data = presignResponse.data.data[0];
        if (!data || !data.presignedUrl || !data.imageUrl) {
            throw new Error("Invalid response from server: Missing presignedUrl or imageUrl");
        }

        const { presignedUrl, imageUrl } = data;

        // 2. Upload the file to S3 using the presigned URL
        await axios.put(presignedUrl, file, {
            headers: {
                "Content-Type": file.type,
            },
        });

        // 3. Update the image URLs list and local image preview
        setImageUrls((prevUrls) => [...prevUrls, imageUrl]);
        setFiles((prevFiles) => [...prevFiles, { file, imageUrl }]); // 파일 목록에 추가

        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setImages((prevImages) => [...prevImages, reader.result]);
        //     setIsLoading(false);
        // };
        // reader.readAsDataURL(file);

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

//   const handleDelete = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
//   }; 
const handleDelete = (index) => {
    // files 배열에서 해당 인덱스의 파일 삭제
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    // imageUrls 배열에서 해당 인덱스의 이미지 URL 삭제
    setImageUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  return (
    <Layout>
        <FileContainer>
        <FileInput
            type="file"
            name="posterImage"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
        />
        <FileButton type="button" onClick={handleFileClick}>
            <img
                src={addfile}
                alt="파일 추가"
                style={{ marginRight: 8 }}
                />
            파일추가 
        </FileButton> 
        {files.map((fileData, index) => (
          <FileItem key={index}>
            <FileName>{fileData.file.name}</FileName>
            <FileDeleteButton onClick={() => handleDelete(index)}type="button">
            <img src= {IconDelete}></img> </FileDeleteButton>
          </FileItem>
        ))}
    </FileContainer>         
    </Layout>

         
  );
};

export default PresignedImageUpload;
