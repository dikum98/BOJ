// 요세푸스 문제 (연결리스트)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, K] = input[0].split(" ");

// input: N K (1 ≤ K ≤ N ≤ 5,000)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.cursor = null;
  }
}

// 원형 연결 리스트 구현
const ll = new LinkedList();
let current, prev;
for (let i = 1; i <= +N; i++) {
  current = new Node(i);
  if (i === 1) {
    ll.head = current;
    if (+K === 1) {
      ll.cursor = current;
    }
  } else {
    if (i === +K) {
      ll.cursor = current;
    }
    prev.next = current;
    current.prev = prev;
  }
  prev = current;
}
current.next = ll.head;
ll.head.prev = current;

// 타겟을 하나씩 answer에 넣어줌
let answer = new Array(+N).fill(0);
for (let i = 0; i < +N; i++) {
  let count = +K;
  ll.cursor.prev.next = ll.cursor.next;
  ll.cursor.next.prev = ll.cursor.prev;
  answer[i] = ll.cursor.val;
  while (count--) {
    ll.cursor = ll.cursor.next;
  }
}

console.log(`<${answer.join(", ")}>`);
