import styled from 'styled-components';
import Achievements from '../components/Achievements';
import Fade from 'react-reveal/Fade';

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
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 769px) {
        gap: 50px;
    }
    @media (min-width: 800px) and (max-width: 1024px) {
        gap: 20px;
    }
`
const TitleSecAchievements = styled.h1`
    font-family: var(--font);
    color: var(--color-one);
    font-size: 3rem;
    font-weight: 600;
    width: 100%;
`
const ContainerAchievements = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10rem 0rem 6rem 0rem;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
`
const IntroContainerAchievements = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    p {
        font-family: var(--font);
        color: var(--color-one);
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (max-width: 1024px) {
        padding-left: 1rem;
    }
`
const FlexWrapAchievements = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    width: 50%;
    @media (max-width: 768px) {
        gap: 50px;
        width: 100%; 
        justify-content: center;
    }
`


const SectionAchievementsClients = () => {
  return (
    <SectionContainer>
        <SizeSectionAchCli>
            <Fade right big>
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
            </Fade>

            <Fade left big>
                <div>
                    <TitleTrustedClients>Our Trusted Clients</TitleTrustedClients>
                    <DivImgsCompany>
                        <img src="/company.png" alt="Spark" />
                        <img src="/company2.png" alt="Logaz" />
                        <img src="/company3.png" alt="Spona" />
                        <img src="/company4.png" alt="Olla" />
                    </DivImgsCompany>
                </div>
            </Fade>
        </SizeSectionAchCli>
    </SectionContainer>
  )
}

export default SectionAchievementsClients