import { IState } from '../types/types';
import { createSelector } from 'reselect';
import { IUserState } from '../types/user.types';
import { IUser } from '../../models/user';

export const selectUserState = (state: IState): IUserState => state.user;

export const selectUser = createSelector(selectUserState, (state: IUserState): IUser => state.user);
