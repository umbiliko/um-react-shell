import { AppActions, AppModel, AppState } from 'um-react-core';

export interface ShellState extends AppState {
}

export interface ShellActions extends AppActions {
}

export type ShellAction = ShellActions[keyof ShellActions];

export interface ShellModel extends AppModel {
}
