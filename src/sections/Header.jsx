import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 7vh;
  background-color: var(--color-one);
`
const MainSize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  
  padding-top: .9rem;
  background-color: var(--color-one);
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const LogoTitle = styled.p`
  color: var(--color-white);
  font-family: var(--font);
  font-weight: 600;
  text-transform: uppercase; 
`
const NavHeader = styled.nav`
  display: flex;
  gap: 10px;
  li {
    a {
      font-family: var(--font);
      color: var(--color-white);
      position: relative;
      &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: var(--color-white);
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
    }
  }
`
const ButtonHeaderGetStarted = styled.button`
  padding: .5rem 1.5rem;
  border-radius: 4px;

  background-color: #7591A3;
  color: var(--color-white);
  font-family: var(--font);

  cursor: pointer;
`

const Header = () => {
  return (
    <HeaderContainer>
      <MainSize>
        <LogoContainer>
          <img src="/logo.png" alt="Logo da empresa" />
          <LogoTitle>Istaix</LogoTitle>
        </LogoContainer>
        <NavHeader>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </NavHeader>
        <ButtonHeaderGetStarted>Get Started</ButtonHeaderGetStarted>
      </MainSize>
    </HeaderContainer>
  )
}

export default Header;