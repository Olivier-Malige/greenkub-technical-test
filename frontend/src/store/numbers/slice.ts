import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NumbersState {
  prompt: {
    numbers: number[];
    target: number | null;
  };
  result: {
    indices: [number, number] | null;
    moreThanOneSolution: boolean | null;
    canAddNumbers: boolean | null;
  };
  error: string | null;
}

const initialState: NumbersState = {
  prompt: {
    numbers: [],
    target: null,
  },
  result: {
    indices: null,
    moreThanOneSolution: null,
    canAddNumbers: null,
  },
  error: null,
};

const slice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setPrompt: (
      state,
      action: PayloadAction<{ numbers: number[]; target: number }>
    ) => {
      state.prompt = action.payload;
    },
    setResult: (
      state,
      action: PayloadAction<{
        indices: [number, number];
        moreThanOneSolution: boolean;
        canAddNumbers: boolean;
      }>
    ) => {
      state.result = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setPrompt, setResult, setError } = slice.actions;
export default slice.reducer;
