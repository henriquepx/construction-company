import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerNotices = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    max-width: 350px;
    width: 100%;
    margin: 0 auto;

    margin-top: 2rem;
    h1 {
        font-family: var(--font);
        color: var(--color-one);
        font-size: 1.7rem;
        font-weight: 600;
    }
    p {
        font-family: var(--font);
        color: var(--color-gray);
        font-size: 1rem;
        line-height: 1.50;
    }
    a {
        font-family: var(--font);
        color: #FF9900; 
        font-weight: 600;
    }
`

const Notices = ({ photo, title, desc }) => {
  return (
    <ContainerNotices>
        <img src={photo} />
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href="#">Read more</a>
    </ContainerNotices>
  )
}

Notices.propTypes = {
    photo: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    desc: PropTypes.string.isRequired, 
  };

export default Notices;