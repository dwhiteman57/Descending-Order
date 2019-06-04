function descendingOrder(n) {
  let decOrder = n.toString().split('').sort(function(a,b) {
    return b-a}).join('');
  return parseInt(decOrder);
}



console.log(descendingOrder(8236734) );
console.log(descendingOrder(132) );
console.log(descendingOrder(092348570982754) );
console.log(descendingOrder(83459873457231) );
