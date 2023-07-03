import { CloseSignInAction, OpenSignInAction } from '../types/popUp.types';

export const OPEN_SIGN_IN = 'OPEN_SIGN_IN';
export const CLOSE_SIGN_IN = 'CLOSE_SIGN_IN';

export const openSignIn = (): OpenSignInAction => {
    return {
        type: OPEN_SIGN_IN,
    };
};
export const closeSignIn = (): CloseSignInAction => {
    return {
        type: CLOSE_SIGN_IN,
    };
};
