import { all } from 'redux-saga/effects';
import { watchPostNumbers } from './numbers/sagas';

export default function* rootSaga() {
  yield all([watchPostNumbers()]);
}
