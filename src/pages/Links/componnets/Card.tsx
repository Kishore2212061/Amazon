import React from 'react'
import Photo from './Photo'
import { Container } from './Styles'
import Navigation from './Navigation'
import { BrowserRouter as Router } from 'react-router-dom'
function Card() {
  return (
   
    <Container>
        <Photo></Photo>
        <Router>
        <Navigation></Navigation>
        </Router>
    </Container>
    
  )
}

export default Card