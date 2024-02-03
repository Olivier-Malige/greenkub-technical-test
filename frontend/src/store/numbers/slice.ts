import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NumbersState {
  numbers: number[];
  targetValue: number | null;
  indices: [number, number] | null;
}

const initialState: NumbersState = {
  numbers: [],
  targetValue: null,
  indices: null,
};

const slice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setNumbers: (
      state,
      action: PayloadAction<{ numbers: number[]; targetValue: number }>
    ) => {
      state.numbers = action.payload.numbers;
      state.targetValue = action.payload.targetValue;
    },
    setBestIndices: (state, action: PayloadAction<[number, number]>) => {
      state.indices = action.payload;
    },
  },
});

export const { setNumbers, setBestIndices } = slice.actions;
export default slice.reducer;
