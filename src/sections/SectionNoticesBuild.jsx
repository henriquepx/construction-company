import styled from 'styled-components';
import Notices from '../components/Notices';
import Fade from 'react-reveal/Fade';

const ContainerSectionNoticesBuild = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        margin-top: 25rem;
    }
`
const ContainerNotices = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-bottom: 15rem;

    @media (max-width: 1024px) {
        gap: 20px;
        padding: 1rem;
        justify-content: center;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        gap: 50px;
        padding: 2rem;
        flex-wrap: wrap;
    }
`
const ContainerBuilds = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    h1 {
        font-family: var(--font);
        color: var(--color-one);
        font-size: 3rem;
        font-weight: 600;
    }
    p {
        font-family: var(--font);
        color: var(--color-one);
        margin-bottom: 2rem;
    }
    img {
        max-width: 100%;
        height: auto;

        margin-bottom: 10rem;
        @media (max-width: 1024px) {
            width: 90%;
        }
    }
`

const SectionNoticesBuild = () => {
  return (
    <ContainerSectionNoticesBuild>
        <Fade right big>
            <ContainerNotices>
                <Notices 
                    photo="/bgnotice3.png"
                    title="Canadian Construction Branches."
                    desc="We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!"
                />
                <Notices 
                    photo="/bgnotice2.png"
                    title="Canadian Construction Branches."
                    desc="We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!"
                />
                <Notices 
                    photo="/bgnotice.png"
                    title="Canadian Construction Branches."
                    desc="We'll Supply You With Materials To Create Your Dream Property From Foundation To Finish. Call To Get Started!"
                />
            </ContainerNotices>
        </Fade>
        <Fade left big>
            <ContainerBuilds>
                <h1>Let us help you build.</h1>
                <p>Over 17 years of experience in creating spaces that positively impact people lives</p>
                <img src="/bgconstrution.png" alt="Background Build" />
            </ContainerBuilds>
        </Fade>
    </ContainerSectionNoticesBuild>
  )
}

export default SectionNoticesBuild