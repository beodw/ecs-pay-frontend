import { user } from "./user";

type appState = {
  user: user | undefined;
  loading: Boolean;
  config: Object;
};

export type { appState };
