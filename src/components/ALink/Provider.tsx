import { useState } from 'preact/hooks';
import { Context, IALinkContext, IALinkState } from './Context';
import { FunctionComponent as FC } from 'preact';

/**
 * @description Provides the context (global props) to the AnimatedLink components.
 * @note Must have all AnimatedLink components (indirectly or not) as children.
 */
export const Provider: FC = ({ children }) => {
  // The context's state
  const [state, setState] = useState<IALinkState>({ transitioning: false });

  // Intermediary function
  const handleChange = (val: IALinkState) => {
    setState(val);
  };

  // Value passed into the context provider
  const value: IALinkContext = {
    state,
    handleChange
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
