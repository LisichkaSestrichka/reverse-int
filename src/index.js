module.exports = function reverse (n) {
  if (0 > n){
  n = -n;
  let unRev = String(n);
  let a = unRev.split('').reverse().join('');
  return a;
 }
  let unRev = String(n);
  let a = unRev.split('').reverse().join('');
  return a;
}
