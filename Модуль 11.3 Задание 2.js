function isPrime(num) {
     if (num <= 1) {
       return false;
     }
  for( let i = 2, sqrt = Math.sqrt(num); i<= sqrt; i++){
  if (num > 1000) {
    return false;
  }
}
return true;

}
console.log(isPrime(7));
console.log(isPrime(1001));
console.log(isPrime(11));