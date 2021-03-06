import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Container, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import CustomizedNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Container>
          <Row>
              <CustomizedNavbar />
          </Row>

        </Container>
        
        <div className='content'>
          <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/projects'>
                <Projects />
            </Route>
            
            <Route path='/github' component={() => {
              window.location.href = 'https://github.com/katherfrain'
            }}/> 
          
            <Route path='/linkedin' exact component={() => {
              window.location.href = 'https://www.linkedin.com/in/katherine-frain-92999ba7/'
            }}/>
     
          </Switch>
        </div>
        </div>
  );
}

export default App;
