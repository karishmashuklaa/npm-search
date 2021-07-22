interface PckgState {
    loading: boolean;
    error: string | null;
    data: string[];
}

interface SearchPckgAction {
    type: 'search_pckg';
}

interface SearchPckgSuccessAction {
    type: 'search_pckg_success';
    payload: string[];
}

interface SearchPckgErrorAction {
    type: 'search_pckg_error';
    payload: string;
}

const reducer = (state: PckgState, action): PckgState => {
    const { type, payload } = action;
    switch(type) {
        case 'search_pckg':
            return {
                loading: true,
                error: null,
                data: []
            };
        case 'search_pckg_success':
            return {
                loading: false,
                error: null,
                data: payload
            };
        case 'search_pckg_error':
            return {
                loading: false,
                error: payload,
                data: []
            };
        default:
            return state;
    }

};

export default reducer;