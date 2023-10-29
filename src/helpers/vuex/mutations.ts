import { AnyObjects, InitState } from "@/app/interfaces";
import { MUTATION_ACTION_POST_FIX } from "@/constants/configs";

export interface Error {
  message: string;
}

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

/**
 * Generates mutation functions for a given prefix type and key.
 *
 * @param prefixType - The prefix type for the mutation.
 * @param key - The key for the mutation.
 * @returns An object containing the mutation functions.
 */
export const mutationsGenerator = <T>(prefixType: string, key: string) => {
  const [request, success, failure] = MUTATION_ACTION_POST_FIX;
  const setRequest = (state: AnyObjects) => {
    return mutationReducers.setRequest(state, key);
  };
  const setSuccess = (state: AnyObjects, data: T) => {
    return mutationReducers.setSuccess<T>(state, key, data);
  };
  const setFailure = (state: AnyObjects, error: Error) => {
    return mutationReducers.setFailure<Error>(state, key, error);
  };
  return {
    [`${prefixType}_${request}`]: setRequest,
    [`${prefixType}_${success}`]: setSuccess,
    [`${prefixType}_${failure}`]: setFailure,
  };
};
export const initState: InitState = {
  data: null,
  error: null,
  loading: false,
};
