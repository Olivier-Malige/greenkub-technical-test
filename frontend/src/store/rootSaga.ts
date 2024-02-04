import { all } from 'redux-saga/effects';
import { watchFindNumbers } from './numbers/sagas';

export default function* rootSaga() {
  yield all([watchFindNumbers()]);
}
