import styled from 'styled-components';

const ContainerSecWaitlist = styled.div`
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DivInputsWailist = styled.div`
        display: flex;
        @media (max-width: 768px) {
            width: 100%;
        }
        input {
            padding: 20px 50px 20px 10px;
            text-indent: 1px;
            font-family: var(--font);
            @media (max-width: 1024px) {
                padding: 0px 5px;
                text-indent: 0px;
            }
        }
        button {
            padding: 20px 20px;
            background-color: var(--color-one);
            font-family: var(--font);
            color: var(--color-white);
            cursor: pointer;
            @media (max-width: 769px) {
                padding: 5px;
        }
        }
`
const DivResponsiveWailist = styled.div`
    padding-right: 5rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: right;
    @media (min-width: 722px) and (max-width: 768px) {
        padding-right: 2rem;
    }
    @media (max-width: 720px) {
        padding-right: 0rem;
        text-align: center;
    }
    h1 {
        font-family: var(--font);
        color: var(--color-one);
        font-size: 2.5rem;
        font-weight: 600;
        @media (max-width: 769px) {
            font-size: 1.5rem;
        }
    }
`
const SizeWaitlist = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    background-color: #bcc4d4;
    border-radius: 15px;
    @media (min-width: 722px) and (max-width: 768px) {
        width: 95%;
    }
    @media (max-width: 720px) {
        justify-content: center;
        align-items: center;
        width: 90%;
        padding: 3rem 0rem;

        background-image: url(/buildings.png);
        background-position: center;
    }
`
const ImgPedreiro = styled.img`
    @media (max-width: 721px) {
        display: none;
    }
`

const SectionWaitlist = () => {
  return (
    <ContainerSecWaitlist>
        <SizeWaitlist>
            <ImgPedreiro src="/pedreiro.png" alt="" />
             <DivResponsiveWailist>
                <h1> Get a Free Quote Now!</h1>
                <DivInputsWailist>
                    <input type="email" placeholder='Your work email adress'/>
                    <button>Join the waitlist</button>
                </DivInputsWailist>
            </DivResponsiveWailist>
        </SizeWaitlist>
    </ContainerSecWaitlist>
  )
}

export default SectionWaitlist;