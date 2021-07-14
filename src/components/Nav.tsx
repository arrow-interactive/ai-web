import styles from '../styles/Nav/Nav.module.scss';
import Link from './ALink/Link';

import Logo from './Logo';

function Nav () {
  return (
    <div class={styles.container}>
      <Link href='/'><Logo /></Link>
      <div class={styles.spacer} />
      <Link href='/projects' class={styles.link}>projects</Link>
    </div>
  );
}

export default Nav;
