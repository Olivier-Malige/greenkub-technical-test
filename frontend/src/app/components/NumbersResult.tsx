import {
  StyledLabel,
  StyledNumber,
} from '../styledComponents/styledComponents';

interface NumbersResultProps {
  numbers: number[];
  target: number | null;
  indices: [number, number] | null;
  canAddNumbers: boolean | null;
  moreThanOneSolution: boolean | null;
}

function NumbersResult({
  numbers,
  target,
  indices,
  canAddNumbers,
  moreThanOneSolution,
}: NumbersResultProps) {
  return (
    <>
      <div>
        <StyledLabel>Target: </StyledLabel>
        <StyledNumber color={canAddNumbers ? 'success' : 'warning'}>
          {target}
        </StyledNumber>
      </div>
      <div>
        <StyledLabel>Result: </StyledLabel>
        {/* eslint-disable react/no-array-index-key */}
        {numbers.map((number, index) =>
          indices?.includes(index) ? (
            <StyledNumber
              key={`${number}_${index}`}
              color={canAddNumbers ? 'success' : 'warning'}
            >
              {number},&nbsp;
            </StyledNumber>
          ) : (
            <StyledNumber key={`${number}_${index}`} color="error">
              {number},&nbsp;
            </StyledNumber>
          )
        )}
        {/* eslint-enable react/no-array-index-key */}
        {moreThanOneSolution ? 'more than one solution' : ''}
      </div>
    </>
  );
}

export default NumbersResult;
