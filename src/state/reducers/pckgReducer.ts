import { ActionType } from "../action-types/types";
import { Action } from "../actions/index";

interface PckgState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const pckgReducer = (
  state: PckgState,
  action: Action
): PckgState => {
  switch (action.type) {
    case ActionType.SEARCH_PCKG:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_PCKG_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_PCKG_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default pckgReducer;
