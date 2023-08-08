import styled from 'styled-components'

const SectionContainer = styled.div`
    height: 100vh;
`
const SizeSectionAchCli = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

const TitleTrustedClients = styled.h1`
    font-family: var(--font);
    color: var(--color-one);
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    margin: 5rem 0rem 3rem 0rem;
`
const DivImgsCompany = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`


const SectionAchievementsClients = () => {
  return (
    <SectionContainer>
        <SizeSectionAchCli>
            <div>

            </div>

            <div>
                <TitleTrustedClients>Our Trusted Clients</TitleTrustedClients>
                <DivImgsCompany>
                    <img src="/company.png" alt="Spark" />
                    <img src="/company2.png" alt="Logaz" />
                    <img src="/company3.png" alt="Spona" />
                    <img src="/company4.png" alt="Olla" />
                </DivImgsCompany>
            </div>
        </SizeSectionAchCli>
    </SectionContainer>
  )
}

export default SectionAchievementsClients