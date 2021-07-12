import { render } from 'preact';
import { Router, Route } from 'preact-router';
import Index from './Index';
import Projects from './Projects';
import Nav from './components/Nav';
import './styles/index.scss';

render(<>
  <Nav />
  <Router>
    <Route path='/' component={Index} />
    <Route path='/projects' component={Projects} />
  </Router>
</>, document.getElementById('app')!);
