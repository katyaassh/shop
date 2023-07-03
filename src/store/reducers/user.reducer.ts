import { IUserState, UserActions } from '../types/user.types';
import { userState } from '../states/user.state';
import { SET_USER } from '../actions/user.actions';

export const userReducer = (state: IUserState = userState, action: UserActions): IUserState => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }
        default:
            return state;
    }
};
