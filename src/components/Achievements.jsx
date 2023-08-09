import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerAchievements = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 250px;
    div {
        h1 {
            font-family: var(--font);
            color: var(--color-one);
            font-size: 1.5rem;
            font-weight: 600;
        }
        p {
            font-family: var(--font);
            color: var(--color-one);
        }
    }
`

const Achievements = ({ photo, title, desc}) => {
  return (
    <ContainerAchievements>
        <img src={photo} alt="" />
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    </ContainerAchievements>
  )
}

Achievements.propTypes = {
    photo: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    desc: PropTypes.string.isRequired, 
  };

export default Achievements;