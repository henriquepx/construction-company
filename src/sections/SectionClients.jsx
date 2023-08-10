import { Component } from "react";
import Carousel from "react-simply-carousel";
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

class SectionClients extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <SectionClientsContainer>
        <TitleClientsContainer>Few words From Our Clients</TitleClientsContainer>
        <Carousel
          activeSlideIndex={this.state.activeSlideIndex}
          onRequestChange={this.setActiveSlideIndex}
          itemsToShow={1} 
          itemsToScroll={1} 
        >
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client.png"
              name="Jane Cooper"
              job="CEO, ABC Corporation"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client2.png"
              name="Juliet Clayre"
              job="CEO, Vanders Academy"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client3.png"
              name="Jasmine Thea"
              job="Marketing Producer, SKA Corporation"
            />
          </div>
          <div style={{ width: '1000px' }}>
            <ClientSlider
              img="/client4.png"
              name="Martin Spencer"
              job="Manager Production, SKA Corporation"
            />
          </div>
        </Carousel>
      </SectionClientsContainer>
    )
  }
}

export default SectionClients;