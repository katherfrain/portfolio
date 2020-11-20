export const ACTION_TAKE_TURN = 'TAKE_TURN'

export function handleturn() {
    return {
        type: ACTION_TAKE_TURN,
        payload: {
            xNext: !this.state.xNext,
            squares: this.squares
        }
    }
}