import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import Helmet from 'react-helmet';


const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
    Dean Infotech Pvt. Ltd since its inception in 1996, has transformed itself from a computer training institute to a complete Information Technology service and solutions providing company. By using creativity of advance technology to provide unique solutions our clients refer to Dean Infotech as the ‘Dean of Information Technology.
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
    We build the foundation for the intellective business by working with upcoming technologies to provide a better customer experience through personalized services and enhanced collaboration.
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <p>
    We offer edge cutting solutions that fulfil your business needs
    </p>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default App;