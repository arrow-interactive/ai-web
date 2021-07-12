import styles from '../styles/Nav/Nav.module.scss';

import Logo from './Logo';

function Nav () {
  return (
    <div class={styles.container}>
      <a href='/'><Logo /></a>
      <div class={styles.spacer} />
      <a href='/projects' class={styles.link}>projects</a>
    </div>
  );
}

export default Nav;
