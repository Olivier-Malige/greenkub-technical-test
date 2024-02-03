import { call, put, takeLatest } from 'redux-saga/effects';
import { setBestIndices, setNumbers } from './slice';
import clientAPI from '../../hooks/clientAPI';
import { FindTwoNumbersEndpoint } from '../../hooks/clientAPI/numbers/findTwoNumbers';

function* postNumbers(action: {
  type: 'POST_NUMBERS';
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
    console.error(response.error);
    return;
  }

  yield put(setBestIndices(response.data.indices));
  yield put(
    setNumbers({
      numbers: action.payload.numbers,
      targetValue: action.payload.target,
    })
  );
}

export function* watchPostNumbers() {
  yield takeLatest('POST_NUMBERS', postNumbers);
}
