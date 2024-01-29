import { sleep } from './helpers.js';

export const retryPromise = async <Result>(
  fn: () => Promise<Result>,
  retryDelay = 1000,
  maxTries = 3,
  errors: Error[] = []
): Promise<Result | { errors: Error[] }> => {
  const newMaxTries = maxTries - 1;

  if (newMaxTries === 0) {
    return {
      errors,
    };
  }

  try {
    const result = await fn();
    return result;
  } catch (err) {
    await sleep(retryDelay);
    return retryPromise(fn, retryDelay, newMaxTries, [...errors, err as Error]);
  }
};
