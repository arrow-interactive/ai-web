import Nav from './components/Nav';
import { useEffect } from 'preact/hooks';

function App () {
  useEffect(() => {
    console.log(Nav);
  }, [Nav]);

  console.log(Nav);
  // @ts-ignore
  window.nav = Nav;
  return (
    <>
      <p>app works!</p>

    </>
  );
}

export default App;
