// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { NumbersState } from '../store/numbers/slice';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/

export interface RootState {
  numbers: NumbersState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
