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
`
const ArrowButtonLeft = styled.button`
  border: none;
  font-size: 2rem;
  color: var(--color-one);
  background-color: #E6F0F4;
  cursor: pointer;
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
        <ArrowButtonLeft onClick={this.handlePrevClick}>&lt;</ArrowButtonLeft>
        <div>
        <TitleClientsContainer>Few words From Our Clients</TitleClientsContainer>
        <Carousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={this.setActiveSlideIndex}
          itemsToShow={1} 
          itemsToScroll={1} 
        >
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client.png"
              name="Jane Cooper"
              text="We had an incredible experience working with them and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly."
              job="CEO, ABC Corporation"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client2.png"
              name="Juliet Clayre"
              text="We're extremely pleased with the services provided by the team. They have a remarkable ability to understand and adapt to our needs. Their dedication and hard work played a significant role in enhancing our project. Highly recommended!"
              job="CEO, Vanders Academy"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client3.png"
              name="Jasmine Thea"
              text="Working with this team was a fantastic experience. Their creative approach to problem-solving brought fresh ideas to our project. They delivered high-quality work within the given timeframe and exceeded our expectations."
              job="Marketing Producer, SKA Corporation"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client4.png"
              name="Martin Spencer"
              text="The team's expertise and professionalism were outstanding. Their attention to detail and commitment to delivering results were impressive. Collaborating with them was a pleasure, and they significantly contributed to the success of our project."
              job="Manager Production, SKA Corporation"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client5.png"
              name="Noah Everett"
              text="We're truly thankful for the support provided by the team. Their dedication to understanding our vision and delivering solutions that align with our goals was remarkable. Their contribution made a significant impact on the success of our project."
              job="CEO, SKA Corporation"
            />
          </div>
        </Carousel>
        </div>

        <ArrowButtonRight onClick={this.handleNextClick}>&gt;</ArrowButtonRight>
      </SectionClientsContainer>
    )
  }
}

export default SectionClients;