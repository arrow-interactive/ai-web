import { createContext } from 'preact';

export interface IALinkState {
  to?: string;
  transitioning: boolean;
}

export interface IALinkContext {
  state: IALinkState;
  handleChange: (val: IALinkState) => void;
}

export const Context = createContext<IALinkContext>({ state: { transitioning: false }, handleChange: () => {} });
