// src/pages/ContestUpload.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import addfile from '../assets/image/addfile.svg'
import Bottombar from '../components/Bottombar'

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
  border-top : 1px solid #97A7A7;
  width: 1356px;
  &:last-child {
    border: 1px solid #97A7A7;
  }
`;

const Label = styled.label`
  width: 243px;
  height: 62px;
  flex-shrink: 0;
  background: #F1F1F1;
  color: var(--Gray-zip_gray800, #373737);
font-family: AppleSDGothicNeoM00;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
padding-top : 37px;
padding-left : 39px;
`;

const Input = styled.input`
  //padding: 10px;
  font-size: 16px;
  border-radius: 11px;
  border: 1px solid #829595;
  width: 201px;
  height: 52px;
  flex-shrink: 0;
  margin-top : 23px;
  margin-left : 33px;
  text-align : center;
`;

const TextArea = styled.textarea`
  display: flex;
width: 1313px;
height: 598px;
padding: 40px 0 0 49px;
align-items: center;
flex-shrink: 0;
border-radius: 20px;
background: #F7F7F7;
color: #8F8F8F;
font-family: AppleSDGothicNeoL00;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : 23px;
`;

const Select = styled.select`
  display: flex;
  width: 280px;
  height : 54px;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(179, 179, 179, 0.70);
  background: var(--Gray-white, #FFF);
  margin-top : 27px;
  margin-left : 27px;
`;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
  width: 280px;
  height: 349px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #829595;
  background: var(--Gray-white, #FFF);
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 27px;
  margin-left: 27px;
`;

const DropdownButton = styled.button`
  background: var(--Gray-white, #FFF);
  color: #373737;
  padding: 16px 20px;
  font-size: 16px;
  border: 1px solid rgba(179, 179, 179, 0.70);
  border-radius: 8px;
  cursor: pointer;
  width: 280px;
  height: 54px;
  text-align: left;

  &:after {
    content: '▼';
    float: right;
    margin-left: 20px;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  width: 280px;
  height: 330px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #829595;
background: var(--Gray-white, #FFF);
  
`;

const DropdownItem = styled.div`
color: #2F4F4F;
font-family: AppleSDGothicNeoM00;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
display : flex;
//justify-content : center;
align-items : center;
  cursor: pointer;
  height : 55px;
  padding-left : 22px;  
  &:hover {
    border-radius: 11px;
    background: rgba(130, 149, 149, 0.59);
    text-decoration : none;
    
    
  }
`;



const Button = styled.button`
  width: 160.562px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
background: var(--sub, #5D6C6F);
color: #FFF;
text-align: center;
font-family: AppleSDGothicNeoB00;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : 111px;
margin-left: 505px;
margin-bottom : 117px;
cursor : pointer;
`;

const Button2 = styled.button`
  width: 160.562px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #5D6C6F;
background: #FFF;
color: #5D6C6F;
text-align: center;
font-family: AppleSDGothicNeoB00;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left : 31.44px;
cursor : pointer;

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
  margin-top : 22px;
  margin-left : 27px;
`;

const AddTitle = styled.div`
color: #000;
font-family: AppleSDGothicNeoEB00;
font-size: 38px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : 101px;
//margin-left : 293px;
`

const ContestUpload = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    posterImage: null,
    contestName: '',
    organizingBody: '',
    targetAudience: '',
    contactInfo: '',
    prizeAmount: '',
    applicationPeriod: '',
    website: '',
    contestField: '창업',
    activityBenefits: '',
    additionalBenefits:'',
    additionalNotes: ''
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'posterImage') {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Layout>
      <Topbar />
      <Title>기업 공모전 등록</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>회사명 *</Label>
            <Input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>포스터 사진 *</Label>
            <FileInput
              type="file"
              name="posterImage"
              ref={fileInputRef}
              onChange={handleChange}
              required
            />
            <FileButton type="button" onClick={handleFileClick}>
              <img src={addfile} alt="파일 추가" style={{ marginRight: 8 }} />
              파일추가
            </FileButton>
          </FormField>
          <FormField>
            <Label>공모전명 *</Label>
            <Input type="text" name="contestName" value={formData.contestName} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>주최기관 *</Label>
            <Input type="text" name="organizingBody" value={formData.organizingBody} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>참여대상 *</Label>
            <Input type="text" name="targetAudience" value={formData.targetAudience} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>담당자 정보 *</Label>
            <Input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>시상 규모 *</Label>
            <Input type="text" name="prizeAmount" value={formData.prizeAmount} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>접수 기간 *</Label>
            <Input type="text" name="applicationPeriod" value={formData.applicationPeriod} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>홈페이지 *</Label>
            <Input type="text" name="website" value={formData.website} onChange={handleChange} required />
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
            <DropdownItem onClick={() => handleItemClick('창업')}>창업</DropdownItem>
            <DropdownItem onClick={() => handleItemClick('생성형 AI')}>생성형 AI</DropdownItem>
            <DropdownItem onClick={() => handleItemClick('플랫폼')}>플랫폼</DropdownItem>
            <DropdownItem onClick={() => handleItemClick('데이터분석')}>데이터분석</DropdownItem>
            <DropdownItem onClick={() => handleItemClick('게임')}>게임</DropdownItem>
            <DropdownItem onClick={() => handleItemClick('기타')}>기타</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
          </FormField>
          <FormField>
            <Label>활동 혜택 *</Label>
             <Input type="text" name="activityBenefits" value={formData.activityBenefits} onChange={handleChange} required />
          </FormField>
          <FormField>
            <Label>추가 혜택 *</Label>
            <Input type="text" name="additionalBenefits" value={formData.additionalBenefits} onChange={handleChange} required />
          </FormField>
          <AddTitle>추가 설명 작성</AddTitle>
          <TextArea name="additionalNotes" placeholder = "추가 설명 사항을 입력해주세요" value={formData.additionalNotes} onChange={handleChange} />

          <Button type="submit">등록하기</Button>
          <Button2 type="reset">등록 취소</Button2>

        </form>
      </FormContainer>
      <Bottombar />
    </Layout>
  );
};

export default ContestUpload;
