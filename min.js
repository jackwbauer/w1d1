function min(numbers) {
 var lowest = numbers[0];
 for (var i = 1; i < numbers.length; i++) {
   if (numbers[i] < lowest) {
     lowest = numbers[i];
   }
 }
 return lowest;
}