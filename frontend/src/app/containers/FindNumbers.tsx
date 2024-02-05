import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';
import { findNumbersAction } from '../../store/numbers/actions';
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledTitle,
} from '../styledComponents/styledComponents';
import NumbersResult from '../components/NumbersResult';

function FindNumbers() {
  const dispatch = useDispatch();

  const [numbersInput, setNumbersInput] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const { numbers, target } = useSelector(
    (state: RootState) => state.numbers.prompt
  );
  const { indices, moreThanOneSolution, canAddNumbers } = useSelector(
    (state: RootState) => state.numbers.result
  );

  const error = useSelector((state: RootState) => state.numbers.error);

  const handleSetNumbers = () => {
    const parsedNumbers = numbersInput.split(',').map(Number);
    dispatch(findNumbersAction(parsedNumbers, Number(targetValue)));
  };

  return (
    <StyledContainer>
      <StyledTitle>Find two numbers</StyledTitle>
      <NumbersResult
        numbers={numbers}
        target={target}
        indices={indices}
        canAddNumbers={canAddNumbers}
        moreThanOneSolution={moreThanOneSolution}
        error={error}
      />
      <div>
        <StyledInput
          type="text"
          placeholder="Enter numbers separated by comma"
          value={numbersInput}
          onChange={(event) => setNumbersInput(event.target.value)}
        />
        <StyledInput
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
          Find
        </StyledButton>
      </div>
    </StyledContainer>
  );
}

export { FindNumbers };
