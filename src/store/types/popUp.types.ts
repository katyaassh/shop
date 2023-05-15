import { IAction } from './types';
import { CLOSE_SIGN_IN, OPEN_SIGN_IN } from '../actions/popUp.actions';

export interface IPopUpState {
    isOpenSignIn: boolean;
}

export type OpenSignInAction = IAction<typeof OPEN_SIGN_IN>;
export type CloseSignInAction = IAction<typeof CLOSE_SIGN_IN>;

export type PopUpActions = OpenSignInAction | CloseSignInAction;
