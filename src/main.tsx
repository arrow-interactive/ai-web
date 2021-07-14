import { render } from 'preact';
import { Router, Route } from 'preact-router';
import Index from './Index';
import Projects from './Projects';
import Nav from './components/Nav';
import './styles/index.scss';
import { Provider } from './components/ALink/Provider';
import Hider from './components/ALink/Hider';

render(<>
  <Provider>
    <Hider />
    <Nav />
    <Router>
      <Route path='/' component={Index} />
      <Route path='/projects' component={Projects} />
    </Router>
  </Provider>
</>, document.getElementById('app')!);
