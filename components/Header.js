import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  background: gray;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            The Stupid-Hard Harry Potter Trivia Challenge
          </Link>
        </Logo>
      </div>
      <Nav />
    </HeaderStyles>
  )
}