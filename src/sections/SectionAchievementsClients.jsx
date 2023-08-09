import styled from 'styled-components'
import Achievements from '../components/Achievements'

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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const TitleSecAchievements = styled.h1`
    font-family: var(--font);
    color: var(--color-one);
    font-size: 3rem;
    font-weight: 600;
    max-width: 15ch;
`
const ContainerAchievements = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10rem 0rem 6rem 0rem;
`
const IntroContainerAchievements = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`
const FlexWrapAchievements = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    width: 50%;
`


const SectionAchievementsClients = () => {
  return (
    <SectionContainer>
        <SizeSectionAchCli>
            <ContainerAchievements>
                <IntroContainerAchievements>
                    <TitleSecAchievements>Over a Decade of Achievements</TitleSecAchievements>
                    <p>With our super powers we have reached this.</p>
                </IntroContainerAchievements>
                <FlexWrapAchievements>
                    <Achievements 
                        photo="/satisfiedclients.png"
                        title="10,000+"
                        desc="Satisfied Clients"
                    />
                    <Achievements 
                        photo="/skilledworkers.png"
                        title="2 Million"
                        desc="Skilled Workers"
                    />
                    <Achievements 
                        photo="/projectscompleted.png"
                        title="500+"
                        desc="Projects Completed"
                    />
                    <Achievements 
                        photo="/countries.png"
                        title="140"
                        desc="Countries"
                    />
                </FlexWrapAchievements>
            </ContainerAchievements>

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