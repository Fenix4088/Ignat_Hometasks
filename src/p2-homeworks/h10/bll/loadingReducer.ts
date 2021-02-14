
type initialStateT = {
  loading: boolean;
};

type SetLoadingStatusAT = {
  type: typeof SET_LOADING_STATUS;
  isLoading: boolean;
};

type ActionTypes = SetLoadingStatusAT;

const SET_LOADING_STATUS = "set-loading-status/loadingReducer";

const initialState: initialStateT = {
  loading: false,
};

export const loadingReducer = (
  state = initialState,
  action: ActionTypes
): initialStateT => {
  switch (action.type) {
    case SET_LOADING_STATUS: {
      return { ...state, loading: action.isLoading };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): SetLoadingStatusAT => {
  return {
    type: SET_LOADING_STATUS,
    isLoading,
  };
};