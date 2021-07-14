import { useContext, useEffect } from 'preact/hooks';
import { Context } from './Context';
import styles from '../../styles/ALink/Hider.module.scss';
import { route } from 'preact-router';

function Hider () {
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
    if (context.state.transitioning) {
      setTimeout(() => {
        if (typeof context.state.to === 'string') route(context.state.to);
        context.handleChange({
          transitioning: false,
          to: undefined
        });
      }, 700);
    }
  });

  return (
    <div class={`${styles.hider} ${context.state.transitioning ? styles.transitioning : styles.away}`} />
  );
}

export default Hider;
