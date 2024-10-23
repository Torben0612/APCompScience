function averageOfThree(a, b, c) {
  return (a + b + c)/3;
}

function greatestOfThree(a, b, c) {
  if ((a >= b) && (a >= c)) {
    return a;
  }
  else if ((b >= a) && (b >= c)) {
    return b;
  }
  else {
    return c;
  }
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

function odds(n) {
  var i = 1;
  while (i <= n) {
    console.log(2*i - 1);
    i = i + 1;
  }
}

function squares(n) {
  var i = 1;
  while (i <= n) {
    console.log(i*i);
    i = i + 1;
  }
}
