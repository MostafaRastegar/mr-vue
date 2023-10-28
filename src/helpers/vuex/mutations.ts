import { AnyObjects, InitState } from "@/app/interfaces";

export interface Error {
  message: string;
}

const mutationActionKey = ["REQUEST", "SUCCESS", "FAILURE"];

export const mutationReducers = {
  setRequest: (state: AnyObjects, key: string) => {
    state[key] = {
      loading: true,
      error: null,
      data: null,
    };
  },
  setSuccess: <T>(state: AnyObjects, key: string, payload?: T | Error) => {
    state[key] = {
      loading: false,
      error: null,
      data: payload,
    };
  },
  setFailure: <T>(state: AnyObjects, key: string, payload?: T | Error) => {
    state[key] = {
      loading: false,
      error: payload,
      data: null,
    };
  },
};

export const mutationKeysGenerator = (key: string) => {
  const result: { [key: string]: string } = {};

  mutationActionKey.forEach((action) => {
    result[`${key}_${action}`] = `${key}_${action}`;
  });

  return result;
};

export const mutationsGenerator = <T>(
  types: AnyObjects,
  prefixType: string,
  key: string
) => ({
  [types[`${prefixType}_${mutationActionKey[0]}`]]: (state: AnyObjects) =>
    mutationReducers.setRequest(state, key),

  [types[`${prefixType}_${mutationActionKey[1]}`]]: (
    state: AnyObjects,
    data: T
  ) => mutationReducers.setSuccess<T>(state, key, data),

  [types[`${prefixType}_${mutationActionKey[2]}`]]: (
    state: AnyObjects,
    error: Error
  ) => mutationReducers.setFailure<Error>(state, key, error),
});

export const initState: InitState = {
  data: null,
  error: null,
  loading: false,
};
