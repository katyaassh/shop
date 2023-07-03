import { IUser } from '../../models/user';
import { IAction } from './types';
import { SET_USER } from '../actions/user.actions';

export interface IUserState {
    user: IUser;
}

export type SetUserAction = IAction<typeof SET_USER, IUser>;

export type UserActions = SetUserAction;
