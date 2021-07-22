interface PckgState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (state: PckgState,action: any) => {
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