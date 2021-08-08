import types from './types'

export const useActions = (state, dispatch) => ({
  requestRandomQuotes: (payload) =>
    dispatch({ type: types.REQUEST_RANDOM_QUOTES, payload: payload })
})
