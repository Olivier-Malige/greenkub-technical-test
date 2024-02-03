import axios from 'axios';

export type FindTwoNumbersEndpoint =
  | {
      success: true;
      data: {
        canAddNumbers: boolean;
        indices: [number, number];
        moreThanOneSolution: boolean;
      };
    }
  | { success: false; error: string };

async function findTwoNumbersEndpoint({
  numbers,
  target,
}: {
  numbers: number[];
  target: number;
}): Promise<FindTwoNumbersEndpoint> {
  try {
    const response = await axios.post<{
      canAddNumbers: boolean;
      indices: [number, number];
      moreThanOneSolution: boolean;
    }>(`${import.meta.env.VITE_API_URL}/find-two-numbers`, {
      numbers,
      target,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error: unknown) {
    if (!axios.isAxiosError(error) || !error.response) {
      return {
        success: false,
        error: 'Unknown error',
      };
    }
    return {
      success: false,
      error: `Request ended with status ${error.response.status} : ${error.response.data}`,
    };
  }
}

export default findTwoNumbersEndpoint;
