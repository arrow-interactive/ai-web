import { useState } from 'preact/hooks';
import { Context, IALinkContext, IALinkState } from './Context';
import { FunctionComponent as FC } from 'preact';

export const Provider: FC = ({ children }) => {
  const [state, setState] = useState<IALinkState>({ transitioning: false });

  const handleChange = (val: IALinkState) => {
    setState(val);
  };

  const value: IALinkContext = {
    state,
    handleChange
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
