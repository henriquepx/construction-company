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
    }
    div {
        position: absolute;
        right: 30%;
        bottom: 39%;
        input {
            padding: 20px 50px 20px 10px;
            text-indent: 1px;
            font-family: var(--font);
        }
        button {
            padding: 20px 20px;
            background-color: var(--color-one);
            font-family: var(--font);
            color: var(--color-white);
            cursor: pointer;
        }
    }
`

const SectionWaitlist = () => {
  return (
    <ContainerSecWaitlist>
        <img src="/bgfooter.png" alt="" />
        <h1> Get a Free Quote Now!</h1>
        <div>
            <input type="email" placeholder='Your work email adress'/>
            <button>Join the waitlist</button>
        </div>
    </ContainerSecWaitlist>
  )
}

export default SectionWaitlist;