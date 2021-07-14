import { createContext } from 'preact';

export interface IALinkState {
  to?: string;
  transitioning: boolean;
}

export interface IALinkContext {
  state: IALinkState;
  handleChange: (val: IALinkState) => void;
}

/**
 * @description Provides the context for A(nimated)Links
 */
export const Context = createContext<IALinkContext>({ state: { transitioning: false }, handleChange: () => {} });
