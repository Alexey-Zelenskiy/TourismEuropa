const initialState = {
    ones: true,
    neblya: true,
    user: 'Unknown User'
};

export default function states(state = initialState, action) {
    if (action.payload === 'country') {
        let newState = state;

        newState.ones = !newState.ones;

        return newState
    }

    return state;
}