import { Component } from "react";
import Carousel from "react-simply-carousel";
import styled from 'styled-components';
import ClientSlider from '../components/ClientSlider';

const SectionClientsContainer = styled.div`
    height: 60vh;
    background-color: #E6F0F4;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
      height: 90vh;
    }

    @media (min-width: 359px) and (max-width: 362px) {
      height: 100vh;
    }

    @media (max-width: 350px) {
      height: 100vh;
    }
`
const TitleClientsContainer = styled.h1`
    color: var(--color-one);
    font-family: var(--font);
    text-align: center;
    font-weight: 605;
    font-size: 2rem;
    padding-top: 3rem;
`
const ArrowButtonRight = styled.button`
  border: none;
  font-size: 2rem;
  color: var(--color-one);
  cursor: pointer;
  background-color: #E6F0F4;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0%;
    bottom: 5%;
    z-index: 888;
  }
  @media (max-width: 450px) {
    right: 8%;
    bottom: 0%;
  }
`
const ArrowButtonLeft = styled.button`
  border: none;
  font-size: 2rem;
  color: var(--color-one);
  background-color: #E6F0F4;
  cursor: pointer;
  z-index: 888;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 15%;
    bottom: 5%;
    z-index: 888;
  }
  @media (max-width: 450px) {
    display: block;
    position: absolute;
    right: 19%;
    bottom: 0%;
    z-index: 888;
  }
`
const ContainerArrowCarrousel = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const DivSlideCarousel = styled.div`
  width: 700px;

  @media (min-width: 601px) and (max-width: 768px) {
    width: 550px;
  }
  @media (max-width: 455px) {
    width: 350px;
  }
  @media (max-width: 360px) {
    width: 290px;
  }
  @media (min-width: 456px) and (max-width: 599px) {
    width: 450px;
  }
`

class SectionClients extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  handleNextClick = () => {
    const { activeSlideIndex } = this.state;
    const nextSlide = activeSlideIndex + 1;
    this.setState({ activeSlideIndex: nextSlide });
  };

  handlePrevClick = () => {
    const { activeSlideIndex } = this.state;
    const prevSlide = activeSlideIndex - 1;
    this.setState({ activeSlideIndex: prevSlide });
  };

  render() {
    const { activeSlideIndex } = this.state;

    return (
      <SectionClientsContainer>
        <div>
          <TitleClientsContainer>Few words From Our Clients</TitleClientsContainer>
          <ContainerArrowCarrousel>
            <ArrowButtonLeft onClick={this.handlePrevClick}>&lt;</ArrowButtonLeft>
            <Carousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={this.setActiveSlideIndex}
            itemsToShow={1} 
            itemsToScroll={1} 
          >
            <DivSlideCarousel>
              <ClientSlider
                img="/client.png"
                name="Jane Cooper"
                text="We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly."
                job="ABC Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client2.png"
                name="Juliet Clayre"
                text="We're extremely pleased with the services provided by the team. They have a remarkable ability to understand and adapt to our needs. Their dedication and hard work played a significant role in enhancing our project. Highly recommended!"
                job="Vanders Academy"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client3.png"
                name="Jasmine Thea"
                text="Working with this team was a fantastic experience. Their creative approach to problem-solving brought fresh ideas to our project. They delivered high-quality work within the given timeframe and exceeded our expectations."
                job="SKA Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client4.png"
                name="Martin Spencer"
                text="The team's expertise and professionalism were outstanding. Their attention to detail and commitment to delivering results were impressive. Collaborating with them was a pleasure, and they significantly contributed to the success of our project."
                job="SKA Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client5.png"
                name="Noah Everett"
                text="We're truly thankful for the support provided by the team. Their dedication to understanding our vision and delivering solutions that align with our goals was remarkable. Their contribution made a significant impact on the success of our project."
                job="SKA Corporation"
              />
              </DivSlideCarousel>
            </Carousel>
            <ArrowButtonRight onClick={this.handleNextClick}>&gt;</ArrowButtonRight>
          </ContainerArrowCarrousel>
        </div>

      </SectionClientsContainer>
    )
  }
}

export default SectionClients;