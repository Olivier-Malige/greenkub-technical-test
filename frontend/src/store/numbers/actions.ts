import { FIND_NUMBERS } from './constants';


export const findNumbersAction = (numbers: number[], target: number) => ({
    type: FIND_NUMBERS,
    payload: {
      numbers,
      target
    },
  })
