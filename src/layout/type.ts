
import {MenuProps} from "../types";

export interface State {
  theme: string,
  menuItem: MenuProps[],
  blog?: string
}

export interface Context {
  state: State,
  dispatch: (dispatchParams: any) => void
}
