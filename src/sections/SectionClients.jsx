import styled from 'styled-components';
import ClientSlider from '../components/ClientSlider';


const SectionClientsContainer = styled.div`
    height: 60vh;
    background-color: #E6F0F4;
`

const TitleClientsContainer = styled.h1`
    color: var(--color-one);
    font-family: var(--font);
    text-align: center;
    font-weight: 605;
    font-size: 2rem;
    padding-top: 3rem;
`

const SectionClients = () => {
  return (
    <SectionClientsContainer>
        <TitleClientsContainer>Few Words From Our Clients</TitleClientsContainer>
        <ClientSlider />
    </SectionClientsContainer>
  )
}

export default SectionClients;