const STACK__SIZE = 10005;
const dat = [];
let pos = 0;

function push(val) {
  dat[pos++] = val;
}

function pop() {
  pos--;
}

function top() {
  return dat[pos - 1];
}

push(1);
push(2);
pop();
push(100);
top();
console.log(pos);
