import React from 'react'
import styled from 'styled-components';

const Span = styled.span`
    font-size: 15px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    white-space: no-wrap;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const Card = styled.div`
    width: 650px;
    border: 1px solid #306ee8;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    position: realtive;
    overflow: hidden;
    flex-direction: column;
    gap: 12px;
    border: 0.1px solid #854CE6;
    transition: all 0.8s ease-out; 
    
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        transform: translate(-10px);
    }
    
    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    
    @media screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    
    box-shadow: rgba(23, 92 ,230, 0.15)0px 4px  24px;
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;

const Logo = styled.img`
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;
    object-fit: contain;
    
    @media screen and (max-width: 768px) {
        height: 40px;
    }
`;


const Body = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600; 
    color: ${({theme})=> theme.text_primary+99};
    
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 15px;
    font-weight: 500; 
    color: ${({theme})=> theme.text_primary+99};
    
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=> theme.text_secondary+99};
    
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Grade = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({theme})=> theme.text_secondary+99};
    
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    width: 100%;
    color: ${({theme})=> theme.text_primary+99};
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
    
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const EducationCard = ({education}) => {
  return (
    <Card>
    <Top>
       <Logo src={education.img} />
       <Body>
           <Name>{education.school}</Name>
           <Degree>{education.degree}</Degree>
           <Duration>{education.date}</Duration>
       </Body> 
    </Top>
    <Grade>{education?.grade && <span>Grade: {education.grade}</span>}</Grade>

    <Description>
        <Span>
        {education.desc}
        </Span>
   </Description>
</Card>
  )
}

export default EducationCard