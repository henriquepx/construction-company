import styled from 'styled-components'
import PropTypes from 'prop-types';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const ContainerClientSlider = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  padding-top: 1.5rem;
`
const TextClientSlider = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  background-color: var(--color-white);
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 10px;

  margin-bottom: 2rem;
`
const LargeQuoteIcon = styled(BiSolidQuoteAltLeft)`
  font-size: 7rem;
`;
const TextBubble = styled.div`
  content: '';
  position: absolute;
  bottom: -28px; 
  left: 20px; 
  width: 15px;
  height: 15px;
  border: 15px solid transparent;
  border-left-color: var(--color-white);
  transform: rotate(90deg);
`;
const DescClientSlider = styled.p`
  margin-top: 1rem;
  line-height: 1.35;
  font-size: 1.2rem;
  font-family: var(--font);
`
const ProfileClientSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    h1 {
      color: var(--color-one);
      font-family: var(--font);
      margin-bottom: 5px;
    }
    p {
      color: var(--color-one);
      font-family: var(--font);
      font-weight: 600;
    }
  }
`


const ClientSlider = ({ img, name, job, text }) => {
  
    return (
      <ContainerClientSlider>
        <TextClientSlider>
          <LargeQuoteIcon />
          <DescClientSlider>
            {text} 
            </DescClientSlider>
          <TextBubble />
        </TextClientSlider>
        <ProfileClientSlider>
          <img src={img} alt="Cliente 1" />
          <div>
            <h1>{name}</h1>
            <p>{job}</p>
          </div>
        </ProfileClientSlider>
      </ContainerClientSlider>
    );
  };

  ClientSlider.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  };

export default ClientSlider;