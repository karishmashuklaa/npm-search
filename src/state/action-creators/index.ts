import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/types";
import { Action } from "../actions";

export const searchPckg = (pckg: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SEARCH_PCKG,
  });

  try {
    const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search", 
        {
        params: {
            text: pckg
        }
    }); 

    const names = data.objects.map((result: any) => {
        return result.package.name;
    })

    dispatch({
        type: ActionType.SEARCH_PCKG_SUCCESS,
        payload: names
    });

  } catch (err) {
    dispatch({
      type: ActionType.SEARCH_PCKG_ERROR,
      payload: err.message,
    });
  }
};
