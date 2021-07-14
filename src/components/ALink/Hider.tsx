import { useContext, useEffect } from 'preact/hooks';
import { Context } from './Context';
import styles from '../../styles/ALink/Hider.module.scss';
import { route } from 'preact-router';

interface IHiderProps {
  delay?: number;
}

/**
 * @description Hides the content as the transition goes on.
 * @note Must be below sticky elements that don't change with the pages: aka. nav bar
 * @param props.delay The delay before redirecting and animating out.
 */
function Hider (props: IHiderProps) {
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
      }, props.delay || 700);
    }
  });

  return (
    <div class={`${styles.hider} ${context.state.transitioning ? styles.transitioning : styles.away}`} />
  );
}

export default Hider;
