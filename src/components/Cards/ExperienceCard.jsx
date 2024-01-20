import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
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
    
    transition: all 0.3s ease-out; 
    
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        transform: translate(-5px);
    }
    
    &:hover ${Document} {
        display: flex;
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

const Role = styled.div`
    font-size: 18px;
    font-weight: 600; 
    color: ${({theme})=> theme.text_primary+99};
    
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Company = styled.div`
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

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 12px;
    
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    @media screen and (max-width: 768px) {
        gap: 5px;
    }
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 4 00;
    
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ExperienceCard = ( {experience} ) => {
  return (
    <Card>
         <Top>
            <Logo src={experience.img} />
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Duration>{experience.date}</Duration>
            </Body> 
         </Top>
         <Description>
            {experience.desc}
            {experience?.skills && (
                <>
                    <br />
                    <Skills>
                        <b>Skills:</b>
                        <ItemWrapper>
                            {experience.skills.map((skill,index) => (
                                <Skill key={index}>• {skill}</Skill>
                            ))}
                        </ItemWrapper>
                    </Skills>
                </>
            )}
        </Description>
         {experience.doc && 
            <a href={experience.doc}>
                <Document src={experience.doc} />
            </a>
         }
    </Card>
  )
}

export default ExperienceCard