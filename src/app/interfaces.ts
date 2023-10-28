export interface Error {
  message: string;
}
export interface AnyObjects {
  [key: string]: any;
}

export interface RootState {
  users: {
    login: InitState;
    register: InitState;
  };
}
export interface InitState {
  data: any | null;
  error: Error | null;
  loading: boolean;
}
