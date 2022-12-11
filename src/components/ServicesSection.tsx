import styled from 'styled-components'

import { fade } from '../Animation'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import { image } from '../img/img'
import money from '../img/money.svg'
import team from '../img/teamwork.svg'
import { About, Description, Image } from '../styles'
import { Card } from './Card'
import { useScroll } from './useScroll'

export const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Services
      ref={element}
      variants={fade}
      animate={controls}
      initial={'hidden'}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card
            img={clock}
            name={'Efficient'}
            alt={'Efficient'}
            text={'Efficient'}
          />
          <Card
            img={team}
            name={'Teamwork'}
            alt={'Teamwork'}
            text={'Teamwork'}
          />
          <Card
            img={diaphragm}
            name={'Diaphragm'}
            alt={'Diaphragm'}
            text={'Diaphragm'}
          />
          <Card
            img={money}
            name={'Affordable'}
            alt={'Affordable'}
            text={'Affordable'}
          />
        </Cards>
      </Description>
      <Image>
        <img src={image.home2} alt={'photo'} />
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`
