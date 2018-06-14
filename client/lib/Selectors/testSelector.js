export function getClickedTimes(state) {
    const times = state.getIn(['test', 'clickedTimes']);
    return times;
} 