import { render } from 'preact';
import { Router, Route } from 'preact-router';
import Index from './Index';
import Projects from './Projects';
import Nav from './components/Nav';
import './styles/index.scss';
import { Provider } from './components/ALink/Provider';
import Hider from './components/ALink/Hider';

render(<>
  {/* Provides the context for AnimatedLink components */}
  <Provider>
    {/* Nav bar */}
    <Nav />
    <Hider />
    <Router>
      {/* We can't use path directly on the components as this would clash with TypeScript. */}
      {/* Related issue: https://github.com/preactjs/preact-router/issues/348 */}
      <Route path='/' component={Index} />
      <Route path='/projects' component={Projects} />
    </Router>
  </Provider>
</>, document.getElementById('app')!);
