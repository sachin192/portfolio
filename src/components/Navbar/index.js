import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Nav = styled.div`
    background-color: ${({theme}) => theme.bgLight};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
    padding: 0 0px;
    color: ${({ theme }) => theme.primary};
}
`;

const Span = styled.span`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 70%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 968px) {
        z-index: 100;
        margin-left: 10px;
        display: none;
    }
`;

const DarkModeToggleButton = styled.div`
    margin-left: 10px;
    @media screen and (max-width: 768px) {
        margin-right: 40px;
    }
`;

const GithubButton = styled.button`
    background-color: ${({ theme }) => theme.button};
    border: 1.8px solid ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;    transition: all 0.6s ease-in-out;
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
        font-size: 14px;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.bgLight};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)': 'translateY(-100%)'};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0 ,0, 0, 0.3);
    opacity:  ${({open}) => open ? '1' : '0'};
    z-index: ${({open}) => open ? '1' : '-1'};
`;

const MobileMenuLinks = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary}; 
    }
`;

const Navbar = ({active, setActive, darkMode, setDarkMode, toggleDarkMode}) => {
    const [open, setOpen] = React.useState(false);
    
    const theme = useTheme
    return (
      <Nav>
        <NavContainer>
            <NavLogo to="/" onClick={() => setActive('')}>
                <span style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20",
                    cursor: "pointer"
                }}>
                    <DiCssdeck size="3rem" /><Span>Portfolio</Span></span>
            </NavLogo>
            <MobileIcon>
                {!open && (
                    <FaBars onClick={() => {
                        setOpen(!open);
                    }} />
                )}
                {open && (
                    <ImCross onClick={() => {
                        setOpen(!open);
                    }} />
                )}
            </MobileIcon>
            <NavItems>
                <NavLink className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')} href="#about">About</NavLink>
                <NavLink className={active === 'skills' ? 'active' : ''} onClick={() =>setActive('skills')} href="#skills">Skills</NavLink>
                <NavLink className={active === 'experience' ? 'active' : ''} onClick={() => setActive('experience')} href="#experience">Experience</NavLink>
                <NavLink className={active === 'projects' ? 'active' : ''} onClick={() =>setActive('projects')} href="#projects">Projects</NavLink>
                <NavLink className={active === 'education' ? 'active' : ''} onClick={() => setActive('education')} href="#education">Education</NavLink>
            </NavItems>
            <DarkModeToggleButton>
                <DarkModeSwitch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={30}
                />
            </DarkModeToggleButton>
            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
        </NavContainer>
        {
            open && (
                <MobileMenu open={open}>
                    <MobileMenuLinks href="#about" 
                        onClick={()=> {
                            setOpen(!open)}
                        }
                    >
                        About
                    </MobileMenuLinks>
                    <MobileMenuLinks href="#skills" 
                        onClick={()=> {
                            setOpen(!open)
                        }}
                    >
                        Skills
                    </MobileMenuLinks>
                    <MobileMenuLinks href="#experience" 
                        onClick={()=> {
                            setOpen(!open)
                        }}
                    >
                        Experience
                    </MobileMenuLinks>
                    <MobileMenuLinks href="#projects" 
                        onClick={()=> {
                            setOpen(!open)
                        }}
                    >
                        Projects
                    </MobileMenuLinks>
                    <MobileMenuLinks href="#education" 
                        onClick={()=> {
                            setOpen(!open)
                        }}
                    >
                        Education
                    </MobileMenuLinks>
                    <GithubButton
                        style={{
                            padding: "10px 16px",
                            background: `${theme.primary}`,
                            width: "max-content"
                        }}
                        
                        href="/"
                        target='_blank'
                    >Github Profile</GithubButton>
                </MobileMenu>
            )
        }
      </Nav>  
    );
}

export default Navbar;