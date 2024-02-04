import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';
import { findNumbersAction } from '../../store/numbers/actions';
import Input from '../components/Input';
import { StyledButton } from '../styledComponents/styledComponents';



function FindNumbers() {
  const dispatch = useDispatch();

  const [numbersInput, setNumbersInput] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const bestIndices = useSelector((state: RootState) => state.numbers.indices);
  const numbers = useSelector((state: RootState) => state.numbers.numbers);
  const target = useSelector((state: RootState) => state.numbers.targetValue);

  const handleSetNumbers = () => {
    const parsedNumbers = numbersInput.split(',').map(Number);
    dispatch(findNumbersAction( parsedNumbers, Number(targetValue)));
  };

  return (
    <div>
      <Input
        label="Enter numbers (comma-separated)"
        error="Numbers must be comma-separated integers"
        type="text"
        value={numbersInput}
        onChange={(event) => setNumbersInput(event.target.value)}
      />
      <Input
        type="number"
        placeholder="Enter target value"
        value={targetValue}
        onChange={(event) => setTargetValue(event.target.value)}
      />
      <StyledButton
        type="submit"
        disabled={!numbersInput || !targetValue}
        onClick={handleSetNumbers}
      >
        Submit
      </StyledButton>

      <p>Numbers: {numbers.join(', ')}</p>
      <p>Target: {target}</p>
      <p>Best Indices: {bestIndices ? bestIndices.join(', ') : ''}</p>
    </div>
  );
}




export { FindNumbers };
