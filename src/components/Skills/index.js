import React from "react";
import styled from "styled-components";
import { skills } from '../../data/constant';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};
    
    
    @media screen and (max-width: 760px) {
        font-size: 32px;
        margin-top: 12px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};
    
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    justify-content: center; 
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${({theme}) => theme.card};
    border: 2px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;

    @media screen and (max-width: 760px) {
        max-width: 400px;
        padding: 10px 36px;        
    }
    
    @media screen and (max-width: 500px) {
        max-width: 350px;
        padding: 10px 36px; 
    }
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`;

const SkillList = styled.div`
    display:flex;
    justify-content: center;
    gap: 12px;
    flex-wrap:wrap;
    margin-bottom: 20px;
    
    @media screen and (max-width: 500px) {  
        gap: 8px;
    }
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 16px;
    color: ${({theme}) => theme.text_primary+80};
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.text_primary+80};
    padding: 12px 16px;
    font-weight: 400;
    
    
    @media screen and (max-width: 760px) {
        font-size: 14px;
        padding: 8px 12px;
    }
    
    @media screen and (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;


const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

function Skills(){
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here are some of the tech listed on which i  had been working from past 2 years 
                </Desc>
                <SkillsContainer>
                    {skills.map((item,index) => (
                        <Skill key={index}>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {
                                    item.skills.map((skill,index) => (
                                    <SkillItem key={index}>
                                        <SkillImage src={skill.image} />
                                        {skill.name}
                                    </SkillItem>
                                    ))
                                }
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;