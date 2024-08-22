// src/pages/ContestUpload.js
import React, { useState, useRef } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import Topbar from "../components/Topbar";
import addfile from "../assets/image/AddFile.svg";
import Bottombar from "../components/Bottombar";
import PresignedImageUpload from "../components/ContestImageUpload";  // PresignedImageUpload 컴포넌트 임포트

const Layout = styled.div`
    width: 1920px;
`;

const Title = styled.div`
    color: var(--Gray-zip_gray800, #373737);
    font-family: AppleSDGothicNeoB00;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 170px;
    margin-left: 292px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 282px;
    margin-top: 78px;
    width: 60%;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #97a7a7;
    width: 1356px;
    &:last-child {
        border: 1px solid #97a7a7;
    }
`;

const Label = styled.label`
    width: 243px;
    height: 62px;
    flex-shrink: 0;
    background: #f1f1f1;
    color: var(--Gray-zip_gray800, #373737);
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    padding-top: 37px;
    padding-left: 39px;
`;

const Input = styled.input`
    //padding: 10px;
    font-size: 16px;
    border-radius: 11px;
    border: 1px solid #829595;
    width: 201px;
    height: 52px;
    flex-shrink: 0;
    margin-top: 23px;
    margin-left: 33px;
    text-align: center;
`;

const TextArea = styled.textarea`
    display: flex;
    width: 1313px;
    height: 598px;
    padding: 40px 0 0 49px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    background: #f7f7f7;
    color: #8f8f8f;
    font-family: AppleSDGothicNeoL00;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 23px;
`;

const Select = styled.select`
    display: flex;
    width: 280px;
    height: 54px;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(179, 179, 179, 0.7);
    background: var(--Gray-white, #fff);
    margin-top: 27px;
    margin-left: 27px;
`;

const Option = styled.option`
    padding: 10px;
    font-size: 16px;
    width: 280px;
    height: 349px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #829595;
    background: var(--Gray-white, #fff);
`;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 27px;
    margin-left: 27px;
`;

const DropdownButton = styled.button`
    background: var(--Gray-white, #fff);
    color: #373737;
    padding: 16px 20px;
    font-size: 16px;
    border: 1px solid rgba(179, 179, 179, 0.7);
    border-radius: 8px;
    cursor: pointer;
    width: 280px;
    height: 54px;
    text-align: left;

    &:after {
        content: "▼";
        float: right;
        margin-left: 20px;
    }
`;

const DropdownContent = styled.div`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    z-index: 1;
    width: 280px;
    height: 330px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #829595;
    background: var(--Gray-white, #fff);
`;

const DropdownItem = styled.div`
    color: #2f4f4f;
    font-family: AppleSDGothicNeoM00;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    display: flex;
    //justify-content : center;
    align-items: center;
    cursor: pointer;
    height: 55px;
    padding-left: 22px;
    &:hover {
        border-radius: 11px;
        background: rgba(130, 149, 149, 0.59);
        text-decoration: none;
    }
`;

const Button = styled.button`
    width: 160.562px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--sub, #5d6c6f);
    color: #fff;
    text-align: center;
    font-family: AppleSDGothicNeoB00;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 111px;
    margin-left: 505px;
    margin-bottom: 117px;
    cursor: pointer;
`;

const Button2 = styled.button`
    width: 160.562px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #5d6c6f;
    background: #fff;
    color: #5d6c6f;
    text-align: center;
    font-family: AppleSDGothicNeoB00;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 31.44px;
    cursor: pointer;
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

const AddTitle = styled.div`
    color: #000;
    font-family: AppleSDGothicNeoEB00;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 101px;
    //margin-left : 293px;
`;

const ContestUpload = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        posterImage: null,
        contestName: "",
        organizingBody: "",
        targetAudience: "",
        contactInfo: "",
        prizeAmount: "",
        applicationPeriod: "",
        website: "",
        contestField: "창업",
        activityBenefits: "",
        additionalBenefits: "",
        additionalNotes: "",
    });

    const navigate = useNavigate();
    const sectorMapping = {
        "창업": "STARTUP",
        "생성형 AI": "AI",
        "플랫폼": "PLATFORM",
        "데이터분석": "DATAALALYSIS",
        "게임": "GAME",
        "기타": "OTHER"
    };
    
    const [imageUrls, setImageUrls] = useState([]);  // 업로드된 이미지 URL들을 관리하는 상태
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "posterImage") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleItemClick = (value) => {
        setFormData({ ...formData, contestField: value });
        setDropdownOpen(false);
    };
    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const access_token = sessionStorage.getItem('auth_token');

    const handleSubmit = async (e) => { // async 추가
        e.preventDefault();
       // const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcyNDYwOTM2OCwiZW1haWwiOiJnYWh5dW5nMTlAbmF2ZXIuY29tIn0.7Yt0khjYHs2nqhNNP4HvzUsi-0tW0yWzUSsObHo71OjdhDGbVPz_BCQuoU2VhiodXr1H7E4cOl9mgQ_Hh9JA2Q'
      
        if (imageUrls.length === 0) {
            alert("포스터 사진을 업로드해 주세요.");
            return;
        }
        const selectedSector = sectorMapping[formData.contestField];  // 한국어를 영문 코드로 변환
    
        const data = {
            poster: imageUrls[0],  // 업로드된 이미지 URL 중 첫 번째 이미지를 사용
            title: formData.contestName.trim(), // 공모전 제목
            organization: formData.organizingBody.trim(), // 주최 기관
            participantTarget: formData.targetAudience.trim(), // 참여 대상
            award: formData.prizeAmount.trim(), // 시상 규모
            homepageUrl: formData.website.trim(), // 홈페이지 URL
            acceptancePeriod: formData.applicationPeriod.trim(), // 접수 기간
            sector: selectedSector,  // 변환된 영문 코드 사용
            benefits: formData.activityBenefits.trim(), // 활동 혜택
            plusBenefits: formData.additionalBenefits.trim(), // 추가 혜택
            description: formData.additionalNotes.trim(), // 추가 설명
        };

    console.log("전송할 데이터:", data);
    
        try {
            const response = await axios.post("https://devcrew.kr/api/v1/contests/", data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`,
                },
            });
            console.log("응답 데이터:", response.data);
            alert("공모전이 성공적으로 등록되었습니다.");
            navigate("/team1");
        } catch (error) {
            if (error.response) {
                console.log("서버 응답 데이터:", error.response.data); // 서버 응답 데이터 출력
                console.log("서버 상태 코드:", error.response.status); // 서버 상태 코드 출력
                console.log("서버 응답 헤더:", error.response.headers); // 서버 응답 헤더 출력
                const errorMessage = error.response.data.errorMessage || "알 수 없는 오류가 발생했습니다.";
                alert(`${errorMessage}`);
                // alert(`서버 오류 발생: ${error.response.data.message || "알 수 없는 오류"}`);
            } else {
                console.error("공모전 등록 중 오류 발생:", error.message);
                alert("공모전 등록 중 오류가 발생했습니다.");
            }
        }
    }


    return (
        <Layout>
            <Topbar />
            <Title>기업 공모전 등록</Title>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label>회사명 *</Label>
                        <Input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>포스터 사진 *</Label>
                        <PresignedImageUpload
                            setImageUrls={setImageUrls}
                            apiEndpoint="https://devcrew.kr/api/images/company" // Presigned URL을 얻을 API 엔드포인트
                            required
                            // accessToken="your_access_token_here" // 실제 액세스 토큰으로 교체
                        />
                        {/* <FileInput
                            type="file"
                            name="posterImage"
                            ref={fileInputRef}
                            onChange={handleChange}
                            required
                        />
                        <FileButton type="button" onClick={handleFileClick}>
                            <img
                                src={addfile}
                                alt="파일 추가"
                                style={{ marginRight: 8 }}
                            />
                            파일추가 */}
                        {/* </FileButton> */}
                    </FormField>
                    <FormField>
                        <Label>공모전명 *</Label>
                        <Input
                            type="text"
                            name="contestName"
                            value={formData.contestName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>주최기관 *</Label>
                        <Input
                            type="text"
                            name="organizingBody"
                            value={formData.organizingBody}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>참여대상 *</Label>
                        <Input
                            type="text"
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>담당자 정보 *</Label>
                        <Input
                            type="text"
                            name="contactInfo"
                            value={formData.contactInfo}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>시상 규모 *</Label>
                        <Input
                            type="text"
                            name="prizeAmount"
                            value={formData.prizeAmount}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>접수 기간 *</Label>
                        <Input
                            type="text"
                            name="applicationPeriod"
                            value={formData.applicationPeriod}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>홈페이지 *</Label>
                        <Input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>공모 분야 *</Label>
                        {/* <Select name="contestField" value={formData.contestField} onChange={handleChange} required>
              <Option value="창업">창업</Option>
              <Option value="생성형 AI">생성형 AI</Option>
              <Option value="플랫폼">플랫폼</Option>
              <Option value="데이터분석">데이터분석</Option>
              <Option value="게임">게임</Option>
              <Option value="기타">기타</Option>
            </Select> */}
                        <DropdownContainer>
                            <DropdownButton onClick={handleDropdownClick}>
                                {formData.contestField}
                            </DropdownButton>
                            <DropdownContent isOpen={dropdownOpen}>
                                <DropdownItem
                                    onClick={() => handleItemClick("창업")}
                                >
                                    창업
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => handleItemClick("생성형 AI")}
                                >
                                    생성형 AI
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => handleItemClick("플랫폼")}
                                >
                                    플랫폼
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() =>
                                        handleItemClick("데이터분석")
                                    }
                                >
                                    데이터분석
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => handleItemClick("게임")}
                                >
                                    게임
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => handleItemClick("기타")}
                                >
                                    기타
                                </DropdownItem>
                            </DropdownContent>
                        </DropdownContainer>
                    </FormField>
                    <FormField>
                        <Label>활동 혜택 *</Label>
                        <Input
                            type="text"
                            name="activityBenefits"
                            value={formData.activityBenefits}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>추가 혜택 *</Label>
                        <Input
                            type="text"
                            name="additionalBenefits"
                            value={formData.additionalBenefits}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <AddTitle>추가 설명 작성</AddTitle>
                    <TextArea
                        name="additionalNotes"
                        placeholder="추가 설명 사항을 입력해주세요"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                    />

                    <Button type="submit">등록하기</Button>
                    <Button2 type="reset">등록 취소</Button2>
                </form>
            </FormContainer>
            <Bottombar />
        </Layout>
    );
};

export default ContestUpload;
