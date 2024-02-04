import { call, put, takeLatest } from 'redux-saga/effects';
import { setBestIndices, setNumbers } from './slice';
import clientAPI from '../../hooks/clientAPI';
import { FindTwoNumbersEndpoint } from '../../hooks/clientAPI/numbers/findTwoNumbers';
import { FIND_NUMBERS } from './constants';


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

export function* watchFindNumbers() {
  yield takeLatest(FIND_NUMBERS, findNumbers);
}
