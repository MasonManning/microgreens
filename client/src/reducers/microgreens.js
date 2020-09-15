const state = []
const microgreens = (state = [{microgreens: []}], action) => {
    switch (action.type) {
        case 'ADD_MICROGREEN':
            return state.push({microgreens: {micro: "This is a microgreens Object"}})
        default:
            return state
    }
}

export default microgreens