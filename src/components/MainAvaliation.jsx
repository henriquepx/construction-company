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
    div {
        h1 {
            font-family: var(--font);
            color: var(--color-one);
            font-weight: 600;
            margin-bottom: 5px;
        }
    }
`;

const MainAvaliation = ({ img, name, position }) => {
  return (
    <AvaliationMain style={position}>
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
    position: PropTypes.object
  };

export default MainAvaliation;
