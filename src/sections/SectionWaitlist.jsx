import styled from 'styled-components';

const ContainerSecWaitlist = styled.div`
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
`
const ImgSectionWaitList = styled.img`
    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 575px) {
        display: none;
    }
`
const DivInputsWailist = styled.div`
    position: absolute;
    right: 28%;
    bottom: 39%;
        @media (max-width: 1280px) {
            right: 12%;
        }
        input {
            padding: 20px 50px 20px 10px;
            text-indent: 1px;
            font-family: var(--font);
            @media (max-width: 1024px) {
                padding: 10px;
                text-indent: 0px;
            }
        }
        button {
            padding: 20px 20px;
            background-color: var(--color-one);
            font-family: var(--font);
            color: var(--color-white);
            cursor: pointer;
            @media (max-width: 1024px) {
                padding: 10px;
                font-size: .9rem;
            }
        }
`
const DivResponsiveWailist = styled.div`
    h1 {
        font-family: var(--font);
        color: var(--color-one);
        font-size: 2.5rem;
        font-weight: 600;

        position: absolute;
        right: 28%;
        bottom: 53%;
        @media (max-width: 1280px) {
            font-size: 1.8rem;
            right: 12%;
        }
    }
`


const SectionWaitlist = () => {
  return (
    <ContainerSecWaitlist>
        <ImgSectionWaitList src="/bgfooter.png" alt="" />
        <DivResponsiveWailist>
            <h1> Get a Free Quote Now!</h1>
            <DivInputsWailist>
                <input type="email" placeholder='Your work email adress'/>
                <button>Join the waitlist</button>
            </DivInputsWailist>
        </DivResponsiveWailist>
        
    </ContainerSecWaitlist>
  )
}

export default SectionWaitlist;