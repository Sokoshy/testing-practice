export function analyzeArray(arrayNumber) {
  const arrayLength = arrayNumber.length;
  const average = arrayNumber.reduce((acc, curr) => acc + curr, 0,) / arrayLength;
  const min = arrayNumber.reduce(
    (acc, curr) => (acc > curr) ? curr : acc,
    arrayNumber[0],
  );
  const max = arrayNumber.reduce(
    (acc, curr) => (acc > curr) ? acc : curr,
    arrayNumber[0],
  );
  return { average: average, min: min, max: max, length: arrayLength };
}
