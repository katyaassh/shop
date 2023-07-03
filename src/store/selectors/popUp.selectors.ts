import { IState } from '../types/types';
import { createSelector } from 'reselect';
import { IPopUpState } from '../types/popUp.types';

export const selectPopUpState = (state: IState): IPopUpState => state.popUp;

export const selectIsOpenSignIn = createSelector(selectPopUpState, (state: IPopUpState): boolean => state.isOpenSignIn);
