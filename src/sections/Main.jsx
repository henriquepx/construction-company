import styled from 'styled-components'

const MainContainer = styled.main`
    height: 93vh;
    background-image: url(/bginitial.png);
    background-size: cover;
`
const MainSize = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;

    padding: 10rem 0rem;
`
const TitleMain = styled.h1`
    font-family: var(--font);
    font-size: 4rem;
    font-weight: 600;
    color: var(--color-one);

    margin-bottom: 1rem;
`
const DescriptionMain = styled.p`
    color: var(--color-two);
    font-family: var(--font);
    max-width: 40ch;
    margin: 3rem 0rem 7rem 0rem;
    span {
        color: var(--color-one);
        font-weight: 800;
    }
`
const DivMainExplore = styled.div`
    display: flex;
    gap: 30px;
    button {
        padding: 1.3rem 4rem;
        background-color: var(--color-one);
        color: var(--color-white);
        font-family: var(--font);
        border-radius: 5px;
        cursor: pointer;
    }
    div {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
            display: block;
            width: 100px;
            height: 2px;
            background-color: var(--color-one);
        }
        p {
            color: var(--color-one);
        font-family: var(--font);
        font-weight: 550;
        }
    }
`

const Main = () => {
  return (
    <MainContainer>
        <MainSize>
            <TitleMain>Diversified Services.</TitleMain>
            <TitleMain>Unvarying Quality.</TitleMain>
            <DescriptionMain>We designed 100+ commercial & residential projects in UAS & across the globe. Providing Design & 3D Support to Architectural Firms Globally. Award-Winning Company. <span>17+ Years</span> Of Experience.</DescriptionMain>
            <DivMainExplore>
                <button>See Our Work</button>
                <div>
                    <img src="/play.png" alt="" />
                    <span></span>
                    <p>Explore</p>
                </div>
            </DivMainExplore>
        </MainSize>
    </MainContainer>
  )
}

export default Main;