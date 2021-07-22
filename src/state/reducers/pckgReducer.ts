interface PckgState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
    SEARCH_PCKG = "search_pckg",
    SEARCH_PCKG_SUCCESS = "search_pckg_success",
    SEARCH_PCKG_ERROR = "search_pckg_error"
}

interface SearchPckgAction {
  type: ActionType.SEARCH_PCKG;
}

interface SearchPckgSuccessAction {
  type: ActionType.SEARCH_PCKG_SUCCESS;
  payload: string[];
}

interface SearchPckgErrorAction {
  type: ActionType.SEARCH_PCKG_ERROR;
  payload: string;
}

type Action = SearchPckgAction | SearchPckgSuccessAction | SearchPckgErrorAction

const reducer = (
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

export default reducer;
