import { ActionType } from "../action-types/types"

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


export type Action = SearchPckgAction | SearchPckgSuccessAction | SearchPckgErrorAction
