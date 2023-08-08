import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 7vh;
  background-color: var(--color-one);

  display: flex;
  justify-content: space-around;
  align-items: center;
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
    }
  }
`
const ButtonHeaderGetStarted = styled.button`
  padding: .5rem 1.5rem;
  border-radius: 4px;

  background-color: #7591A3;
  color: var(--color-white);
  font-family: var(--font);
`

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  )
}

export default Header