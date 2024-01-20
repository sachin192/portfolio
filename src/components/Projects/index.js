import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constant';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    max-width: 1350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 12px;
    padding: 10px 0 100px 0;
    
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
    
    @media screen and (max-width: 760px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display:flex;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: 500;
    margin: 22px 0;
    border-radius: 12px;
    
    @media screen and (max-width: 760px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    
    ${({ active, theme }) => active && 
        `background-color: ${theme.primary+20};`
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.primary +15 };
    }
    
    @media screen and (max-width: 760px) {
        padding: 6px 8px;
    }
`;

const Divider = styled.div`
   width: 1.5px;
   background-color: ${({ theme }) => theme.primary};
   
`;

const CardContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>
                I have worke on a wide range of Web dev projects. Here are some of my Projects
            </Desc>
            
            <ToggleGroup>
                {toggle === "all" ?
                 <ToggleButton onClick={() => setToggle('all')}  active value="all">All</ToggleButton>
                : <ToggleButton onClick={() => setToggle('all')} value="all">All</ToggleButton>
                }
                <Divider />
                
                {
                    toggle === "web app" ? 
                    <ToggleButton onClick={() => setToggle("web app")} active value="web app">WEB APP's</ToggleButton>
                    : <ToggleButton onClick={() => setToggle("web app")} value="web app">WEB APP's</ToggleButton>                    
                }
            </ToggleGroup>
            
            <CardContainer>
                {toggle === "all" && projects.map((project,index) => <ProjectCard key={index} project={project} />) }
                {projects.filter((item) => item.category === toggle)
                    .map((project, index) => <ProjectCard key={index} project={project}/> )
                }
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects