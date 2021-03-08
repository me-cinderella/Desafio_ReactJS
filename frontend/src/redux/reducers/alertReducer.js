import { alertConstants } from '../constants/alertConstants';

export function alert(state = {}, action) {
    switch (action.type) {
    case alertConstants.SUCCESS:
        return {
            type: 'success',
            message: 'operacion realizada con exito'
        };
    case alertConstants.ERROR:
        return {
            type: 'danger',
            message: "ha ocurrido un error durante la operacion"
        };
    default:
        return state
    }
}
