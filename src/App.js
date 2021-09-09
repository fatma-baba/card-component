import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar ,Container, Row, Col } from 'react-bootstrap';
import SiteContent from './Component/SiteContent';


function App() {
  return (
    <Container className="App" fluid>
      <SiteContent/>
    </Container>
  );
}

export default App;
