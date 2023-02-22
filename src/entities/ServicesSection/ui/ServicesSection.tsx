import styled from 'styled-components'

import { fade } from '../../../app/animations/Animation'
import clock from '../../../shared/assets/img/clock.svg'
import diaphragm from '../../../shared/assets/img/diaphragm.svg'
import { image } from '../../../shared/assets/img/img'
import money from '../../../shared/assets/img/money.svg'
import team from '../../../shared/assets/img/teamwork.svg'
import { About, Description, Image } from '../../../app/styles/styles'
import { Card } from '../../../shared/ui/Card/Card'
import { useScroll } from '../../../shared/lib/useScroll/useScroll'

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
            img={clock as unknown as string}
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
