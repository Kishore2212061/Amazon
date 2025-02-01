import Photo from './components/photo/Photo'
import styled from 'styled-components'
import Navigation from './components/navigation/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

const Container = styled.div`
              display:flex;
              flex-direction:column;
              gap:1.5rem;
              padding-left:1.1rem;
            border-radius: 30px;  
            background-color: #3f3d56;
                @media (max-width: 1080px) { 
                      flex-direction: row;
                      margin-bottom:-2.5%;
  }
            
  }
`;

const Links=()=> {
  return (
    <Container>
    <Photo></Photo>
    <Router>
      <Navigation></Navigation>
    </Router>
  </Container>
  )
}

export default Links