console.log(min([1,5,8,5,-1,345]));

function min(numbers) {
  return numbers.sort((a, b) => a - b)[0];
}