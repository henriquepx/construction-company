import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const AvaliationMain = styled.div`
    position: absolute;
    display: flex;
    gap: 30px;
    background-color: var(--color-white);
    padding: 0.5rem;
    width: 200px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    @media (max-width: 1024px) {
      top: ${({ mediaQueries }) => (mediaQueries?.['1024']?.top || '250px')};
      right: ${({ mediaQueries }) => (mediaQueries?.['1024']?.right || '500px')};
    }
    @media (max-width: 768px) {
      top: ${({ mediaQueries }) => (mediaQueries?.['768']?.top || '150px')};
      right: ${({ mediaQueries }) => (mediaQueries?.['768']?.right || '400px')};
    }
    @media (max-width: 425px) {
      top: ${({ mediaQueries }) => (mediaQueries?.['425']?.top || '150px')};
      right: ${({ mediaQueries }) => (mediaQueries?.['425']?.right || '400px')};
    }


    div {
        h1 {
            font-family: var(--font);
            color: var(--color-one);
            font-weight: 600;
            margin-bottom: 5px;
        }
    }
`;

const MainAvaliation = ({ img, name, position, mediaQueries }) => {
  return (
    <AvaliationMain style={position} mediaQueries={mediaQueries}>
        <img src={img} alt="Foto de um dos avaliadores" />
        <div>
            <h1>{name}</h1>
            <div>
                <BsStarFill color="#F1E255" />
                <BsStarFill color="#F1E255" />
                <BsStarFill color="#F1E255" />
                <BsStarFill color="#F1E255" />
                <BsStarFill color="#F1E255" />
            </div>
        </div>
    </AvaliationMain>
  );
};

MainAvaliation.propTypes = {
    img: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    position: PropTypes.object,
    mediaQueries: PropTypes.shape({
      1024: PropTypes.object,
      678: PropTypes.object
    })
};

export default MainAvaliation;
