import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from "../../data/constant";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    
    @media screen and (max-width: 960px) {  
        padding: 0;
    }
`;

const Wrapper = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 12px;
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

const TimeLineSection = styled.div`
     width: 100%;
     max-width: 1000px;
     margin-top: 30px;
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>My eduaction has been a journey and exploration and self-discovery along with the growth. My Education Details are as follows.</Desc>
                <TimeLineSection>
                    <Timeline>
                        {education.map((edu,index) => (
                            <TimelineItem key={index}>
                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <EducationCard education={edu} />
                                 </TimelineContent>
                                 <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !==education.length - 1 && (
                                      <TimelineConnector />  
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
}

export default Education;