import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';

function FindNumbers() {
  const dispatch = useDispatch();

  const [numbersInput, setNumbersInput] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const bestIndices = useSelector((state: RootState) => state.numbers.indices);
  const numbers = useSelector((state: RootState) => state.numbers.numbers);
  const target = useSelector((state: RootState) => state.numbers.targetValue);

  const handleSetNumbers = () => {
    const parsedNumbers = numbersInput.split(',').map(Number);

    dispatch({
      type: 'POST_NUMBERS',
      payload: {
        numbers: parsedNumbers,
        target: targetValue,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter numbers (comma-separated)"
        value={numbersInput}
        onChange={(e) => setNumbersInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter target value"
        value={targetValue}
        onChange={(e) => setTargetValue(e.target.value)}
      />
      <button
        type="submit"
        disabled={!numbersInput || !targetValue}
        onClick={handleSetNumbers}
      >
        Submit
      </button>

      <p>Numbers: {numbers.join(', ')}</p>
      <p>Target: {target}</p>
      <p>Best Indices: {bestIndices ? bestIndices.join(', ') : ''}</p>
    </div>
  );
}

export { FindNumbers };
