export interface Action {
  type: string;
  payload: any;
}

export const createAction = (type: string, payload?: any): Action => ({
  type,
  payload,
});
