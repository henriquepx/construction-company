import styled from 'styled-components'

const ContainerFooter = styled.div`
    height: 40vh;
    background-color: var(--color-one);
    position: relative;

    display: flex;
    align-items: center;
    @media (max-width: 450px) {
        height: 80vh;
        align-items: left;
        padding-left: 1.5rem;
    }
    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`
const SizeFooter = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    
    @media (max-width: 450px) {
        flex-direction: column;
        gap: 50px;
    }

    @media (max-width: 1024px) {
        padding: 0rem 1.5rem;
    }
`
const ContainerFooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        align-items: flex-start;
    }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const LogoTitle = styled.p`
  color: var(--color-white);
  font-family: var(--font);
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase; 
`
const NavFooter = styled.nav`
    div {
        display: flex;
        flex-direction: column;
        gap: 25px;

        margin-bottom: 1rem;

        ul {
            display: flex;
            flex-direction: row;
            gap: 20px;

            @media (max-width: 425px) {
                flex-wrap: wrap;
            }

            li {
                a {
                    color: var(--color-white);
                    font-family: var(--font);
                }
            }
        }
    }
`
const Credits = styled.p`
    color: var(--color-white);
    font-family: var(--font);
    font-size: .8rem;
    a {
        color: var(--color-two);
        font-family: var(--font);
        font-weight: 650;
        position: relative;
        &:hover::after {
        width: 100%;
        left: 0%;
      }
      &::after {
      content: "";
      pointer-events: none;
      bottom: -3px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: var(--color-two);
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
    }
`
const ContainerDownload = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h2 {
        font-family: var(--font);
        color: var(--color-white);
        font-size: 1rem;
    }
    img {
        cursor: pointer;
        width: 120px;
    }
`
const BgFooter = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
`

const Footer = () => {
  return (
    <ContainerFooter>
        <BgFooter src="/maskfooter.png" alt="Fundo Footer" />
        <SizeFooter>
            <ContainerFooterContent>
                <LogoContainer>
                    <img src="/logo.png" alt="Logo da empresa" />
                    <LogoTitle>Istaix</LogoTitle>
                </LogoContainer>

                <NavFooter>
                        <div>
                            <ul>
                                <li><a href="#">Download now</a></li>
                                <li><a href="#">License</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                </NavFooter>
                
                <Credits>© 2020 ISTAIX. All rights reserved</Credits>
                <Credits>Developed by: <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'> Henrique Pinheiro</a></Credits>
                <Credits>Designed by: <a href="https://www.figma.com/@hamzaanza" target='_blank' rel='noreferrer'> Hamza Anza</a></Credits>

            </ContainerFooterContent>
            <ContainerDownload>
                <h2>Get the App</h2>
                <img src="/appstore.png" alt="Download on App Store" />
                <img src="/googleplay.png" alt="Download on Google Play" />
            </ContainerDownload>
        </SizeFooter>
    </ContainerFooter>
  )
}

export default Footer