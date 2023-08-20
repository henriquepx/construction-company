import styled from 'styled-components';

const ContainerSecWaitlist = styled.div`
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    h1 {
        font-family: var(--font);
        color: var(--color-one);
        font-size: 2.5rem;
        font-weight: 600;

        position: absolute;
        right: 28%;
        bottom: 53%;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            right: 12%;
        }
        @media (max-width: 1024px) {
            font-size: 1.8rem;
            right: 20%;
        }
    }
    div {
        position: absolute;
        right: 20%;
        bottom: 39%;
        @media (max-width: 768px) {
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
    }
`
const ImgSectionWaitList = styled.img`
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 1024px) {
        width: 80%;
    }
`


const SectionWaitlist = () => {
  return (
    <ContainerSecWaitlist>
        <ImgSectionWaitList src="/bgfooter.png" alt="" />
        <h1> Get a Free Quote Now!</h1>
        <div>
            <input type="email" placeholder='Your work email adress'/>
            <button>Join the waitlist</button>
        </div>
    </ContainerSecWaitlist>
  )
}

export default SectionWaitlist;