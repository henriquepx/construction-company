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

    @media (max-width: 425px) {
      height: 80vh;
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
    display: none;
  }
`
const ArrowButtonLeft = styled.button`
  border: none;
  font-size: 2rem;
  color: var(--color-one);
  background-color: #E6F0F4;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
const ContainerArrowCarrousel = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const DivSlideCarousel = styled.div`
  width: 700px;

  @media (max-width: 425px) {
    width: 350px;
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
                job="CEO, ABC Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client2.png"
                name="Juliet Clayre"
                text="We're extremely pleased with the services provided by the team. They have a remarkable ability to understand and adapt to our needs. Their dedication and hard work played a significant role in enhancing our project. Highly recommended!"
                job="CEO, Vanders Academy"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client3.png"
                name="Jasmine Thea"
                text="Working with this team was a fantastic experience. Their creative approach to problem-solving brought fresh ideas to our project. They delivered high-quality work within the given timeframe and exceeded our expectations."
                job="Marketing Producer, SKA Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client4.png"
                name="Martin Spencer"
                text="The team's expertise and professionalism were outstanding. Their attention to detail and commitment to delivering results were impressive. Collaborating with them was a pleasure, and they significantly contributed to the success of our project."
                job="Manager Production, SKA Corporation"
              />
            </DivSlideCarousel>
            <DivSlideCarousel>
              <ClientSlider
                img="/client5.png"
                name="Noah Everett"
                text="We're truly thankful for the support provided by the team. Their dedication to understanding our vision and delivering solutions that align with our goals was remarkable. Their contribution made a significant impact on the success of our project."
                job="CEO, SKA Corporation"
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