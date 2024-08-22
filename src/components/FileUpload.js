import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectFile from "../assets/image/selectfile.svg";
import Delete from "../assets/image/delete.svg";

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const UploadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 17px;
  border: 1px solid #829595;
  padding: 20px 36px;
  box-sizing: border-box;
`;

const FileInfo = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow-wrap: break-word;
  font-family: Pretendard;
  font-weight: normal;
  font-size: 30px;
  color: #6e6e6e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
`;

const FileIcon = styled.img`
  margin-right: 22px;
  width: 38px;
  height: 27px;
  vertical-align: middle;
  transform: ${(props) =>
    props.$fileDropDown ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const FileSize = styled.div`
  display: block;
  overflow-wrap: break-word;
  font-family: Pretendard;
  font-weight: normal;
  font-size: 30px;
  color: #c8c8c8;
  float: left;
`;

const Dot = styled.div`
  display: block;
  border-radius: 3px;
  background: #d9d9d9;
  width: 6px;
  height: 6px;
  float: left;
  margin: 15px 12px 0;
`;

const DeleteIcon = styled.img`
  margin: 4.5px 0 4.4px 0;
  width: 26.1px;
  height: 26.1px;
  cursor: pointer;
`;

const FileClickContainer = styled.div`
  width: 100%;
  max-height: 229px;
  background-color: #f7f7f7;
  display: ${(props) => (props.$fileDropDown ? "block" : "none")};
  position: absolute;
  top: 84px;
  left: 0;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const AddFileBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  border: 1px solid #829595;
  padding: 20px;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: normal;
  font-size: 30px;
  color: #6e6e6e;
`;

const FileUpload = ({ apiEndpoint, setFileUrls }) => {
  const [fileDropDown, setFileDropDown] = useState(false);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setFileUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();

    const allowedExtensions = ["pdf", "doc", "docx","txt"];
    
    if (!allowedExtensions.includes(fileExtension)) {
        alert("지원하지 않는 파일 형식입니다. PDF, 워드, 텍스트 파일만 가능합니다.");
        return;
    }

    if (file.size > 5 * 1024 * 1024) { 
        alert("파일 크기가 5MB를 초과합니다.");
        return;
    }

    setIsLoading(true);

    try {
        let contentType = '';
        switch(fileExtension) {
            case 'pdf':
                contentType = 'application/pdf';
                break;
            case 'doc':
                contentType = 'application/msword';
                break;
            case 'docx':
                contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'txt':
                contentType = 'text/plain';
                break;
            default:
                contentType = 'application/octet-stream';
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileExtension", fileExtension);

        const response = await axios.post(`${apiEndpoint}?fileExtensions=${fileExtension}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        console.log("Server response:", response.data);

        const responseData = response.data.data;

        if (Array.isArray(responseData) && responseData.length > 0) {
            let { presignedUrl, imageUrl } = responseData[0];

            if (!presignedUrl || !imageUrl) {
                throw new Error("서버 응답에 presignedUrl 또는 imageUrl이 없습니다.");
            }

            console.log("Using presigned URL:", presignedUrl);

            await axios.put(presignedUrl, file, {
                headers: {
                    "Content-Type": contentType,  
                },
            });

            const fileUrl = imageUrl; 
            setFiles((prevFiles) => [
                ...prevFiles,
                {
                    name: file.name,
                    size: `${(file.size / 1024).toFixed(2)} kb`,
                    url: fileUrl,
                },
            ]);
            setFileUrls((prevUrls) => [...prevUrls, fileUrl]);
            setFileDropDown(true);

        } else {
            throw new Error("서버 응답 구조가 예상과 다릅니다.");
        }

    } catch (error) {
        console.error("파일 업로드 처리 중 오류:", error);
        setIsLoading(false);

        if (error.response) {
            console.log("서버 오류 응답:", error.response.data);
            alert(`파일 업로드 실패: ${error.response.data}`);
        } else {
            alert(`파일 업로드 실패: ${error.message}`);
        }
    }

    setIsLoading(false);
};

  return (
    <Layout>
      {isLoading && <div>업로드 중...</div>}
      <UploadContainer>
        <FileInfo>
          <FileIcon
            src={SelectFile}
            alt="SelectFile"
            $fileDropDown={fileDropDown}
            onClick={() => setFileDropDown(!fileDropDown)}
          />
          {files.length > 0 ? files[0].name : "추가할 파일을 선택하세요"}
        </FileInfo>
        {files.length > 0 && (
          <>
            <FileInfo>
              <Dot />
              <FileSize>{files[0].size}</FileSize>
            </FileInfo>
            <DeleteIcon
              src={Delete}
              alt="Delete Icon"
              onClick={() => handleDelete(0)}
            />
          </>
        )}
      </UploadContainer>

      {fileDropDown && (
        <FileClickContainer $fileDropDown={fileDropDown}>
          {files.slice(1).map((file, index) => (
            <UploadContainer key={index} className="remainFile">
              <FileInfo>{file.name}</FileInfo>
              <FileInfo>
                <Dot />
                <FileSize>{file.size}</FileSize>
              </FileInfo>
              <DeleteIcon
                src={Delete}
                alt="Delete Icon"
                onClick={() => handleDelete(index + 1)}
              />
            </UploadContainer>
          ))}
          <label htmlFor="fileUpload">
            <AddFileBar>
              + 파일 추가
            </AddFileBar>
          </label>
        </FileClickContainer>
      )}
      <HiddenFileInput
        type="file"
        id="fileUpload"
        onChange={handleFileChange}
        multiple
      />
    </Layout>
  );
};

export default FileUpload;
