import { call, put, takeLatest } from 'redux-saga/effects';
import clientAPI from '../../hooks/clientAPI';
import { FindTwoNumbersEndpoint } from '../../hooks/clientAPI/numbers/findTwoNumbers';
import { FIND_NUMBERS } from './constants';
import { setError, setPrompt, setResult } from './slice';

function* findNumbers(action: {
  type: typeof FIND_NUMBERS;
  payload: {
    numbers: number[];
    target: number;
  };
}) {
  const response: FindTwoNumbersEndpoint = yield call(
    clientAPI.numbers.findTwoNumbers,
    action.payload
  );

  if (!response.success) {
    yield put(setError(response.error));
    return;
  }

  yield put(setResult(response.data));
  yield put(setPrompt(action.payload));
  yield put(setError(null));
}

export function* watchFindNumbers() {
  yield takeLatest(FIND_NUMBERS, findNumbers);
}
