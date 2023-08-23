import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { AiFillBuild } from 'react-icons/ai';

const HeaderContainer = styled.header`
  background-color: var(--color-one);
`;
const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-one);
  padding: 1rem 2rem;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const LogoTitle = styled.p`
  color: var(--color-white);
  font-family: var(--font);
  font-weight: 600;
  text-transform: uppercase;
`;
const NavHeader = styled(Nav)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    background-color: var(--color-one);
    padding: 1rem;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
  }

  .nav-link {
    font-family: var(--font);
    color: var(--color-white);
    position: relative;

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &::after {
      content: '';
      pointer-events: none;
      bottom: -5px;
      left: 50%;
      position: absolute;
      width: 0;
      height: 2px;
      background-color: var(--color-white);
      transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
`;
const NavBarMenu = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: var(--color-one);
  color: white;
  cursor: pointer;
  font-size: 24px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const ButtonHeaderGetStarted = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  background-color: #7591a3;
  color: var(--color-white);
  font-family: var(--font);
  cursor: pointer;
`;
const DivLetsBuild = styled.div`
  background-color: var(--color-one);
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    display: none;
  }
  p {
    font-family: var(--font);
    color: var(--color-white);
  }
`
const StyledBuildIcon = styled(AiFillBuild)`
  color: white;
  font-size: 30px; 
`;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar expand="lg">
          <LogoContainer>
            <img src="/logo.png" alt="Logo da empresa" />
            <LogoTitle>Istaix</LogoTitle>
          </LogoContainer>
          <Navbar.Collapse id="responsive-navbar-nav flex">
            <NavHeader className="ml-auto" isMobileMenuOpen={isMobileMenuOpen}>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Jobs</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <ButtonHeaderGetStarted>Get Started</ButtonHeaderGetStarted>
            </NavHeader>
          </Navbar.Collapse>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleMobileMenuToggle}
            className={isMobileMenuOpen ? 'collapsed' : ''}
          >
            <NavBarMenu>&#9776;</NavBarMenu>
            <DivLetsBuild>
              <p>Let's build</p>
              <StyledBuildIcon />
            </DivLetsBuild>
          </Navbar.Toggle>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
