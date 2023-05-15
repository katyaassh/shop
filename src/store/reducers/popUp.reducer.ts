import { IPopUpState, PopUpActions } from '../types/popUp.types';
import { popUpState } from '../states/popUp.state';
import { CLOSE_SIGN_IN, OPEN_SIGN_IN } from '../actions/popUp.actions';

export const popUpReducer = (state: IPopUpState = popUpState, action: PopUpActions): IPopUpState => {
    switch (action.type) {
        case OPEN_SIGN_IN: {
            return {
                ...state,
                isOpenSignIn: true,
            };
        }
        case CLOSE_SIGN_IN: {
            return {
                ...state,
                isOpenSignIn: false,
            };
        }
        default:
            return state;
    }
};
