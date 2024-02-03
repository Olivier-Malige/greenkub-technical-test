import pingEndpoint from './example/ping';
import findTwoNumbersEndpoint from './numbers/findTwoNumbers';

export default {
  example: {
    ping: pingEndpoint,
  },
  numbers: {
    findTwoNumbers: findTwoNumbersEndpoint,
  },
};
