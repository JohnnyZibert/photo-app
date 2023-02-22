import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { AnimationPage } from '../../../app/animations/Animation'
import { IMovie, MovieState } from '../../../movieState'
import { Award } from '../Award/Award'

export const OneMovie = () => {
  const url = useLocation()
  const [movies, setMovies] = useState<IMovie[]>(MovieState)
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    const currentMovie = movies.find(
      (movieItem) => movieItem.url === url.pathname
    )
    currentMovie && setMovie(currentMovie)
  }, [url, movies])

  return (
    <>
      {movie && (
        <Details
          variants={AnimationPage}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie?.title}</h2>
            <img src={movie?.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award, index) => (
              <Award
                title={award.title}
                key={index}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  )
}

const Details = styled(motion.div)`
  color: white;
`

const HeadLine = styled.div`
  padding-top: 20vh;
  min-height: 90vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    top: 5%;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 0;
  @media (max-width: 1100px) {
    display: block;
    margin: 2rem 2rem;
  }
`
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`
