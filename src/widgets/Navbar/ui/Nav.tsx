import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { navLineAnim } from '../../../app/animations/Animation'

export const Nav = () => {
  const { pathname } = useLocation()
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to={'/'}>
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to={'/'}>1. About Us</Link>
          <Line
            variants={navLineAnim}
            initial={'hidden'}
            animate={pathname === '/' ? 'show' : 'hidden'}
          />
        </li>
        <li>
          <Link to={'/works'}>2. Our Work</Link>
          <Line
            variants={navLineAnim}
            initial={'hidden'}
            animate={pathname === '/works' ? 'show' : 'hidden'}
          />
        </li>
        <li>
          <Link to={'/contact'}>3. Contact Us</Link>
          <Line
            variants={navLineAnim}
            initial={'hidden'}
            animate={pathname === '/contact' ? 'show' : 'hidden'}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  min-height: 10vh;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem 0;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`
const Line = styled(motion.div)`
  width: 0;
  height: 0.3rem;
  position: absolute;
  background: #23d993;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1200px) {
    bottom: -20%;
    left: 60%;
    position: absolute;
  }
`
