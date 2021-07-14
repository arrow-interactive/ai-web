import { JSX } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from './Context';

/**
 * @description Makes the `href` attribute on the <a> mandatory.
 */
// HTMLAnchorElement is a global variable.
// eslint-disable-next-line no-undef
type LinkProps = JSX.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
}

/**
 * @description An <a> element hooked to the AnimatedLinks context.
 * @param props <a> props but with an mandatory `href` attribute.
 */
function Link (props: LinkProps) {
  const context = useContext(Context);

  // HTMLAnchorElement is a global variable;
  // eslint-disable-next-line no-undef
  const handleClick: JSX.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();

    context.handleChange({ transitioning: true, to: props.href });
  };

  return <a {...props} onClick={handleClick} />;
}

export default Link;
