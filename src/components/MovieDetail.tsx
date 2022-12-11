import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fade, lineAnim } from '../Animation'
import { IMovie, MovieState } from '../movieState'
import { MovieContainer } from './MovieContainer'

export const MovieDetail = () => {
  const [movies, setMovies] = useState<IMovie[]>(MovieState())
  return (
    <>
      {movies.map((movie, index) => (
        <MovieContainer key={index}>
          <Movie>
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div className="line" variants={lineAnim}></motion.div>
            <Hide>
              <Link to={`${movie.url}`}>
                <motion.img src={movie.mainImg} alt="photo" />
              </Link>
            </Hide>
          </Movie>
        </MovieContainer>
      ))}
    </>
  )
}

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  a {
    text-decoration: none;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
