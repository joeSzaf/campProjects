function sumAll(arr) {
  let a = arr[0];
  let b = arr[1];

  if (a > b) {
    a = arr[1];
    b = arr[0];
  }

  let sum = 0;

  for (let i = 0; i <= b-a; i++){
    sum += a + i;
  }

  return sum;

}
